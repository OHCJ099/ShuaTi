const BANK = window.QUESTION_BANK;
const TYPE_ORDER = BANK.typeOrder || ["single", "multiple", "blank", "judge", "short", "comprehensive", "programming"];
const TYPE_LABELS = BANK.typeLabels || {
  single: "单选",
  multiple: "多选",
  blank: "填空题",
  judge: "判断题",
  short: "简答题",
  comprehensive: "综合题",
  programming: "编程题",
};
const STORAGE_KEY = "shuati:progress:v3";
const CUSTOM_QUESTIONS_KEY = "shuati:customQuestions:v1";
const WRONG_BOOK_KEY = "shuati:wrongbook:v1";
const OPEN_TYPES = ["short", "comprehensive", "programming"];
const OPTION_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const state = {
  view: "home",
  subjectId: "",
  selectedTypes: new Set(),
  shuffleQuestions: true,
  shuffleTypes: false,
  questionLimit: 0,
  session: [],
  currentIndex: 0,
  drafts: {},
  responses: {},
  indexOpen: false,
  wrongBookMode: false,
};

const app = document.getElementById("app");
const bankMeta = document.getElementById("bankMeta");
const navigation = {
  initialized: false,
  restoring: false,
  currentKey: "",
};

function setView(view) {
  state.view = view;
  document.body.dataset.view = view;
}

function routeKey(view) {
  return `${view}:${state.subjectId || ""}`;
}

function syncRoute(view, action = "replace") {
  if (navigation.restoring || action === "none" || !window.history?.replaceState) return;
  const payload = { view, subjectId: state.subjectId || "" };
  const key = routeKey(view);
  if (!navigation.initialized) {
    window.history.replaceState(payload, "");
    navigation.initialized = true;
    navigation.currentKey = key;
    return;
  }
  if (action === "push" && key !== navigation.currentKey) {
    window.history.pushState(payload, "");
  } else if (action === "replace") {
    window.history.replaceState(payload, "");
  }
  navigation.currentKey = key;
}

function restoreRoute(route) {
  if (!route || !route.view) return;
  navigation.restoring = true;
  if (route.subjectId) state.subjectId = route.subjectId;
  if (route.view === "home") {
    renderHome("none");
  } else if (route.view === "add") {
    renderAddQuestion("none");
  } else if (route.view === "setup") {
    if (!state.subjectId) state.subjectId = BANK.subjects[0].id;
    if (!state.selectedTypes.size) setDefaultTypes(getSubject());
    renderSetup("none");
  } else if (route.view === "practice" && state.session.length) {
    renderPractice("none");
  } else if (route.view === "summary" && state.session.length) {
    renderSummary("none");
  } else if (route.view === "wrongbook") {
    renderWrongBook("none");
  } else {
    renderHome("none");
  }
  navigation.currentKey = routeKey(state.view);
  navigation.restoring = false;
}

function handleAppBack() {
  if (state.view === "practice" && isJumpPanelOpen()) {
    closeJumpPanel();
    return true;
  }
  if (state.view === "practice" || state.view === "summary") {
    persistCurrentProgress();
    renderSetup("replace");
    return true;
  }
  if (state.view === "setup") {
    renderHome("replace");
    return true;
  }
  if (state.view === "add") {
    renderHome("replace");
    return true;
  }
  if (state.view === "wrongbook") {
    renderHome("replace");
    return true;
  }
  return false;
}

window.handleNativeBack = handleAppBack;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLines(value) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function triggerPageEnter() {
  app.classList.remove("page-enter");
  void app.offsetWidth;
  app.classList.add("page-enter");
}

function getSubject() {
  return BANK.subjects.find((subject) => subject.id === state.subjectId) || BANK.subjects[0];
}

function getQuestionById(subject, id) {
  return subject.questions.find((question) => question.id === id);
}

function storageRead() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function storageWrite(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage can be unavailable in unusual WebView modes; the app still works without persistence.
  }
}

function customStorageRead() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : Array.isArray(parsed?.questions) ? parsed.questions : [];
  } catch {
    return [];
  }
}

function customStorageWrite(items) {
  try {
    localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(items));
  } catch {
    alert("保存失败：当前设备存储不可用。");
  }
}

