const fs = require("fs");
const vm = require("vm");

const path = "data/questions.js";
const code = fs.readFileSync(path, "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const bank = sandbox.window.QUESTION_BANK;

bank.typeLabels = {
  single: "单选",
  multiple: "多选",
  blank: "填空题",
  judge: "判断题",
  short: "简答题",
  comprehensive: "综合题",
  programming: "编程题",
};
bank.typeOrder = ["single", "multiple", "blank", "judge", "short", "comprehensive", "programming"];

function setOpenQuestion(question, type, label, extra = {}) {
  question.type = type;
  question.typeLabel = label;
  question.mode = type;
  Object.assign(question, extra);
}

function image(src, alt) {
  return { src, alt };
}

const soft = bank.subjects.find((subject) => subject.name === "软工" || subject.total === 47);
if (!soft) throw new Error("soft subject not found");

const blankAnswers = {
  21: ["参与者"],
  22: ["链"],
  23: ["状态图"],
  24: ["面向对象分析", "面向对象测试"],
  25: ["等价类划分法"],
  26: ["消息"],
  27: ["白盒"],
  28: ["数据流图"],
  29: ["执行者"],
  30: ["技术可行性"],
};

const judgeAnswers = {
  31: false,
  32: true,
  33: false,
  34: false,
  35: true,
  36: true,
  37: false,
  38: true,
  39: false,
  40: false,
};

const shortAnswers = {
  41: "顺序图是按时间顺序显示对象交互的图。它显示参与交互的对象和所交换信息的先后顺序，用来表示用例中的行为，并将这些行为建模成信息交换。顺序图的主要组成元素包括对象及生命线、激活和消息。",
  42: "传统软件生命周期的六个阶段是：1）可行性研究；2）需求分析；3）软件设计；4）编码；5）软件测试；6）软件维护。",
  43: "软件工程的基本原则包括：1）用分阶段的生命周期计划进行严格的管理；2）坚持进行阶段评审；3）实行严格的产品控制；4）采用现代程序设计技术；5）软件工程结果应能清楚地审查；6）开发小组的人员应该少而精；7）承认不断改进软件工程实践的必要性。",
  44: "与计算机硬件相比，计算机软件的特点包括：1）具有抽象性；2）无明显的制造过程；3）存在退化问题；4）对计算机系统有着不同程度的依赖性；5）尚未完全摆脱人工的开发方式；6）软件本身是复杂的；7）成本相当昂贵；8）相当多的软件工作涉及社会因素。",
};

const comprehensiveImages = {
  45: { src: "assets/answers/soft-45.svg", alt: "answer image 45" },
  46: { src: "assets/answers/soft-46.svg", alt: "answer image 46" },
  47: { src: "assets/answers/soft-47.svg", alt: "answer image 47" },
};

const extraSoftQuestions = [
  {
    id: "q-soft-extra-uml-diagrams",
    order: 48,
    originalNumber: "补1",
    prompt: "UML中有哪些图？",
    answer:
      "UML常见图包括：用例图、类图、对象图、包图、顺序图、协作图、状态图、活动图、组件图和部署图。",
  },
  {
    id: "q-soft-extra-er-diagram",
    order: 49,
    originalNumber: "补2",
    prompt: "请阐述E-R图的概念及组成要素，并从数量角度对实体和实体的关系进行分类。",
    answer:
      "E-R图用于描述现实世界中实体、属性以及实体之间的联系。组成要素包括：实体（通常用矩形表示）、属性（通常用椭圆表示）、联系（通常用菱形并通过连线表示）。从数量角度看，实体之间的联系可分为一对一（1:1）、一对多（1:n）和多对多（m:n）。",
  },
  {
    id: "q-soft-extra-class-relations",
    order: 50,
    originalNumber: "补3",
    prompt: "简述类和类之间的关系，说明它们分别用来描述什么情况。",
    answer:
      "类之间常见关系包括：关联关系、依赖关系、泛化关系和实现关系。关联关系描述对象之间较稳定的结构联系；依赖关系描述一个类临时使用另一个类，后者变化可能影响前者；泛化关系描述一般类与特殊类之间的继承关系；实现关系描述类对接口或规格的实现。",
  },
];

for (const question of soft.questions) {
  // Image fixes for 选择题.txt
  if (question.source === "选择题.txt") {
    const num = Number(question.originalNumber);
    if (num === 8) {
      question.images = [image("assets/answers/soft/soft-dfd-transform.png", "数据流图数据变换符号选项")];
    } else if (num === 24) {
      question.images = [image("assets/answers/soft/soft-pad-selection.png", "PAD图选择性结构选项")];
    } else if (num === 27) {
      question.images = [image("assets/answers/soft/soft-dfd-ticket.png", "飞机票预定系统数据流图")];
    } else if (num === 37) {
      question.images = [image("assets/answers/soft/soft-class-association.png", "两个类的关联关系图")];
    } else if (num === 38) {
      question.images = [image("assets/answers/soft/soft-class-shape.png", "Shape类的类图")];
    }
  }

  // Option/Image fix for Question 8 in 2025-2026第二学期软件工程测试.txt (originally parsed incorrectly as short question)
  if (question.source === "2025-2026第二学期软件工程测试.txt" && Number(question.originalNumber) === 8) {
    question.type = "single";
    question.typeLabel = bank.typeLabels.single;
    question.mode = "single";
    question.prompt = "以下符号哪个是在顺序图中表示返回消息的符号(        )。";
    question.options = [
      { key: "A", text: "A" },
      { key: "B", text: "B" },
      { key: "C", text: "C" },
      { key: "D", text: "D" }
    ];
    question.answer = {
      keys: ["B"],
      text: "B. B"
    };
    question.images = [image("assets/answers/soft/soft-seq-return.png", "顺序图返回消息符号选项")];
  }

  if (question.source !== "2025-2026第二学期软件工程测试.txt") {
    continue;
  }
  const number = Number(question.originalNumber);
  if (blankAnswers[number]) {
    question.answer = {
      blanks: blankAnswers[number],
      text: blankAnswers[number].join("；"),
    };
  }
  if (Object.prototype.hasOwnProperty.call(judgeAnswers, number)) {
    question.answer = {
      judge: judgeAnswers[number],
      text: judgeAnswers[number] ? "对" : "错",
    };
  }
  if (shortAnswers[number]) {
    question.type = "short";
    question.typeLabel = bank.typeLabels.short;
    question.mode = "short";
    question.answer = { text: shortAnswers[number] };
  }
  if (comprehensiveImages[number]) {
    question.type = "comprehensive";
    question.typeLabel = bank.typeLabels.comprehensive;
    question.mode = "comprehensive";
    question.answer = { images: [comprehensiveImages[number]] };
  }
}

for (const extra of extraSoftQuestions) {
  let question = soft.questions.find((item) => item.id === extra.id);
  if (!question) {
    question = {
      id: extra.id,
      subject: soft.name,
      source: "用户补充题",
      order: extra.order,
      originalNumber: extra.originalNumber,
      options: [],
      explanation: "",
    };
    soft.questions.push(question);
  }
  setOpenQuestion(question, "short", bank.typeLabels.short, {
    subject: soft.name,
    source: "用户补充题",
    order: extra.order,
    originalNumber: extra.originalNumber,
    prompt: extra.prompt,
    options: [],
    answer: { text: extra.answer },
    explanation: "",
  });
}

const harmony = bank.subjects.find((subject) => subject.name === "鸿蒙" || subject.total === 56);
if (harmony) {
  const programming = harmony.questions.find((question) => Number(question.originalNumber) === 56 && /五子棋|ArkTS|页面功能/.test(question.prompt));
  if (programming) {
    setOpenQuestion(programming, "programming", bank.typeLabels.programming);
  }
}

const dataStructure = bank.subjects.find((subject) => subject.name === "数据结构" || subject.questions.some((question) => /数据结构/.test(question.source || "")));
if (dataStructure) {
  const insertBlank = dataStructure.questions.find((question) => Number(question.order) === 112);
  if (insertBlank) {
    insertBlank.answer = {
      blanks: ["this.element[j + 1] = source[j]", "this.n++"],
      text: "this.element[j + 1] = source[j]；this.n++",
    };
  }

  const huffman = dataStructure.questions.find((question) => Number(question.order) === 124);
  if (huffman) {
    setOpenQuestion(huffman, "comprehensive", bank.typeLabels.comprehensive, {
      prompt:
        "假设用于通信的电文仅由8个字母组成，字母在电文中出现的频率分别为0.07，0.19，0.02，0.06，0.32，0.03，0.21，0.10。\n① 试为这8个字母设计哈夫曼编码。\n② 试设计另一种由二进制表示的等长编码方案。\n③ 对于上述实例，比较两种方案的优缺点。",
      answer: {
        text: "方案1的带权路径长度 WPL=2.61；方案2的带权路径长度 WPL=3。结论：哈夫曼编码优于等长二进制编码。",
        images: [
          image("assets/answers/data-structure/image1.png", "哈夫曼树"),
          image("assets/answers/data-structure/image2.png", "哈夫曼编码示意图"),
        ],
      },
    });
  }

  const directedGraphId = "q-data-structure-directed-graph";
  const directedGraph =
    dataStructure.questions.find((question) => question.id === directedGraphId) ||
    (() => {
      const created = {
        id: directedGraphId,
        subject: dataStructure.name,
        source: "数据结构与算法(java)-- 复习题-4.docx",
        order: 124.5,
        originalNumber: "2",
        options: [],
        explanation: "",
      };
      dataStructure.questions.push(created);
      return created;
    })();
  setOpenQuestion(directedGraph, "comprehensive", bank.typeLabels.comprehensive, {
    prompt: "已知下图所示的有向图，请给出：\n① 每个顶点的入度和出度；\n② 邻接矩阵；\n③ 邻接表；\n④ 逆邻接表。",
    images: [image("assets/answers/data-structure/image3.png", "有向图题干")],
    answer: {
      images: [image("assets/answers/data-structure/image4.png", "有向图入度出度、邻接矩阵、邻接表和逆邻接表答案")],
    },
  });

  const weightedNet = dataStructure.questions.find((question) => Number(question.order) === 125);
  if (weightedNet) {
    setOpenQuestion(weightedNet, "comprehensive", bank.typeLabels.comprehensive, {
      prompt: "已知下图所示的无向网，请给出：\n① 邻接矩阵；\n② 邻接表；\n③ 最小生成树。",
      images: [image("assets/answers/data-structure/image5.png", "无向网题干")],
      answer: {
        text: "已提取到邻接矩阵图，邻接表和最小生成树答案待后续补全。",
        images: [image("assets/answers/data-structure/image6.png", "无向网邻接矩阵答案")],
      },
    });
  }

  const adjacencyListGraph = dataStructure.questions.find((question) => Number(question.order) === 126);
  if (adjacencyListGraph) {
    setOpenQuestion(adjacencyListGraph, "comprehensive", bank.typeLabels.comprehensive, {
      prompt:
        "已知带权连通图G=(V,E) 的邻接表如图所示，请画出该图的逻辑结构，并分别写出从顶点1出发的深度优先遍历和广度优先遍历序列，并画出该图从顶点0出发的一棵最小生成树。",
      images: [image("assets/answers/data-structure/image8.png", "带权连通图邻接表题干")],
      answer: {
        text: "从顶点1出发的深度优先遍历序列为：1、0、2、3、4。从顶点1出发的广度优先遍历序列为：1、0、2、4、3。",
        images: [
          image("assets/answers/data-structure/image9.png", "带权连通图逻辑结构答案"),
          image("assets/answers/data-structure/image10.png", "从顶点0出发的最小生成树答案"),
        ],
      },
    });
  }
}

const cloud = bank.subjects.find((subject) => subject.name === "云计算" || subject.questions.some((question) => /云计算/.test(question.subject || "")));
if (cloud) {
  for (const question of cloud.questions) {
    if ([166, 167].includes(Number(question.order))) {
      setOpenQuestion(question, "comprehensive", bank.typeLabels.comprehensive, {
        answer: question.answer || { text: "" },
      });
    }
  }
}

for (const subject of bank.subjects) {
  subject.total = subject.questions.length;
  const counts = {};
  for (const type of bank.typeOrder) counts[type] = 0;
  for (const question of subject.questions) {
    counts[question.type] = (counts[question.type] || 0) + 1;
  }
  subject.counts = counts;
  subject.questions.sort((a, b) => {
    const typeA = bank.typeOrder.indexOf(a.type);
    const typeB = bank.typeOrder.indexOf(b.type);
    return (typeA === -1 ? 999 : typeA) - (typeB === -1 ? 999 : typeB) || a.order - b.order;
  });
}

bank.generatedAt = new Date().toISOString();
fs.writeFileSync(path, `window.QUESTION_BANK = ${JSON.stringify(bank, null, 2)};\n`, "utf8");
