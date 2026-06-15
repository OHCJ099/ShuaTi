import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
DOCX = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "tmp_choice.docx"
DATA_FILE = ROOT / "data" / "questions.js"
IMAGE_DIR = ROOT / "assets" / "answers" / "soft-choice"
IMAGE_PREFIX = "assets/answers/soft-choice"

# These questions in 选择题.docx duplicate questions already present in
# 2025-2026第二学期软件工程测试.txt. Keep the earlier curated entries to avoid
# showing the same question twice. Question 41 is intentionally not skipped
# because the old source lacks the required figure; the old figure-less item is
# removed below instead.
DUPLICATE_CHOICE_NUMBERS = set()

LEGACY_DUPLICATE_IDS_TO_REMOVE = {
    "q-0190d55105",
    "q-4446fad68b",
    "q-8dfb9ff42f",
    "q-8238e5939f",
    "q-63cf607640",
    "q-a0e9584db7",
    "q-eba867fe78",
    "q-75f318df3f",
    "q-74035686ad",
    "q-893e03a6ca",
    "q-43a3899128",
    "q-ade7415197",
    "q-48740d2598",
    "q-25c0a48bc1",
    "q-34d2038291",
    "q-b123474ecf",
    "q-e29869f6cd",
    "q-eb7bbe93ec",
    "q-ad0fa54866",
    "q-516a9b6e07",
}

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def read_bank():
    text = DATA_FILE.read_text(encoding="utf-8-sig").strip()
    prefix = "window.QUESTION_BANK = "
    if not text.startswith(prefix):
        raise RuntimeError("data/questions.js format not recognized")
    if text.endswith(";"):
        text = text[:-1]
    return json.loads(text[len(prefix) :])


def write_bank(bank):
    DATA_FILE.write_text("window.QUESTION_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")


def paragraph_text(para):
    return "".join(t.text or "" for t in para.findall(".//w:t", NS)).strip().replace("\u00a0", " ")


def parse_docx(path):
    if not path.exists():
        raise FileNotFoundError(path)

    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(path) as zf:
        root = ET.fromstring(zf.read("word/document.xml"))
        rels = ET.fromstring(zf.read("word/_rels/document.xml.rels"))
        relmap = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels}
        for name in zf.namelist():
            if name.startswith("word/media/"):
                (IMAGE_DIR / Path(name).name).write_bytes(zf.read(name))

    answer_lines = []
    questions = []
    current = None
    in_answer = False

    def finish_current():
        nonlocal current
        if current:
            while len(current["options"]) < 4:
                key = chr(ord("A") + len(current["options"]))
                current["options"].append({"key": key, "text": ""})
            questions.append(current)
            current = None

    for para in root.findall(".//w:p", NS):
        text = paragraph_text(para)
        images = []
        for blip in para.findall(".//a:blip", NS):
            rid = blip.attrib.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
            target = relmap.get(rid, "")
            if target:
                images.append(f"{IMAGE_PREFIX}/{Path(target).name}")

        answer_pair_count = len(re.findall(r"\d+[、.]\s*[A-D]", text))
        if answer_pair_count >= 3:
            in_answer = True
            finish_current()
            answer_lines.append(text)
            continue
        if in_answer:
            if text:
                answer_lines.append(text)
            continue

        question_match = re.match(r"^(\d+)[、.]\s*(.+)$", text)
        if question_match:
            finish_current()
            current = {
                "number": int(question_match.group(1)),
                "prompt": question_match.group(2).strip(),
                "images": [],
                "options": [],
            }
            if images:
                current["images"].extend(images)
            continue

        if current and images:
            current["images"].extend(images)

        option_match = re.match(r"^([A-D])\s*[、.．]\s*(.*)$", text)
        if current and option_match:
            current["options"].append({"key": option_match.group(1), "text": option_match.group(2).strip()})
            continue

        # Some source paragraphs lost the leading "D、", for example question 15.
        if current and text and len(current["options"]) == 3:
            current["options"].append({"key": "D", "text": text.strip()})

    finish_current()

    answers = {}
    for line in answer_lines:
        for number, key in re.findall(r"(\d+)[、.]\s*([A-D])", line):
            answers[int(number)] = key

    for question in questions:
        key = answers.get(question["number"])
        if not key:
            raise RuntimeError(f"missing answer for question {question['number']}")
        question["answerKey"] = key

    return questions


def main():
    parsed = parse_docx(DOCX)
    if len(parsed) != 60:
        raise RuntimeError(f"expected 60 questions, got {len(parsed)}")

    bank = read_bank()
    labels = bank.setdefault("typeLabels", {})
    labels.setdefault("single", "单选")
    type_order = bank.setdefault("typeOrder", ["single", "multiple", "blank", "judge", "short", "comprehensive", "programming"])
    if "single" not in type_order:
        type_order.insert(0, "single")

    soft = next((subject for subject in bank["subjects"] if subject.get("name") == "软工" or "软件工程" in "".join(subject.get("sources", []))), None)
    if not soft:
        raise RuntimeError("soft subject not found")

    if "选择题.docx" not in soft.setdefault("sources", []):
        soft["sources"].append("选择题.docx")

    removed_choice_ids = {f"q-soft-choice-{number:03d}" for number in DUPLICATE_CHOICE_NUMBERS}
    soft["questions"] = [
        question
        for question in soft["questions"]
        if question.get("id") not in removed_choice_ids and question.get("id") not in LEGACY_DUPLICATE_IDS_TO_REMOVE
    ]

    existing_by_id = {q["id"]: q for q in soft["questions"]}
    for item in parsed:
        if item["number"] in DUPLICATE_CHOICE_NUMBERS:
            continue
        qid = f"q-soft-choice-{item['number']:03d}"
        question = existing_by_id.get(qid)
        if not question:
            question = {"id": qid}
            soft["questions"].append(question)
        question.update(
            {
                "subject": soft["name"],
                "source": "选择题.docx",
                "order": 50 + item["number"],
                "type": "single",
                "typeLabel": labels["single"],
                "mode": "choice",
                "originalNumber": item["number"],
                "prompt": item["prompt"],
                "options": item["options"],
                "answer": {"keys": [item["answerKey"]], "text": item["answerKey"]},
                "explanation": "",
            }
        )
        if item["images"]:
            question["images"] = [{"src": src, "alt": f"选择题第{item['number']}题图"} for src in item["images"]]
        else:
            question.pop("images", None)

    for subject in bank["subjects"]:
        counts = {t: 0 for t in bank["typeOrder"]}
        for question in subject["questions"]:
            counts[question["type"]] = counts.get(question["type"], 0) + 1
        subject["counts"] = counts
        subject["total"] = len(subject["questions"])
        subject["questions"].sort(
            key=lambda q: (
                bank["typeOrder"].index(q["type"]) if q["type"] in bank["typeOrder"] else 999,
                float(q["order"]),
            )
        )

    write_bank(bank)
    imported_count = len([item for item in parsed if item["number"] not in DUPLICATE_CHOICE_NUMBERS])
    print(f"Processed {len(parsed)} questions, imported {imported_count} non-duplicates into {soft['name']}. Total now: {soft['total']}")


if __name__ == "__main__":
    main()