function wrongBookRead() {
  try {
    const parsed = JSON.parse(localStorage.getItem(WRONG_BOOK_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function wrongBookWrite(data) {
  try {
    localStorage.setItem(WRONG_BOOK_KEY, JSON.stringify(data));
  } catch {}
}

function addToWrongBook(question) {
  const data = wrongBookRead();
  const existing = data[question.id] || {};
  data[question.id] = {
    subjectId: state.subjectId,
    wrongCount: (existing.wrongCount || 0) + 1,
    lastWrongAt: new Date().toISOString(),
  };
  wrongBookWrite(data);
}

function removeFromWrongBook(questionId) {
  const data = wrongBookRead();
  delete data[questionId];
  wrongBookWrite(data);
}

function clearWrongBook() {
  wrongBookWrite({});
}

function getWrongBookCount() {
  return Object.keys(wrongBookRead()).length;
}

function modeFromType(type) {
  if (["single", "multiple"].includes(type)) return "choice";
  if (type === "judge") return "judge";
  if (type === "blank") return "blank";
  return type;
}

function makeCustomQuestionId() {
  return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function recomputeBankStats() {
  for (const subject of BANK.subjects) {
    const counts = {};
    TYPE_ORDER.forEach((type) => {
      counts[type] = 0;
    });
    for (const question of subject.questions) {
      counts[question.type] = (counts[question.type] || 0) + 1;
    }
    subject.counts = counts;
    subject.total = subject.questions.length;
  }
}

function customToQuestion(item, subject, index) {
  return {
    id: item.id,
    subject: subject.name,
    source: "快速加题",
    order: 100000 + index,
    type: item.type,
    typeLabel: TYPE_LABELS[item.type] || item.type,
    mode: modeFromType(item.type),
    originalNumber: `自定义${index + 1}`,
    prompt: item.prompt,
    options: item.options || [],
    answer: item.answer || { text: "" },
    explanation: item.explanation || "",
    custom: true,
    createdAt: item.createdAt,
  };
}

function applyCustomQuestions() {
  for (const subject of BANK.subjects) {
    subject.questions = subject.questions.filter((question) => !question.custom);
  }
  const items = customStorageRead();
  items.forEach((item, index) => {
    const subject = BANK.subjects.find((candidate) => candidate.id === item.subjectId);
    if (!subject || !item.prompt || !item.type) return;
    if (!subject.sources.includes("快速加题")) subject.sources.push("快速加题");
    subject.questions.push(customToQuestion(item, subject, index));
  });
  recomputeBankStats();
}

function updateBankMeta() {
  const total = BANK.subjects.reduce((sum, subject) => sum + subject.total, 0);
  bankMeta.textContent = `${BANK.subjects.length} 个科目 · ${total} 道题 · ${formatGeneratedAt(BANK.generatedAt)}`;
}

function getSubjectProgress(subjectId) {
  const data = storageRead();
  return data.subjects?.[subjectId] || null;
}

function getAllProgress() {
  return storageRead().subjects || {};
}

function hasSavedSession(progress) {
  return Array.isArray(progress?.sessionIds) && progress.sessionIds.length > 0;
}

function progressStats(progress) {
  const responses = Object.values(progress?.responses || {});
  return {
    done: responses.length,
    correct: responses.filter((response) => response.isCorrect === true).length,
    wrong: responses.filter((response) => response.isCorrect === false).length,
    total: progress?.sessionIds?.length || 0,
    currentIndex: progress?.currentIndex || 0,
  };
}

function persistCurrentProgress() {
  if (!state.subjectId) return;
  if (state.wrongBookMode) return; // 错题练习不写入正常科目存档，避免覆盖原有进度
  const data = storageRead();
  const subjects = data.subjects || {};
  subjects[state.subjectId] = {
    savedAt: new Date().toISOString(),
    view: state.view,
    selectedTypes: [...state.selectedTypes],
    shuffleQuestions: state.shuffleQuestions,
    shuffleTypes: state.shuffleTypes,
    questionLimit: state.questionLimit,
    sessionIds: state.session.map((question) => question.id),
    currentIndex: state.currentIndex,
    drafts: state.drafts,
    responses: state.responses,
    completed: state.view === "summary",
  };
  storageWrite({
    version: 3,
    lastSubjectId: state.subjectId,
    subjects,
  });
}

function clearSubjectProgress(subjectId) {
  const data = storageRead();
  const subjects = data.subjects || {};
  delete subjects[subjectId];
  storageWrite({
    version: 3,
    lastSubjectId: data.lastSubjectId === subjectId ? "" : data.lastSubjectId,
    subjects,
  });
}

function applySubjectProgress(subjectId) {
  const subject = BANK.subjects.find((item) => item.id === subjectId);
  const progress = subject ? getSubjectProgress(subjectId) : null;
  if (!subject || !hasSavedSession(progress)) return false;
  const session = progress.sessionIds.map((id) => getQuestionById(subject, id)).filter(Boolean);
  if (!session.length) return false;
  state.subjectId = subjectId;
  state.selectedTypes = new Set(progress.selectedTypes?.length ? progress.selectedTypes : subjectAvailableTypes(subject));
  state.shuffleQuestions = progress.shuffleQuestions !== false;
  state.shuffleTypes = Boolean(progress.shuffleTypes);
  state.questionLimit = clamp(Number.parseInt(progress.questionLimit, 10) || session.length, 1, subject.questions.length);
  state.session = session;
  state.currentIndex = clamp(Number.parseInt(progress.currentIndex, 10) || 0, 0, session.length - 1);
  state.drafts = progress.drafts || {};
  state.responses = progress.responses || {};
  state.indexOpen = false;
  return true;
}

function restoreLastProgress() {
  const data = storageRead();
  const subjects = data.subjects || {};
  const candidates = Object.entries(subjects)
    .filter(([, progress]) => hasSavedSession(progress) && !progress.completed)
    .sort(([, a], [, b]) => String(b.savedAt || "").localeCompare(String(a.savedAt || "")));
  const preferred = data.lastSubjectId && hasSavedSession(subjects[data.lastSubjectId]) && !subjects[data.lastSubjectId].completed ? data.lastSubjectId : candidates[0]?.[0];
  if (!preferred) return false;
  return applySubjectProgress(preferred);
}

function subjectAvailableTypes(subject) {
  return TYPE_ORDER.filter((type) => (subject.counts[type] || 0) > 0);
}

function countSelectedQuestions(subject) {
  return subject.questions.filter((question) => state.selectedTypes.has(question.type)).length;
}

function setDefaultTypes(subject) {
  state.selectedTypes = new Set(subjectAvailableTypes(subject));
  state.questionLimit = countSelectedQuestions(subject);
}

function formatGeneratedAt(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function init() {
  applyCustomQuestions();
  updateBankMeta();
  window.addEventListener("popstate", (event) => {
    restoreRoute(event.state || { view: "home" });
  });
  if (restoreLastProgress()) {
    renderPractice("replace");
  } else {
    renderHome("replace");
  }
  document.addEventListener("keydown", handleKeyboard);
}

function renderHome(historyAction = "replace") {
  setView("home");
  syncRoute("home", historyAction);
  const saved = getAllProgress();
  const wrongTotal = getWrongBookCount();
  app.innerHTML = `
    <section class="panel home-panel">
      <div class="section-head">
        <div>
          <h2>选择科目</h2>
        </div>
        <div class="home-actions">
          <button class="btn ghost compact-btn${wrongTotal ? ' wrongbook-has-items' : ''}" type="button" id="wrongBookEntry">📕 错题${wrongTotal ? ` · ${wrongTotal}` : ''}</button>
          <button class="btn primary compact-btn" type="button" id="addQuestionEntry">快速加题</button>
        </div>
      </div>
      <div class="subject-grid">
        ${BANK.subjects
          .map((subject) => {
            const savedStats = progressStats(saved[subject.id]);
            const savedBadge = savedStats.total
              ? `<span class="resume-chip">已练 ${savedStats.done}/${savedStats.total}</span>`
              : "";
            return `
              <button class="subject-card" type="button" data-subject="${escapeHtml(subject.id)}">
                <span class="subject-info">
                  <span class="subject-line">
                    <span class="subject-name">${escapeHtml(subject.name)}</span>
                    ${savedBadge}
                  </span>
                  <span class="type-pills">
                    ${TYPE_ORDER.map((type) => `<span class="pill">${escapeHtml(TYPE_LABELS[type])} ${subject.counts[type] || 0}</span>`).join("")}
                  </span>
                </span>
                <span class="subject-count">
                  <span class="subject-total">${subject.total}</span>
                  <span class="subject-arrow">›</span>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
  triggerPageEnter();

  document.getElementById("wrongBookEntry").addEventListener("click", () => renderWrongBook("push"));
  document.getElementById("addQuestionEntry").addEventListener("click", () => renderAddQuestion("push"));

  app.querySelectorAll("[data-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      const subject = BANK.subjects.find((item) => item.id === button.dataset.subject);
      state.subjectId = subject.id;
      const progress = getSubjectProgress(subject.id);
      if (progress?.selectedTypes?.length) {
        state.selectedTypes = new Set(progress.selectedTypes);
        state.shuffleQuestions = progress.shuffleQuestions !== false;
        state.shuffleTypes = Boolean(progress.shuffleTypes);
        state.questionLimit = progress.questionLimit || countSelectedQuestions(subject);
      } else {
        setDefaultTypes(subject);
      }
      renderSetup("push");
    });
  });
}

function renderAddQuestion(historyAction = "replace") {
  setView("add");
  syncRoute("add", historyAction);
  const customItems = customStorageRead();
  const defaultSubjectId = state.subjectId || BANK.subjects[0].id;
  app.innerHTML = `
    <section class="panel setup-panel add-panel">
      <div class="section-head">
        <div>
          <h2>快速加题</h2>
          <p class="muted">保存到当前设备，立即参与抽题；导出 JSON 后可备份或发给我集成进内置题库。</p>
        </div>
        <button class="btn ghost" type="button" id="backHome">返回</button>
      </div>
      <div class="add-grid">
        <div class="control-band">
          <div class="control-title">题目信息</div>
          <label class="form-field">
            <span>科目</span>
            <select class="select-input" id="addSubject">
              ${BANK.subjects.map((subject) => `<option value="${escapeHtml(subject.id)}" ${subject.id === defaultSubjectId ? "selected" : ""}>${escapeHtml(subject.name)}</option>`).join("")}
            </select>
          </label>
          <label class="form-field">
            <span>题型</span>
            <select class="select-input" id="addType">
              ${TYPE_ORDER.map((type) => `<option value="${type}">${escapeHtml(TYPE_LABELS[type])}</option>`).join("")}
            </select>
          </label>
          <label class="form-field">
            <span>题干</span>
            <textarea class="answer-input add-textarea" id="addPrompt" placeholder="把题目粘贴到这里"></textarea>
          </label>
          <div class="add-choice-block">
            <label class="form-field">
              <span>选项（一行一个，可写 A. 内容，也可只写内容）</span>
              <textarea class="answer-input add-textarea small" id="addOptions">A. 
B. 
C. 
D. </textarea>
            </label>
            <label class="form-field">
              <span>正确选项</span>
              <input class="text-input" id="addChoiceAnswer" placeholder="单选填 A，多选填 A,B" />
            </label>
          </div>
          <div class="add-judge-block">
            <label class="form-field">
              <span>正确答案</span>
              <select class="select-input" id="addJudgeAnswer">
                <option value="true">对</option>
                <option value="false">错</option>
              </select>
            </label>
          </div>
          <div class="add-written-block">
            <label class="form-field">
              <span>参考答案</span>
              <textarea class="answer-input add-textarea" id="addWrittenAnswer" placeholder="填空题每个空一行；简答/综合/编程可填写参考答案，也可以留空"></textarea>
            </label>
          </div>
          <label class="form-field">
            <span>解析/备注（可选）</span>
            <textarea class="answer-input add-textarea small" id="addExplanation"></textarea>
          </label>
          <div class="button-row start-row">
            <button class="btn primary" type="button" id="saveCustomQuestion">保存题目</button>
          </div>
        </div>
        <aside class="control-band">
          <div class="control-title">自定义题库</div>
          <p class="muted">当前设备已保存 ${customItems.length} 道自定义题。</p>
          <div class="button-row add-tools">
            <button class="btn ghost" type="button" id="exportCustomQuestions" ${customItems.length ? "" : "disabled"}>导出</button>
            <label class="btn ghost import-btn">
              导入
              <input id="importCustomQuestions" type="file" accept="application/json,.json" hidden />
            </label>
            <button class="btn coral" type="button" id="clearCustomQuestions" ${customItems.length ? "" : "disabled"}>清空</button>
          </div>
          <div class="custom-list">
            ${
              customItems.length
                ? customItems
                    .slice()
                    .reverse()
                    .map((item) => {
                      const subject = BANK.subjects.find((candidate) => candidate.id === item.subjectId);
                      return `
                        <div class="custom-item">
                          <div>
                            <strong>${escapeHtml(item.prompt || "未命名题目")}</strong>
                            <span class="muted">${escapeHtml(subject?.name || "未知科目")} · ${escapeHtml(TYPE_LABELS[item.type] || item.type)}</span>
                          </div>
                          <button class="btn ghost mini-btn" type="button" data-delete-custom="${escapeHtml(item.id)}">删除</button>
                        </div>
                      `;
                    })
                    .join("")
                : `<p class="muted empty-note">还没有自定义题。</p>`
            }
          </div>
        </aside>
      </div>
    </section>
  `;
  triggerPageEnter();
  wireAddQuestionEvents();
}

function parseOptionLines(value) {
  return value
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const matched = line.match(/^([A-Z])\s*[、.．]\s*(.*)$/i);
      if (matched) return { key: matched[1].toUpperCase(), text: matched[2].trim() };
      return { key: OPTION_KEYS[index] || String(index + 1), text: line };
    })
    .filter((option) => option.text);
}

function parseAnswerKeys(value) {
  return value
    .toUpperCase()
    .split(/[\s,，、]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildCustomQuestionFromForm() {
  const subjectId = document.getElementById("addSubject").value;
  const type = document.getElementById("addType").value;
  const prompt = document.getElementById("addPrompt").value.trim();
  const explanation = document.getElementById("addExplanation").value.trim();
  if (!prompt) throw new Error("请先填写题干。");

  const item = {
    id: makeCustomQuestionId(),
    subjectId,
    type,
    prompt,
    explanation,
    createdAt: new Date().toISOString(),
  };

  if (["single", "multiple"].includes(type)) {
    const options = parseOptionLines(document.getElementById("addOptions").value);
    const keys = parseAnswerKeys(document.getElementById("addChoiceAnswer").value);
    if (options.length < 2) throw new Error("选择题至少需要 2 个选项。");
    if (!keys.length) throw new Error("请填写正确选项。");
    const optionKeys = new Set(options.map((option) => option.key));
    if (keys.some((key) => !optionKeys.has(key))) throw new Error("正确选项必须存在于选项列表中。");
    if (type === "single" && keys.length !== 1) throw new Error("单选题只能填写 1 个正确选项。");
    item.options = options;
    item.answer = { keys, text: keys.join("、") };
    return item;
  }

  if (type === "judge") {
    const judge = document.getElementById("addJudgeAnswer").value === "true";
    item.options = [
      { key: "A", text: "对" },
      { key: "B", text: "错" },
    ];
    item.answer = { judge, text: judge ? "对" : "错" };
    return item;
  }

  const writtenAnswer = document.getElementById("addWrittenAnswer").value.trim();
  item.options = [];
  if (type === "blank") {
    const blanks = writtenAnswer.split(/\n+/).map((line) => line.trim()).filter(Boolean);
    if (!blanks.length) throw new Error("填空题请至少填写一个正确答案，每个空一行。");
    item.answer = { blanks, text: blanks.join("；") };
  } else {
    item.answer = { text: writtenAnswer };
  }
  return item;
}

function updateAddFormVisibility() {
  const type = document.getElementById("addType").value;
  const choiceBlock = app.querySelector(".add-choice-block");
  const judgeBlock = app.querySelector(".add-judge-block");
  const writtenBlock = app.querySelector(".add-written-block");
  choiceBlock.hidden = !["single", "multiple"].includes(type);
  judgeBlock.hidden = type !== "judge";
  writtenBlock.hidden = ["single", "multiple", "judge"].includes(type);
}

function exportCustomQuestions() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    questions: customStorageRead(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `shuati-custom-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importCustomQuestions(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      const incoming = Array.isArray(parsed) ? parsed : parsed.questions;
      if (!Array.isArray(incoming)) throw new Error("JSON 格式不正确。");
      const current = customStorageRead();
      const merged = new Map(current.map((item) => [item.id, item]));
      incoming.forEach((item) => {
        if (item && item.id && item.subjectId && item.type && item.prompt) merged.set(item.id, item);
      });
      customStorageWrite([...merged.values()]);
      applyCustomQuestions();
      updateBankMeta();
      renderAddQuestion("replace");
    } catch (error) {
      alert(error.message || "导入失败。");
    }
  };
  reader.readAsText(file);
}

function wireAddQuestionEvents() {
  document.getElementById("backHome").addEventListener("click", () => renderHome("replace"));
  document.getElementById("addType").addEventListener("change", updateAddFormVisibility);
  updateAddFormVisibility();

  document.getElementById("saveCustomQuestion").addEventListener("click", () => {
    try {
      const item = buildCustomQuestionFromForm();
      customStorageWrite([...customStorageRead(), item]);
      state.subjectId = item.subjectId;
      applyCustomQuestions();
      updateBankMeta();
      renderAddQuestion("replace");
    } catch (error) {
      alert(error.message || "保存失败。");
    }
  });

  document.getElementById("exportCustomQuestions").addEventListener("click", exportCustomQuestions);
  document.getElementById("importCustomQuestions").addEventListener("change", (event) => importCustomQuestions(event.target.files?.[0]));
  document.getElementById("clearCustomQuestions").addEventListener("click", () => {
    if (!confirm("确认清空当前设备上的所有自定义题吗？")) return;
    customStorageWrite([]);
    applyCustomQuestions();
    updateBankMeta();
    renderAddQuestion("replace");
  });
  app.querySelectorAll("[data-delete-custom]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.deleteCustom;
      customStorageWrite(customStorageRead().filter((item) => item.id !== id));
      applyCustomQuestions();
      updateBankMeta();
      renderAddQuestion("replace");
    });
  });
}

function renderSetup(historyAction = "replace") {
  setView("setup");
  syncRoute("setup", historyAction);
  const subject = getSubject();
  const savedProgress = getSubjectProgress(subject.id);
  const savedStats = progressStats(savedProgress);
  const selectedTotal = countSelectedQuestions(subject);
  if (!state.questionLimit || state.questionLimit > selectedTotal) {
    state.questionLimit = selectedTotal;
  }
  const canStart = selectedTotal > 0 && state.selectedTypes.size > 0;

  app.innerHTML = `
    <section class="panel setup-panel">
      <div class="section-head">
        <div>
          <h2>${escapeHtml(subject.name)}</h2>
          <p class="muted">${subject.sources.map(escapeHtml).join("、")}</p>
        </div>
        <button class="btn ghost" type="button" id="backHome">返回科目</button>
      </div>
      ${
        hasSavedSession(savedProgress)
          ? `<div class="resume-panel">
              <div>
                <strong>上次练到第 ${Math.min(savedStats.currentIndex + 1, savedStats.total)} / ${savedStats.total} 题</strong>
                <span class="muted">已作答 ${savedStats.done}，正确 ${savedStats.correct}，需复习 ${savedStats.wrong}</span>
              </div>
              <div class="resume-actions">
                <button class="btn primary" type="button" id="continuePractice">继续练习</button>
                <button class="btn ghost" type="button" id="clearProgress">清除进度</button>
              </div>
            </div>`
          : ""
      }
      <div class="setup-grid">
        <div>
          <div class="control-band">
            <div class="control-title">题型</div>
            <div class="type-grid">
              ${TYPE_ORDER.map((type) => {
                const count = subject.counts[type] || 0;
                const active = state.selectedTypes.has(type);
                return `
                  <label class="type-tile ${active ? "is-active" : ""} ${count ? "" : "is-disabled"}">
                    <input type="checkbox" data-type="${type}" ${active ? "checked" : ""} ${count ? "" : "disabled"} />
                    <span>
                      <span class="type-label">${escapeHtml(TYPE_LABELS[type])}</span>
                      <span class="type-count">${count} 道</span>
                    </span>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
          <div class="control-band">
            <div class="control-title">乱序</div>
            <label class="switch-row">
              <span>
                <strong>题目乱序</strong>
                <span class="muted"> 所选题型内部</span>
              </span>
              <span class="switch">
                <input id="shuffleQuestions" type="checkbox" ${state.shuffleQuestions ? "checked" : ""} />
                <span class="slider"></span>
              </span>
            </label>
            <label class="switch-row">
              <span>
                <strong>题型乱序</strong>
                <span class="muted"> 不同题型混合</span>
              </span>
              <span class="switch">
                <input id="shuffleTypes" type="checkbox" ${state.shuffleTypes ? "checked" : ""} />
                <span class="slider"></span>
              </span>
            </label>
          </div>
        </div>
        <aside>
          <div class="control-band">
            <div class="control-title">本轮</div>
            <label class="field-row">
              <span>
                <strong>抽题数量</strong>
                <span class="muted"> / ${selectedTotal}</span>
              </span>
              <input class="number-input" id="questionLimit" type="number" min="1" max="${selectedTotal || 1}" value="${state.questionLimit || selectedTotal || 1}" />
            </label>
            <div class="button-row start-row">
              <button class="btn primary" type="button" id="startPractice" ${canStart ? "" : "disabled"}>${hasSavedSession(savedProgress) ? '重新开始' : '开始练习'}</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `;
  triggerPageEnter();

  document.getElementById("backHome").addEventListener("click", () => renderHome("replace"));
  const continuePractice = document.getElementById("continuePractice");
  if (continuePractice) {
    continuePractice.addEventListener("click", () => {
      if (applySubjectProgress(subject.id)) {
        renderPractice("push");
      }
    });
  }
  const clearProgress = document.getElementById("clearProgress");
  if (clearProgress) {
    clearProgress.addEventListener("click", () => {
      clearSubjectProgress(subject.id);
      state.session = [];
      state.currentIndex = 0;
      state.drafts = {};
      state.responses = {};
      renderSetup("replace");
    });
  }
  app.querySelectorAll("[data-type]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const type = checkbox.dataset.type;
      if (checkbox.checked) {
        state.selectedTypes.add(type);
      } else {
        state.selectedTypes.delete(type);
      }
      state.questionLimit = 0;
      renderSetup();
    });
  });
  document.getElementById("shuffleQuestions").addEventListener("change", (event) => {
    state.shuffleQuestions = event.target.checked;
  });
  document.getElementById("shuffleTypes").addEventListener("change", (event) => {
    state.shuffleTypes = event.target.checked;
  });
  document.getElementById("questionLimit").addEventListener("input", (event) => {
    const value = Number.parseInt(event.target.value, 10);
    state.questionLimit = Number.isFinite(value) ? value : selectedTotal;
  });
  document.getElementById("startPractice").addEventListener("click", () => {
    if (hasSavedSession(savedProgress) && savedStats.done > 0) {
      const pos = Math.min(savedStats.currentIndex + 1, savedStats.total);
      if (!confirm(`将清空第 ${pos} / ${savedStats.total} 题的练习进度并重新开始，确定吗？`)) return;
    }
    startPractice();
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function prepareSession() {
  const subject = getSubject();
  let pool = subject.questions.filter((question) => state.selectedTypes.has(question.type));
  const limit = clamp(Number.parseInt(state.questionLimit, 10) || pool.length, 1, pool.length);

  if (limit < pool.length) {
    const sampledIds = new Set(shuffle(pool).slice(0, limit).map((question) => question.id));
    pool = pool.filter((question) => sampledIds.has(question.id));
  }

  const buckets = {};
  TYPE_ORDER.forEach((type) => {
    const items = pool.filter((question) => question.type === type).sort((a, b) => a.order - b.order);
    buckets[type] = state.shuffleQuestions ? shuffle(items) : items;
  });

  if (!state.shuffleTypes) {
    return TYPE_ORDER.flatMap((type) => buckets[type]);
  }

  const mixed = [];
  while (TYPE_ORDER.some((type) => buckets[type].length > 0)) {
    const availableTypes = TYPE_ORDER.filter((type) => buckets[type].length > 0);
    const pickedType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
    mixed.push(buckets[pickedType].shift());
  }
  return mixed;
}

function startPractice() {
  state.session = prepareSession();
  state.currentIndex = 0;
  state.drafts = {};
  state.responses = {};
  state.indexOpen = false;
  state.wrongBookMode = false;
  setView("practice");
  persistCurrentProgress();
  renderPractice("push");
}

function getCurrentQuestion() {
  return state.session[state.currentIndex];
}

function getDraft(question) {
  if (!question) return "";
  if (state.drafts[question.id] !== undefined) return state.drafts[question.id];
  const response = state.responses[question.id];
  return response ? response.userAnswer : ["single", "multiple"].includes(question.type) ? [] : "";
}

function setDraft(question, value) {
  state.drafts[question.id] = value;
  persistCurrentProgress();
}

function answerText(question) {
  const answer = question.answer || {};
  if (Array.isArray(answer.images) && answer.images.length && !answer.text) {
    return "";
  }
  if (["single", "multiple"].includes(question.type) && Array.isArray(answer.keys) && answer.keys.length) {
    return answer.text || answer.keys.join("");
  }
  if (question.type === "judge" && answer.text) {
    return answer.text;
  }
  if (question.type === "blank" && answer.text) {
    return answer.text;
  }
  if (OPEN_TYPES.includes(question.type) && answer.text) {
    return answer.text;
  }
  return OPEN_TYPES.includes(question.type) ? "暂无参考答案" : "待补充";
}

function hasReferenceAnswer(question) {
  return !question.answer?.missing && (Array.isArray(question.answer?.images) && question.answer.images.length || (answerText(question) !== "暂无参考答案" && answerText(question) !== "待补充"));
}

function normalizeForCompare(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[ \t\r\n"'“”‘’`·。！？?，,、；;：:（）()[\]{}<>《》【】]/g, "");
}

function evaluate(question, userAnswer) {
  if (["single", "multiple"].includes(question.type)) {
    const expected = question.answer?.keys || [];
    if (!expected.length) return null;
    const selected = Array.isArray(userAnswer) ? userAnswer : [];
    return [...selected].sort().join("") === [...expected].sort().join("");
  }
  if (question.type === "judge") {
    if (typeof question.answer?.judge !== "boolean") return null;
    return Boolean(userAnswer) === question.answer.judge;
  }
  if (question.type === "blank") {
    const expected = question.answer?.blanks || [];
    if (!expected.length) return null;
    const text = String(userAnswer || "");
    const parts = text.split(/[\n;；]+/).map(normalizeForCompare).filter(Boolean);
    const full = normalizeForCompare(text);
    if (normalizeForCompare(question.answer.text) === full) return true;
    if (expected.length === 1) return normalizeForCompare(expected[0]) === full;
    return expected.every((answer, index) => normalizeForCompare(answer) === parts[index]);
  }
  return null;
}

function stats() {
  const responses = Object.values(state.responses);
  return {
    done: responses.length,
    correct: responses.filter((response) => response.isCorrect === true).length,
    wrong: responses.filter((response) => response.isCorrect === false).length,
    neutral: responses.filter((response) => response.isCorrect === null).length,
  };
}

function renderPractice(historyAction = "replace") {
  setView("practice");
  syncRoute("practice", historyAction);
  persistCurrentProgress();
  if (!state.session.length) {
    app.innerHTML = `
      <section class="panel empty-state">
        <h2>没有可练习的题目</h2>
        <button class="btn primary" type="button" id="emptyBack">返回配置</button>
      </section>
    `;
    triggerPageEnter();
    document.getElementById("emptyBack").addEventListener("click", () => renderSetup("replace"));
    return;
  }

  const subject = getSubject();
  const question = getCurrentQuestion();
  const response = state.responses[question.id];
  const progress = ((state.currentIndex + 1) / state.session.length) * 100;
  const summary = stats();

  app.innerHTML = `
    <div class="practice-toolbar panel">
      <button class="toolbar-back" type="button" id="practiceBack" aria-label="返回配置">
        <span class="back-icon" aria-hidden="true">‹</span>
        <span>返回</span>
      </button>
      <div class="practice-heading">
        <div>
          <strong>${escapeHtml(subject.name)}${state.wrongBookMode ? ' <span class="wrongbook-mode-badge">错题</span>' : ''}</strong>
          <span class="muted">${state.currentIndex + 1} / ${state.session.length}</span>
        </div>
      </div>
      <div class="progress-wrap">
        <div class="progress-line"><div class="progress-fill" style="width: ${progress}%"></div></div>
      </div>
      <div class="toolbar-actions">
        <button class="btn-jump-entry" type="button" id="openJumpPanel">
          ${state.currentIndex + 1} / ${state.session.length}
        </button>
      </div>
    </div>
    <div class="practice-layout">
      <section class="panel practice-main">
        ${renderQuestion(question, response)}
      </section>
    </div>
    <div class="jump-panel" id="jumpPanel">
      <div class="jump-panel-header">
        <span class="jump-panel-title">跳题</span>
        <span class="jump-stats">
          <span class="jump-stat correct">正确 ${summary.correct}</span>
          <span class="jump-stat wrong">需复习 ${summary.wrong}</span>
        </span>
        <button class="jump-close" type="button" id="closeJumpPanel">✕</button>
      </div>
      <div class="jump-grid">
        ${state.session
          .map((item, index) => {
            const itemResponse = state.responses[item.id];
            const classes = [
              "jump-btn",
              index === state.currentIndex ? "is-current" : "",
              itemResponse?.isCorrect === true ? "is-correct" : "",
              itemResponse?.isCorrect === false ? "is-wrong" : "",
              itemResponse?.isCorrect === null ? "is-revealed" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return `<button class="${classes}" type="button" data-jump="${index}">${index + 1}</button>`;
          })
          .join("")}
      </div>
    </div>
    <div class="jump-overlay" id="jumpOverlay"></div>
  `;
  triggerPageEnter();

  wirePracticeEvents();
}

function renderQuestion(question, response) {
  const nextLabel = state.currentIndex === state.session.length - 1 ? "完成" : "下一题";
  const submitLabel = OPEN_TYPES.includes(question.type) ? "参考答案" : "提交";
  return `
    <div class="question-meta">
      <span class="pill"><strong>${escapeHtml(question.typeLabel)}</strong></span>
    </div>
    <div class="question-text">${renderLines(question.prompt)}</div>
    ${renderQuestionImages(question)}
    ${renderAnswerArea(question, response)}
    ${response ? renderAnswerPanel(question, response) : ""}
    <div class="nav-row">
      <div class="nav-step-row">
        <button class="btn step-btn" type="button" id="prevQuestion" ${state.currentIndex === 0 ? "disabled" : ""}>上一题</button>
        <button class="btn step-btn" type="button" id="nextQuestion">${nextLabel}</button>
      </div>
      ${
        response
          ? '<button class="btn ghost" type="button" id="redoQuestion">重答</button>'
          : `<button class="btn primary" type="button" id="submitQuestion">${submitLabel}</button>`
      }
    </div>
  `;
}

function renderQuestionImages(question) {
  const images = question.images;
  if (!Array.isArray(images) || !images.length) return "";
  return `
    <div class="question-images">
      ${images
        .map(
          (image) => `
            <img class="question-image" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "题目图片")}" />
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAnswerArea(question, response) {
  if (["single", "multiple", "judge"].includes(question.type)) {
    const draft = response ? response.userAnswer : getDraft(question);
    return `
      <div class="option-list">
        ${question.options
          .map((option, index) => {
            const selected = question.type === "judge" ? draft === (option.key === "A") : Array.isArray(draft) && draft.includes(option.key);
            const expectedKeys = question.answer?.keys || [];
            const isExpected = question.type === "judge" ? question.answer?.judge === (option.key === "A") : expectedKeys.includes(option.key);
            const isWrongSelection = response && selected && response.isCorrect === false && !isExpected;
            const classes = [
              "option-btn",
              selected ? "is-selected" : "",
              response && isExpected && hasReferenceAnswer(question) ? "is-correct" : "",
              isWrongSelection ? "is-wrong" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return `
              <button class="${classes}" type="button" data-option="${escapeHtml(option.key)}" data-option-index="${index}" ${response ? "disabled" : ""}>
                <span class="option-key">${escapeHtml(option.key)}</span>
                <span>${renderLines(option.text)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  const draft = response ? response.userAnswer : getDraft(question);
  return `
    <textarea class="answer-input" id="writtenAnswer" ${response ? "disabled" : ""}>${escapeHtml(draft || "")}</textarea>
  `;
}

function renderAnswerPanel(question, response) {
  const statusClass = response.isCorrect === true ? "correct" : response.isCorrect === false ? "wrong" : "neutral";
  const statusText = response.isCorrect === true ? "正确" : response.isCorrect === false ? "需复习" : "已查看";
  const referenceText = answerText(question);
  return `
    <div class="answer-panel">
      <span class="status ${statusClass}">${statusText}</span>
      <h3>参考答案</h3>
      ${referenceText ? `<div class="answer-text">${renderLines(referenceText)}</div>` : ""}
      ${renderAnswerImages(question)}
      ${response.userAnswer && !["single", "multiple"].includes(question.type) ? `<h3>我的作答</h3><div class="answer-text">${renderLines(response.userAnswer)}</div>` : ""}
      ${question.explanation ? `<h3>解析</h3><div class="answer-text">${renderLines(question.explanation)}</div>` : ""}
      ${
        OPEN_TYPES.includes(question.type)
          ? `<div class="button-row">
              <button class="btn primary" type="button" data-self="correct">我答对了</button>
              <button class="btn coral" type="button" data-self="wrong">还需复习</button>
            </div>`
          : ""
      }
    </div>
  `;
}

function renderAnswerImages(question) {
  const images = question.answer?.images;
  if (!Array.isArray(images) || !images.length) return "";
  return `
    <div class="answer-images">
      ${images
        .map(
          (image) => `
            <img class="answer-image" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "参考答案图片")}" />
          `,
        )
        .join("")}
    </div>
  `;
}

function wirePracticeEvents() {
  document.getElementById("practiceBack")?.addEventListener("click", handleAppBack);
  const restart = document.getElementById("restartPractice");
  if (restart) {
    restart.addEventListener("click", startPractice);
  }
  document.getElementById("openJumpPanel").addEventListener("click", openJumpPanel);
  document.getElementById("closeJumpPanel").addEventListener("click", closeJumpPanel);
  document.getElementById("jumpOverlay").addEventListener("click", closeJumpPanel);
  const prev = document.getElementById("prevQuestion");
  if (prev) {
    prev.addEventListener("click", previousQuestion);
  }
  const next = document.getElementById("nextQuestion");
  if (next) {
    next.addEventListener("click", nextQuestion);
  }
  const submit = document.getElementById("submitQuestion");
  if (submit) {
    submit.addEventListener("click", submitCurrentQuestion);
  }
  const redo = document.getElementById("redoQuestion");
  if (redo) {
    redo.addEventListener("click", () => {
      const question = getCurrentQuestion();
      delete state.responses[question.id];
      delete state.drafts[question.id];
      persistCurrentProgress();
      renderPractice();
    });
  }

  app.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentIndex = Number.parseInt(button.dataset.jump, 10);
      state.indexOpen = false;
      closeJumpPanel();
      persistCurrentProgress();
      renderPractice();
    });
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => selectOption(button.dataset.option));
  });

  const textarea = document.getElementById("writtenAnswer");
  if (textarea) {
    textarea.addEventListener("input", () => {
      setDraft(getCurrentQuestion(), textarea.value);
    });
    textarea.addEventListener("focus", () => document.body.classList.add("is-writing"));
    textarea.addEventListener("blur", () => {
      setTimeout(() => {
        document.body.classList.remove("is-writing");
      }, 150);
    });
  }

  app.querySelectorAll("[data-self]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = getCurrentQuestion();
      const response = state.responses[question.id];
      if (!response) return;
      response.isCorrect = button.dataset.self === "correct";
      if (response.isCorrect === false) {
        addToWrongBook(question);
      } else {
        removeFromWrongBook(question.id);
      }
      persistCurrentProgress();
      renderPractice();
    });
  });
}

