from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Any

try:
    from docx import Document
except Exception:  # pragma: no cover - dependency check is surfaced at runtime
    Document = None

try:
    from pypdf import PdfReader
except Exception:  # pragma: no cover
    PdfReader = None


ROOT = Path(__file__).resolve().parents[1]
SUBJECT_ROOT = ROOT / "Timu" / "subject"
OUTPUT = ROOT / "data" / "questions.js"

TYPE_LABELS = {
    "single": "单选",
    "multiple": "多选",
    "blank": "填空题",
    "judge": "判断题",
    "short": "简答题",
}

TYPE_ORDER = ["single", "multiple", "blank", "judge", "short"]
NOISE_LINES = {
    "知识点：",
    "知识点:",
    "AI讲解",
    "段落格式",
    "字体",
    "字号",
    "答案：",
    "答案:",
}


def read_source(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix == ".txt":
        return path.read_text(encoding="utf-8-sig")
    if suffix == ".docx":
        if Document is None:
            raise RuntimeError("python-docx is required to read docx files")
        doc = Document(path)
        lines: list[str] = []
        for paragraph in doc.paragraphs:
            text = paragraph.text.strip()
            if text:
                lines.append(text)
        return "\n".join(lines)
    if suffix == ".pdf":
        if PdfReader is None:
            raise RuntimeError("pypdf is required to read pdf files")
        reader = PdfReader(str(path))
        pages = [(page.extract_text() or "") for page in reader.pages]
        return "\n\n".join(pages)
    raise ValueError(f"Unsupported source: {path}")


def normalize_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.replace("\u3000", " ")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def source_id(subject: str, path: Path, index: int) -> str:
    digest = hashlib.md5(f"{subject}:{path.name}:{index}".encode("utf-8")).hexdigest()[:10]
    return f"q-{digest}"


def clean_line(line: str) -> str:
    return re.sub(r"\s+", " ", line.strip())


def type_from_heading(heading: str) -> tuple[str | None, str]:
    h = heading.strip()
    if "DEFAULT_HEADER" in h:
        return "single", "single"
    if "判断" in h:
        return "judge", "judge"
    if "填空" in h:
        return "blank", "blank"
    if any(word in h for word in ["简答", "综合", "编程", "论述"]):
        return "short", "short"
    if any(word in h for word in ["单项", "单选"]):
        return "single", "single"
    if any(word in h for word in ["多项", "多选"]):
        return "multiple", "multiple"
    if "选择" in h:
        return "single", "single"
    return None, "unknown"


def is_section_heading(line: str) -> bool:
    stripped = line.strip()
    if not stripped or "参考答案" in stripped:
        return False
    if re.match(r"^[一二三四五六七八九十]+[、.．]\s*.*(选择题|单项选择题|多项选择题|单选题|多选题|判断题|填空题|简答题|综合题|编程题|论述题)", stripped):
        return True
    if re.match(r"^(判断题|填空题|选择题|单选题|多选题|简答题|综合题|编程题|论述题)\s*[:：]$", stripped):
        return True
    if re.match(r"^(单选题|单项选择题|多选题|多项选择题|填空题|判断题|简答题|综合题|编程题|选择题|论述题)\s*(（[^）]+）|\([^)]+\))?$", stripped):
        return True
    return False


def split_sections(text: str) -> list[tuple[str, str]]:
    sections: list[tuple[str, list[str]]] = []
    current_heading = ""
    current_lines: list[str] = []

    for line in text.splitlines():
        if is_section_heading(line):
            if current_lines:
                heading = current_heading or "DEFAULT_HEADER_选择题"
                sections.append((heading, current_lines))
            current_heading = line.strip()
            current_lines = []
        else:
            current_lines.append(line)

    if current_lines:
        heading = current_heading or "DEFAULT_HEADER_选择题"
        sections.append((heading, current_lines))

    return [(heading, "\n".join(lines).strip()) for heading, lines in sections if "\n".join(lines).strip()]


def split_reference(content: str) -> tuple[str, str]:
    match = re.search(r"(?m)^\s*参考答案\s*[:：]\s*$", content)
    if not match:
        return content.strip(), ""
    return content[: match.start()].strip(), content[match.end() :].strip()


def parse_keyed_answers(answer_text: str) -> dict[int, str]:
    fixed = re.sub(r"(?<=[A-H√×对错])(?=\d+[.．])", " ", answer_text)
    fixed = re.sub(r"(?<=[A-H])(?=\d+[.．])", " ", fixed)
    answers: dict[int, str] = {}
    for number, answer in re.findall(r"(\d+)\s*[.．]\s*([A-H]+|[√×对错])", fixed):
        answers[int(number)] = answer.strip()
    return answers


def parse_ordered_bracket_answers(answer_text: str) -> dict[int, str]:
    answers = [clean_line(item) for item in re.findall(r"【([^】]+)】", answer_text)]
    return {idx + 1: answer for idx, answer in enumerate(answers)}


def extract_reference_maps(text: str) -> dict[str, dict[int, str]]:
    maps: dict[str, dict[int, str]] = defaultdict(dict)
    for heading, content in split_sections(text):
        q_part, answer_part = split_reference(content)
        if not answer_part:
            continue
        q_type, group = type_from_heading(heading)
        if not q_type:
            continue
        key = group if group in {"single", "multiple"} else q_type
        if q_type in {"single", "multiple", "judge"}:
            maps[key].update(parse_keyed_answers(answer_part))
        elif q_type == "blank":
            bracketed = parse_ordered_bracket_answers(answer_part)
            if bracketed:
                maps[key].update(bracketed)
            else:
                for number, answer in re.findall(r"(?m)^\s*(\d+)\s*[.．]\s*(.+?)\s*$", answer_part):
                    maps[key][int(number)] = clean_line(answer)
    return maps


def is_numbered_question_line(line: str) -> re.Match[str] | None:
    stripped = line.strip()
    return re.match(r"^(\d+)\s*[.．]\s*(.*)$", stripped)


def split_numbered_blocks(text: str) -> list[dict[str, Any]]:
    lines = [line.rstrip() for line in text.splitlines()]
    starts: list[tuple[int, int, str, str]] = []
    for idx, line in enumerate(lines):
        match = is_numbered_question_line(line)
        if not match:
            continue
        number = int(match.group(1))
        rest = match.group(2).strip()
        if re.match(r"^[A-H√×对错](\s|$)", rest):
            continue
        starts.append((idx, number, rest, line))

    blocks: list[dict[str, Any]] = []
    if starts and starts[0][0] > 0:
        prefix = "\n".join(lines[: starts[0][0]]).strip()
        if prefix:
            inferred_number = max(1, starts[0][1] - 1)
            blocks.append({"number": inferred_number, "header": "", "text": prefix})

    for pos, (line_index, number, rest, _raw) in enumerate(starts):
        end = starts[pos + 1][0] if pos + 1 < len(starts) else len(lines)
        body_lines = []
        header = rest
        body_lines.append(rest)
        body_lines.extend(lines[line_index + 1 : end])
        text = "\n".join(body_lines).strip()
        blocks.append({"number": number, "header": header, "text": text})
    return blocks


def strip_question_type_prefix(text: str) -> tuple[str, str | None]:
    subtype = None
    match = re.match(r"^\s*[（(]([^()（）]*题[^()（）]*)[）)]\s*", text)
    if match:
        subtype = match.group(1)
        text = text[match.end() :].lstrip()
    return text, subtype


def is_option_start(line: str) -> tuple[str, str] | None:
    stripped = line.strip()
    if not stripped:
        return None
    explicit = re.match(r"^([A-H])[\s]*[.．、]\s*(.*)$", stripped)
    if explicit:
        return explicit.group(1), explicit.group(2).strip()
    spaced = re.match(r"^([A-H])\s+(.+)$", stripped)
    if spaced:
        return spaced.group(1), spaced.group(2).strip()
    compact = re.match(r"^([A-H])(.+)$", stripped)
    if compact:
        rest = compact.group(2).strip()
        first = rest[:1]
        if first and not first.isascii():
            return compact.group(1), rest
        if first.isdigit():
            return compact.group(1), rest
    return None


def extract_after_label(text: str, label: str) -> str:
    pattern = rf"{label}\s*[:：]\s*"
    match = re.search(pattern, text)
    if not match:
        return ""
    tail = text[match.end() :]
    stop = re.search(r"(?m)^\s*(答案解析|知识点|AI讲解|我的答案|正确答案)\s*([:：]|\s*$)", tail)
    if stop:
        tail = tail[: stop.start()]
    tail = re.split(r"\n\s*(知识点：|知识点:|AI讲解)\s*", tail, maxsplit=1)[0]
    lines = [clean_line(re.sub(r"^\(?\d+\)?\s*", "", line)) for line in tail.splitlines()]
    lines = [line for line in lines if line and line not in NOISE_LINES]
    return "\n".join(lines).strip()


def extract_inline_answer(text: str, q_type: str) -> tuple[str, str]:
    explanation = extract_after_label(text, "答案解析")
    same_line = re.search(r"正确答案\s*[:：]\s*([A-H]+|[对错√×])", text)
    if same_line:
        return same_line.group(1).strip(), explanation
    multiline = extract_after_label(text, "正确答案")
    return multiline, explanation


def clean_body_lines(text: str) -> list[str]:
    lines: list[str] = []
    skip_until_next_question = False
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if re.match(r"^(我的答案|正确答案|答案解析|知识点)\s*[:：]", line):
            skip_until_next_question = line.startswith(("我的答案", "正确答案", "答案解析", "知识点"))
            continue
        if line.startswith("题型说明"):
            continue
        if line in NOISE_LINES or re.match(r"^第\d+空$", line):
            continue
        if skip_until_next_question:
            if line == "AI讲解":
                skip_until_next_question = False
            continue
        if line == "AI讲解":
            skip_until_next_question = False
            continue
        lines.append(line)
    return lines


def parse_options_and_prompt(text: str, q_type: str) -> tuple[str, list[dict[str, str]]]:
    lines = clean_body_lines(text)
    prompt_lines: list[str] = []
    options: list[dict[str, str]] = []
    current: dict[str, str] | None = None
    seen_options = False

    for line in lines:
        option = is_option_start(line) if q_type in {"single", "multiple", "judge"} else None
        if option:
            key, value = option
            current = {"key": key, "text": value}
            options.append(current)
            seen_options = True
            continue
        if seen_options and current is not None:
            current["text"] = clean_line((current["text"] + " " + line).strip())
        else:
            prompt_lines.append(line)

    prompt = "\n".join(prompt_lines).strip()
    if q_type == "judge" and not options:
        options = [{"key": "A", "text": "对"}, {"key": "B", "text": "错"}]
    return prompt, options


def normalize_answer_value(value: str) -> str:
    return clean_line(value).strip("。；;，,")


def build_answer(q_type: str, raw_answer: str, options: list[dict[str, str]]) -> dict[str, Any]:
    raw_answer = normalize_answer_value(raw_answer)
    if not raw_answer:
        if q_type == "short":
            return {"text": "待补充"}
        return {"missing": True, "text": "待补充"}
    if q_type in {"single", "multiple"}:
        letters = re.findall(r"[A-H]", raw_answer.upper())
        text = raw_answer
        if letters and options:
            option_map = {item["key"]: item["text"] for item in options}
            text = "；".join(f"{letter}. {option_map.get(letter, '')}".strip() for letter in letters)
        return {"keys": letters, "text": text or raw_answer}
    if q_type == "judge":
        judge = None
        if raw_answer in {"对", "正确", "√", "A"}:
            judge = True
        elif raw_answer in {"错", "错误", "×", "B"}:
            judge = False
        return {"judge": judge, "text": "对" if judge is True else "错" if judge is False else raw_answer}
    if q_type == "blank":
        blanks = [part.strip() for part in re.split(r"[;；\n]+", raw_answer) if part.strip()]
        return {"blanks": blanks or [raw_answer], "text": raw_answer}
    return {"text": raw_answer}


def question_from_block(
    *,
    subject: str,
    source: Path,
    index: int,
    block: dict[str, Any],
    q_type: str,
    group: str,
    answer_maps: dict[str, dict[int, str]],
) -> dict[str, Any] | None:
    block_text, subtype = strip_question_type_prefix(block["text"])
    block_type, block_group = type_from_heading(subtype or "")
    if block_type:
        q_type = block_type
        group = block_group

    inline_answer, explanation = extract_inline_answer(block_text, q_type)
    answer_key_name = group if group in {"single", "multiple"} else q_type
    mapped_answer = answer_maps.get(answer_key_name, {}).get(block["number"], "")
    raw_answer = inline_answer or mapped_answer

    prompt, options = parse_options_and_prompt(block_text, q_type)
    prompt, _ = strip_question_type_prefix(prompt)
    prompt = re.sub(r"\n?(我的答案|正确答案|答案解析|知识点|AI讲解).*$", "", prompt, flags=re.S).strip()
    prompt = "\n".join(line for line in prompt.splitlines() if line.strip() not in NOISE_LINES).strip()
    if not prompt or prompt.startswith("题型说明"):
        return None
    if not re.search(r"[\u4e00-\u9fa5a-zA-Z0-9]", prompt):
        return None

    if q_type == "single" and (group == "multiple" or (raw_answer and len(re.findall(r"[A-H]", raw_answer.upper())) > 1)):
        q_type = "multiple"
    mode = q_type

    if q_type in {"single", "multiple"} and not options:
        if "【" in prompt or "_" in prompt or "（" in prompt:
            q_type = "blank"
        else:
            q_type = "short"
        mode = q_type

    return {
        "id": source_id(subject, source, index),
        "subject": subject,
        "source": source.name,
        "order": index,
                "type": q_type,
                "typeLabel": TYPE_LABELS[q_type],
        "mode": mode,
        "originalNumber": block["number"],
        "prompt": prompt,
        "options": options,
        "answer": build_answer(q_type, raw_answer, options),
        "explanation": explanation,
    }


def parse_generic_source(subject: str, source: Path, text: str) -> list[dict[str, Any]]:
    answer_maps = extract_reference_maps(text)
    questions: list[dict[str, Any]] = []
    sequence = 1
    for heading, content in split_sections(text):
        q_type, group = type_from_heading(heading)
        if not q_type:
            continue
        question_part, _answer_part = split_reference(content)
        first_line = next((line.strip() for line in question_part.splitlines() if line.strip()), "")
        if first_line.startswith("参考答案"):
            continue

        blocks = split_numbered_blocks(question_part)
        if not blocks:
            if "DEFAULT_HEADER" in heading:
                continue
            raw_lines = [line.strip() for line in question_part.splitlines() if line.strip()]
            raw_lines = [line for line in raw_lines if not line.startswith("题型说明")]
            blocks = [{"number": idx + 1, "header": "", "text": line} for idx, line in enumerate(raw_lines)]

        for block in blocks:
            question = question_from_block(
                subject=subject,
                source=source,
                index=sequence,
                block=block,
                q_type=q_type,
                group=group,
                answer_maps=answer_maps,
            )
            sequence += 1
            if question:
                questions.append(question)
    return questions


def parse_reference_short_source(subject: str, source: Path, text: str) -> list[dict[str, Any]]:
    parts = re.split(r"(?m)^\s*参考答案\s*[:：]\s*$", text)
    if len(parts) < 2:
        return parse_generic_source(subject, source, text)
    questions: list[dict[str, Any]] = []
    current_question = parts[0].strip()
    for idx, part in enumerate(parts[1:], start=1):
        lines = [line.rstrip() for line in part.strip().splitlines() if line.strip()]
        if not lines or not current_question:
            continue
        if idx < len(parts) - 1:
            next_question = lines[-1]
            answer_lines = lines[:-1]
        else:
            next_question = ""
            answer_lines = lines
        questions.append(
            {
                "id": source_id(subject, source, idx),
                "subject": subject,
                "source": source.name,
                "order": idx,
                "type": "short",
                "typeLabel": TYPE_LABELS["short"],
                "mode": "short",
                "originalNumber": idx,
                "prompt": current_question.strip(),
                "options": [],
                "answer": {"text": "\n".join(answer_lines).strip()},
                "explanation": "",
            }
        )
        current_question = next_question.strip()
    return questions


def parse_answer_pair_source(subject: str, source: Path, text: str) -> list[dict[str, Any]]:
    parts = re.split(r"(?m)^\s*答案\s*[:：]\s*$", text)
    if len(parts) < 2:
        return parse_generic_source(subject, source, text)
    questions: list[dict[str, Any]] = []
    current_question = parts[0].strip()
    for idx, part in enumerate(parts[1:], start=1):
        lines = [line.rstrip() for line in part.strip().splitlines() if line.strip()]
        if not lines or not current_question:
            continue
        if idx < len(parts) - 1:
            next_question = lines[-1]
            answer_lines = lines[:-1]
        else:
            next_question = ""
            answer_lines = lines
        questions.append(
            {
                "id": source_id(subject, source, idx),
                "subject": subject,
                "source": source.name,
                "order": idx,
                "type": "short",
                "typeLabel": TYPE_LABELS["short"],
                "mode": "short",
                "originalNumber": idx,
                "prompt": current_question.strip(),
                "options": [],
                "answer": {"text": "\n".join(answer_lines).strip()},
                "explanation": "",
            }
        )
        current_question = next_question.strip()
    return questions


def parse_algorithm_source(subject: str, source: Path, text: str) -> list[dict[str, Any]]:
    question_part, answer_part = split_reference(text)
    answer_lines = [clean_line(line) for line in answer_part.splitlines() if re.match(r"^\d+\s*[.．]", line.strip())]
    answers: dict[int, str] = {}
    for line in answer_lines:
        match = re.match(r"^(\d+)\s*[.．]\s*(.+)$", line)
        if match:
            answers[int(match.group(1))] = match.group(2).strip()

    pieces = re.split(r"(?=^【算法补充题】)", question_part, flags=re.M)
    questions: list[dict[str, Any]] = []
    for idx, piece in enumerate([part.strip() for part in pieces if part.strip()], start=1):
        title_match = re.match(r"^【算法补充题】(.+)$", piece.splitlines()[0].strip())
        title = title_match.group(1).strip() if title_match else f"算法补充题 {idx}"
        prompt = piece.strip()
        questions.append(
            {
                "id": source_id(subject, source, idx),
                "subject": subject,
                "source": source.name,
                "order": idx,
                "type": "blank",
                "typeLabel": TYPE_LABELS["blank"],
                "mode": "blank",
                "originalNumber": idx,
                "prompt": prompt,
                "options": [],
                "answer": build_answer("blank", answers.get(idx, ""), []),
                "explanation": title,
            }
        )
    return questions


def parse_source(subject: str, source: Path) -> list[dict[str, Any]]:
    if source.suffix.lower() == ".json":
        with open(source, encoding="utf-8") as f:
            return json.load(f)
    text = normalize_text(read_source(source))
    if "【算法补充题】" in text:
        return parse_algorithm_source(subject, source, text)
    if source.name.endswith("复习题-2.docx"):
        return parse_reference_short_source(subject, source, text)
    if source.name.endswith("复习题-4.docx"):
        return parse_answer_pair_source(subject, source, text)
    return parse_generic_source(subject, source, text)


def count_by_type(questions: list[dict[str, Any]]) -> dict[str, int]:
    return {q_type: sum(1 for item in questions if item["type"] == q_type) for q_type in TYPE_ORDER}


def main() -> None:
    subjects = []
    for subject_dir in sorted(path for path in SUBJECT_ROOT.iterdir() if path.is_dir()):
        subject_name = subject_dir.name
        subject_questions: list[dict[str, Any]] = []
        sources: list[str] = []
        for source in sorted(subject_dir.iterdir()):
            if source.suffix.lower() not in {".txt", ".docx", ".pdf", ".json"}:
                continue
            if subject_name == "软工" and source.name == "选择题.docx":
                continue
            parsed = parse_source(subject_name, source)
            base_order = len(subject_questions)
            for offset, item in enumerate(parsed, start=1):
                item["order"] = base_order + offset
            subject_questions.extend(parsed)
            sources.append(source.name)
        subject_questions.sort(key=lambda item: (TYPE_ORDER.index(item["type"]), item["order"]))
        subject_hash = hashlib.md5(subject_name.encode("utf-8")).hexdigest()[:8]
        subjects.append(
            {
                "id": f"subject-{subject_hash}",
                "name": subject_name,
                "sources": sources,
                "counts": count_by_type(subject_questions),
                "total": len(subject_questions),
                "questions": subject_questions,
            }
        )

    bank = {
        "generatedAt": datetime.now().isoformat(timespec="seconds"),
        "typeLabels": TYPE_LABELS,
        "typeOrder": TYPE_ORDER,
        "subjects": subjects,
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(bank, ensure_ascii=False, indent=2)
    OUTPUT.write_text(f"window.QUESTION_BANK = {payload};\n", encoding="utf-8")

    print(f"generated {OUTPUT}")
    for subject in subjects:
        counts = ", ".join(f"{TYPE_LABELS[key]} {subject['counts'][key]}" for key in TYPE_ORDER)
        print(f"{subject['name']}: {subject['total']} ({counts})")


if __name__ == "__main__":
    main()