function openJumpPanel() {
  document.getElementById("jumpPanel")?.classList.add("is-open");
  document.getElementById("jumpOverlay")?.classList.add("is-open");
}

function closeJumpPanel() {
  document.getElementById("jumpPanel")?.classList.remove("is-open");
  document.getElementById("jumpOverlay")?.classList.remove("is-open");
}

function isJumpPanelOpen() {
  return Boolean(document.getElementById("jumpPanel")?.classList.contains("is-open"));
}

function selectOption(key) {
  const question = getCurrentQuestion();
  if (state.responses[question.id]) return;
  if (question.type === "judge") {
    setDraft(question, key === "A");
    renderPractice();
    return;
  }
  const current = Array.isArray(getDraft(question)) ? [...getDraft(question)] : [];
  if (question.type === "multiple") {
    const exists = current.includes(key);
    setDraft(question, exists ? current.filter((item) => item !== key) : [...current, key]);
  } else {
    setDraft(question, [key]);
  }
  renderPractice();
}

function submitCurrentQuestion() {
  const question = getCurrentQuestion();
  let userAnswer = getDraft(question);

  if (question.type === "blank" || OPEN_TYPES.includes(question.type)) {
    const textarea = document.getElementById("writtenAnswer");
    userAnswer = textarea ? textarea.value.trim() : String(userAnswer || "").trim();
    setDraft(question, userAnswer);
  }

  if ((["single", "multiple"].includes(question.type) && (!Array.isArray(userAnswer) || userAnswer.length === 0)) || (question.type === "judge" && typeof userAnswer !== "boolean")) {
    return;
  }

  const isCorrect = OPEN_TYPES.includes(question.type) ? null : evaluate(question, userAnswer);
  state.responses[question.id] = {
    userAnswer,
    isCorrect,
    revealed: true,
  };
  if (isCorrect === false) {
    addToWrongBook(question);
  } else if (isCorrect === true) {
    removeFromWrongBook(question.id);
  }
  persistCurrentProgress();
  renderPractice();
}

function nextQuestion() {
  if (state.currentIndex >= state.session.length - 1) {
    persistCurrentProgress();
    renderSummary();
    return;
  }
  state.currentIndex += 1;
  persistCurrentProgress();
  renderPractice();
}

function previousQuestion() {
  if (state.currentIndex <= 0) return;
  state.currentIndex -= 1;
  persistCurrentProgress();
  renderPractice();
}

function renderSummary(historyAction = "replace") {
  setView("summary");
  syncRoute("summary", historyAction);
  persistCurrentProgress();
  const subject = getSubject();
  const summary = stats();
  app.innerHTML = `
    <section class="panel summary-panel">
      <div class="section-head">
        <div>
          <h2>${escapeHtml(subject.name)} · 本轮完成</h2>
          <p class="muted">${state.session.length} 道题</p>
        </div>
        <button class="btn ghost" type="button" id="summarySetup">返回配置</button>
      </div>
      <div class="score-hero">
        <span class="score-correct">${summary.correct}</span>
        <span class="score-total"> / ${state.session.length}</span>
      </div>
      <div class="stat-row">
        <div class="stat-box"><div class="stat-value">${summary.done}</div><div class="muted">已作答</div></div>
        <div class="stat-box"><div class="stat-value">${summary.correct}</div><div class="muted">正确</div></div>
        <div class="stat-box"><div class="stat-value">${summary.wrong}</div><div class="muted">需复习</div></div>
        <div class="stat-box"><div class="stat-value">${summary.neutral}</div><div class="muted">已查看</div></div>
      </div>
      <div class="button-row">
        <button class="btn primary" type="button" id="summaryRestart">${state.wrongBookMode ? '再练错题' : '再练一轮'}</button>
        <button class="btn" type="button" id="summaryReview">${state.wrongBookMode ? '返回错题本' : '回看题目'}</button>
      </div>
    </section>
  `;
  triggerPageEnter();
  document.getElementById("summarySetup").addEventListener("click", () => {
    if (state.wrongBookMode) renderWrongBook("replace");
    else renderSetup("replace");
  });
  document.getElementById("summaryRestart").addEventListener("click", () => {
    if (state.wrongBookMode) startWrongBookPractice(state.subjectId);
    else startPractice();
  });
  document.getElementById("summaryReview").addEventListener("click", () => {
    if (state.wrongBookMode) {
      renderWrongBook("replace");
    } else {
      state.currentIndex = 0;
      renderPractice();
    }
  });
}

function renderWrongBook(historyAction = "replace") {
  setView("wrongbook");
  syncRoute("wrongbook", historyAction);

  const entries = wrongBookRead();
  const total = Object.keys(entries).length;

  // Group entries by subject
  const bySubject = {};
  for (const [questionId, entry] of Object.entries(entries)) {
    const sid = entry.subjectId;
    if (!bySubject[sid]) bySubject[sid] = [];
    bySubject[sid].push({ questionId, ...entry });
  }

  // Resolve full question objects and filter valid ones
  const subjectGroups = [];
  for (const subject of BANK.subjects) {
    const group = bySubject[subject.id];
    if (!group || !group.length) continue;
    const questions = group
      .map((e) => ({ ...e, question: getQuestionById(subject, e.questionId) }))
      .filter((e) => e.question);
    if (!questions.length) continue;
    subjectGroups.push({ subject, questions });
  }

  app.innerHTML = `
    <section class="panel wrongbook-panel">
      <div class="section-head">
        <div>
          <h2>错题本</h2>
          <p class="muted">${total ? `共 <strong>${total}</strong> 道待复习` : "暂无错题，继续加油！"}</p>
        </div>
        <div class="wrongbook-header-actions">
          ${total ? `<button class="btn coral compact-btn" type="button" id="clearWrongBook">清空</button>` : ""}
          <button class="btn ghost" type="button" id="backFromWrongBook">返回</button>
        </div>
      </div>
      ${
        !total
          ? `<div class="wrongbook-empty">
               <div class="wrongbook-empty-icon">🎉</div>
               <p class="wrongbook-empty-title">没有错题，太棒了！</p>
               <p class="muted">做题时答错的题目会自动收录到这里。</p>
             </div>`
          : `<div class="wrongbook-groups">
               ${subjectGroups
                 .map(
                   ({ subject, questions }) => `
                     <div class="wrongbook-group">
                       <div class="wrongbook-group-header">
                         <div class="wrongbook-group-info">
                           <span class="wrongbook-subject-name">${escapeHtml(subject.name)}</span>
                           <span class="wrongbook-count-badge">${questions.length} 道</span>
                         </div>
                         <button class="btn primary compact-btn" type="button" data-practice-wrong="${escapeHtml(subject.id)}">练习</button>
                       </div>
                       <div class="wrongbook-list">
                         ${questions
                           .slice()
                           .sort((a, b) => String(b.lastWrongAt || "").localeCompare(String(a.lastWrongAt || "")))
                           .map(
                             ({ questionId, wrongCount, question }) => `
                               <div class="wrongbook-item">
                                 <div class="wrongbook-item-content">
                                   <div class="wrongbook-item-meta">
                                     <span class="pill">${escapeHtml(question.typeLabel)}</span>
                                     ${wrongCount > 1 ? `<span class="wrongbook-wrong-count">错 ${wrongCount} 次</span>` : ""}
                                   </div>
                                   <div class="wrongbook-item-prompt">${escapeHtml((question.prompt || "").slice(0, 120))}</div>
                                 </div>
                                 <button class="btn ghost wrongbook-remove-btn" type="button" data-remove-wrong="${escapeHtml(questionId)}" title="已掌握，移出错题本">✕</button>
                               </div>
                             `,
                           )
                           .join("")}
                       </div>
                     </div>
                   `,
                 )
                 .join("")}
             </div>`
      }
    </section>
  `;
  triggerPageEnter();
  wireWrongBookEvents();
}

function wireWrongBookEvents() {
  document.getElementById("backFromWrongBook")?.addEventListener("click", () => renderHome("replace"));
  document.getElementById("clearWrongBook")?.addEventListener("click", () => {
    if (!confirm("确认清空全部错题本记录吗？")) return;
    clearWrongBook();
    renderWrongBook("replace");
  });
  app.querySelectorAll("[data-practice-wrong]").forEach((button) => {
    button.addEventListener("click", () => startWrongBookPractice(button.dataset.practiceWrong));
  });
  app.querySelectorAll("[data-remove-wrong]").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromWrongBook(button.dataset.removeWrong);
      renderWrongBook("replace");
    });
  });
}

function startWrongBookPractice(subjectId) {
  const subject = BANK.subjects.find((s) => s.id === subjectId);
  if (!subject) return;

  const entries = wrongBookRead();
  const wrongIds = new Set(
    Object.entries(entries)
      .filter(([, e]) => e.subjectId === subjectId)
      .map(([id]) => id),
  );

  const questions = subject.questions.filter((q) => wrongIds.has(q.id));
  if (!questions.length) {
    alert("该科目错题本暂无题目。");
    return;
  }

  state.subjectId = subjectId;
  state.selectedTypes = new Set(questions.map((q) => q.type));
  state.session = shuffle(questions);
  state.currentIndex = 0;
  state.drafts = {};
  state.responses = {};
  state.indexOpen = false;
  state.wrongBookMode = true;
  persistCurrentProgress();
  renderPractice("push");
}

function handleKeyboard(event) {
  const target = event.target;
  const isTyping = target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);

  if (event.key === "Escape" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    if (!isTyping || state.view === "practice") {
      event.preventDefault();
      handleAppBack();
      return;
    }
  }

  if (state.view !== "practice") return;

  if (isTyping && !(event.ctrlKey && event.key === "Enter") && event.key !== "Escape") {
    const question = getCurrentQuestion();
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey &&
      question &&
      question.type === "blank" &&
      (!question.answer || !question.answer.blanks || question.answer.blanks.length <= 1)
    ) {
      // Allow single-blank fill-in-the-blank questions to submit/proceed on Enter
    } else {
      return;
    }
  }

  const question = getCurrentQuestion();
  if (!question) return;

  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    submitCurrentQuestion();
    return;
  }

  const numpad = /^Numpad([1-9])$/.exec(event.code || "");
  const digit = /^[1-9]$/.test(event.key) ? Number.parseInt(event.key, 10) : numpad ? Number.parseInt(numpad[1], 10) : 0;
  if (digit && (["single", "multiple", "judge"].includes(question.type))) {
    const option = question.options[digit - 1];
    if (option) {
      event.preventDefault();
      selectOption(option.key);
    }
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    nextQuestion();
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousQuestion();
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    if (state.responses[question.id]) nextQuestion();
    else submitCurrentQuestion();
    return;
  }
  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    startPractice();
  }
}

init();
