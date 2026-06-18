window.QUESTION_BANK = {
  "generatedAt": "2026-06-18T00:48:30.264Z",
  "typeLabels": {
    "single": "单选",
    "multiple": "多选",
    "blank": "填空题",
    "judge": "判断题",
    "short": "简答题",
    "comprehensive": "综合题",
    "programming": "编程题"
  },
  "typeOrder": [
    "single",
    "multiple",
    "blank",
    "judge",
    "short",
    "comprehensive",
    "programming"
  ],
  "subjects": [
    {
      "id": "subject-1fefd5a9",
      "name": "云计算",
      "sources": [
        "题库(1).pdf"
      ],
      "counts": {
        "single": 60,
        "multiple": 32,
        "blank": 29,
        "judge": 30,
        "short": 14,
        "comprehensive": 2,
        "programming": 0
      },
      "total": 167,
      "questions": [
        {
          "id": "q-eb8dabfbbb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 1,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 1,
          "prompt": "KVM 中 I/O 虚拟化是通过什么实现的？（ ）",
          "options": [
            {
              "key": "A",
              "text": "内核空间的模块"
            },
            {
              "key": "B",
              "text": "硬件设备"
            },
            {
              "key": "C",
              "text": "驱动程序"
            },
            {
              "key": "D",
              "text": "用户空间的 QEMU"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 用户空间的 QEMU"
          },
          "explanation": ""
        },
        {
          "id": "q-1042eb3b99",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 2,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 2,
          "prompt": "在 VT-x 环境中，虚拟寄存器信息包含在以下哪个中？（ ）",
          "options": [
            {
              "key": "A",
              "text": "VMCS"
            },
            {
              "key": "B",
              "text": "kvm_vcpu"
            },
            {
              "key": "C",
              "text": "vCPU 状态信息"
            },
            {
              "key": "D",
              "text": "额外寄存器"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. VMCS"
          },
          "explanation": ""
        },
        {
          "id": "q-610fda5b2c",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 3,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 3,
          "prompt": "2006 年推出简单存储服务 S3 和弹性云计算 EC2，奠定云计算服务基石的是\n哪家公司？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Google"
            },
            {
              "key": "B",
              "text": "Amazon"
            },
            {
              "key": "C",
              "text": "Microsoft"
            },
            {
              "key": "D",
              "text": "IBM"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Amazon"
          },
          "explanation": ""
        },
        {
          "id": "q-2415b0e39b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 4,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 4,
          "prompt": "以下哪种计算模式主要目标是不同的子任务在多个处理器上同时运行，以快速\n解决大型且复杂的计算问题？（ ）",
          "options": [
            {
              "key": "A",
              "text": "分布式计算"
            },
            {
              "key": "B",
              "text": "并行计算"
            },
            {
              "key": "C",
              "text": "集群计算"
            },
            {
              "key": "D",
              "text": "网格计算"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 并行计算"
          },
          "explanation": ""
        },
        {
          "id": "q-1135d523e7",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 5,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 5,
          "prompt": "哪种计算模式依托专网或互联网，以松耦合方式将部分处于不同地域、自愿参\n加的计算机组织起来统一调度，利用闲散计算资源形成超级计算能力？ （ ）",
          "options": [
            {
              "key": "A",
              "text": "效用计算"
            },
            {
              "key": "B",
              "text": "集群计算"
            },
            {
              "key": "C",
              "text": "网格计算"
            },
            {
              "key": "D",
              "text": "Web 服务"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 网格计算"
          },
          "explanation": ""
        },
        {
          "id": "q-8171f27a56",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 6,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 6,
          "prompt": "虚拟化的主要目标是（ ）",
          "options": [
            {
              "key": "A",
              "text": "把复杂问题分成适量子任务并综合计算结果"
            },
            {
              "key": "B",
              "text": "对单台或多台计算机系统软、硬件资源进行划分和抽象，统一分配、调度、 管理"
            },
            {
              "key": "C",
              "text": "提供客户需要的计算资源和基础设施管理，按使用量收费"
            },
            {
              "key": "D",
              "text": "以紧耦合方式连接一组计算机构成更高性能计算机系统"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 对单台或多台计算机系统软、硬件资源进行划分和抽象，统一分配、调度、 管理"
          },
          "explanation": ""
        },
        {
          "id": "q-e1c0790369",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 7,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 7,
          "prompt": "系统虚拟化的核心思想是（ ）",
          "options": [
            {
              "key": "A",
              "text": "将多台物理计算机系统整合为一台逻辑计算机系统"
            },
            {
              "key": "B",
              "text": "用虚拟化技术将一台物理计算机系统虚拟化为一台或多台逻辑独立的计算机 系统"
            },
            {
              "key": "C",
              "text": "将一台物理计算机系统的硬件和软件分离"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 用虚拟化技术将一台物理计算机系统虚拟化为一台或多台逻辑独立的计算机 系统"
          },
          "explanation": ""
        },
        {
          "id": "q-458d4c3851",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 8,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 8,
          "prompt": "虚拟环境一般由以下哪三部分组成？（ ）",
          "options": [
            {
              "key": "A",
              "text": "软件、虚拟化层 VMM 和虚拟机"
            },
            {
              "key": "B",
              "text": "硬件、操作系统和虚拟机"
            },
            {
              "key": "C",
              "text": "硬件、虚拟化层 VMM 和虚拟机"
            },
            {
              "key": "D",
              "text": "硬件、虚拟化层 VMM 和应用程序"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 硬件、虚拟化层 VMM 和虚拟机"
          },
          "explanation": ""
        },
        {
          "id": "q-33e5120e0d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 9,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 9,
          "prompt": "使用虚拟化技术，在一台物理机上多个操作系统的运行情况是（ ）",
          "options": [
            {
              "key": "A",
              "text": "相互影响，协同运行"
            },
            {
              "key": "B",
              "text": "完全相同，同步运行"
            },
            {
              "key": "C",
              "text": "完全不同，互不影响地同时运行"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 完全不同，互不影响地同时运行"
          },
          "explanation": ""
        },
        {
          "id": "q-82016b83d4",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 10,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 10,
          "prompt": "Intel VT-d 提供了两种数据结构来描述 PCI 架构，分别是（ ）",
          "options": [
            {
              "key": "A",
              "text": "根条目和子条目"
            },
            {
              "key": "B",
              "text": "根条目和上下文条目"
            },
            {
              "key": "C",
              "text": "主条目和上下文条目"
            },
            {
              "key": "D",
              "text": "主条目和子条目"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 根条目和上下文条目"
          },
          "explanation": ""
        },
        {
          "id": "q-067ef82501",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 11,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 11,
          "prompt": "在根条目的结构中，标记为 CTP 的部分代表（ ）",
          "options": [
            {
              "key": "A",
              "text": "未提及具体含义"
            },
            {
              "key": "B",
              "text": "可执行权限"
            },
            {
              "key": "C",
              "text": "可读权限"
            },
            {
              "key": "D",
              "text": "可写权限"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 未提及具体含义"
          },
          "explanation": ""
        },
        {
          "id": "q-71a30cb2b3",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 12,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 12,
          "prompt": "在上下文条目的结构中，DID 所在位置对应的比特位范围是（ ）",
          "options": [
            {
              "key": "A",
              "text": "72 - 87"
            },
            {
              "key": "B",
              "text": "66 - 71"
            },
            {
              "key": "C",
              "text": "88 - 127"
            },
            {
              "key": "D",
              "text": "0 - 65"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 72 - 87"
          },
          "explanation": ""
        },
        {
          "id": "q-c70a0386a4",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 13,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 13,
          "prompt": "SR - IOV 是由哪个组织公布的规范？（ ）",
          "options": [
            {
              "key": "A",
              "text": "PCI - SIG"
            },
            {
              "key": "B",
              "text": "IEEE"
            },
            {
              "key": "C",
              "text": "ISO"
            },
            {
              "key": "D",
              "text": "ANSI"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. PCI - SIG"
          },
          "explanation": ""
        },
        {
          "id": "q-d53779e972",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 14,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 14,
          "prompt": "SR - IOV 旨在消除以下哪项对虚拟化 I/O 操作的干预？（ ）",
          "options": [
            {
              "key": "A",
              "text": "操作系统"
            },
            {
              "key": "B",
              "text": "虚拟机监视器（VMM）"
            },
            {
              "key": "C",
              "text": "应用程序"
            },
            {
              "key": "D",
              "text": "驱动程序"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 虚拟机监视器（VMM）"
          },
          "explanation": ""
        },
        {
          "id": "q-6f8cd3d1aa",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 15,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 15,
          "prompt": "在具有 SR - IOV 功能的 I/O 设备中，PF 指的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "虚拟设备"
            },
            {
              "key": "B",
              "text": "物理设备"
            },
            {
              "key": "C",
              "text": "标准的 PCIe 设备"
            },
            {
              "key": "D",
              "text": "B 和 C"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. B 和 C"
          },
          "explanation": ""
        },
        {
          "id": "q-15f6a933a7",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 16,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 16,
          "prompt": "在 SR - IOV 模型中，PF 驱动运行在以下哪种设备上？（ ）",
          "options": [
            {
              "key": "A",
              "text": "客户机"
            },
            {
              "key": "B",
              "text": "宿主机"
            },
            {
              "key": "C",
              "text": "虚拟机"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 宿主机"
          },
          "explanation": ""
        },
        {
          "id": "q-d711362a02",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 17,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 17,
          "prompt": "在 SR - IOV 模型中，VF 驱动运行在以下哪种设备上？（ ）",
          "options": [
            {
              "key": "A",
              "text": "宿主机"
            },
            {
              "key": "B",
              "text": "客户机"
            },
            {
              "key": "C",
              "text": "虚拟机"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 客户机"
          },
          "explanation": ""
        },
        {
          "id": "q-c00a4eac3c",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 18,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 18,
          "prompt": "SR - IOV 管理器运行在何处，用于管理什么？（ ）",
          "options": [
            {
              "key": "A",
              "text": "运行在客户机，管理 PF 的资源"
            },
            {
              "key": "B",
              "text": "运行在宿主机，管理 PCIe 拓扑的控制点和 VF 的配置空间"
            },
            {
              "key": "C",
              "text": "运行在虚拟机，管理 I/O 设备"
            },
            {
              "key": "D",
              "text": "运行在宿主机，管理客户机的驱动程序"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 运行在宿主机，管理 PCIe 拓扑的控制点和 VF 的配置空间"
          },
          "explanation": ""
        },
        {
          "id": "q-dd081a6122",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 19,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 19,
          "prompt": "软件定义网络 SDN 起源于哪一年的什么研究课题？（ ）",
          "options": [
            {
              "key": "A",
              "text": "2006 年斯坦福大学的 Clean Slate 研究课题"
            },
            {
              "key": "B",
              "text": "2009 年斯坦福大学的 Clean Slate 研究课题"
            },
            {
              "key": "C",
              "text": "2006 年哈佛大学的 Clean Slate 研究课题"
            },
            {
              "key": "D",
              "text": "2009 年哈佛大学的 Clean Slate 研究课题"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 2006 年斯坦福大学的 Clean Slate 研究课题"
          },
          "explanation": ""
        },
        {
          "id": "q-8d11833e93",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 20,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 20,
          "prompt": "哪一年 Mckeown 教授正式提出了 SDN 概念？（ ）",
          "options": [
            {
              "key": "A",
              "text": "2006 年"
            },
            {
              "key": "B",
              "text": "2009 年"
            },
            {
              "key": "C",
              "text": "2012 年"
            },
            {
              "key": "D",
              "text": "2013 年"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 2009 年"
          },
          "explanation": ""
        },
        {
          "id": "q-8c517d9d10",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 21,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 21,
          "prompt": "软件定义网络 SDN 的核心技术是（ ）",
          "options": [
            {
              "key": "A",
              "text": "OpenStack"
            },
            {
              "key": "B",
              "text": "OpenFlow"
            },
            {
              "key": "C",
              "text": "Docker"
            },
            {
              "key": "D",
              "text": "Kubernetes"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. OpenFlow"
          },
          "explanation": ""
        },
        {
          "id": "q-ba2df1ec92",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 22,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 22,
          "prompt": "在 SDN 网络架构中，体现用户意图的各种上层应用程序位于（ ）",
          "options": [
            {
              "key": "A",
              "text": "应用层"
            },
            {
              "key": "B",
              "text": "控制层"
            },
            {
              "key": "C",
              "text": "转发层"
            },
            {
              "key": "D",
              "text": "管理层"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 应用层"
          },
          "explanation": ""
        },
        {
          "id": "q-2f67380005",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 23,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 23,
          "prompt": "SDN 网络架构中，负责网络内部交换路径和边界业务路由生成的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "应用层"
            },
            {
              "key": "B",
              "text": "控制层"
            },
            {
              "key": "C",
              "text": "转发层"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 控制层"
          },
          "explanation": ""
        },
        {
          "id": "q-6572cb3081",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 24,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 24,
          "prompt": "SDN 网络架构中，执行用户数据转发的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "应用层"
            },
            {
              "key": "B",
              "text": "控制层"
            },
            {
              "key": "C",
              "text": "转发层"
            },
            {
              "key": "D",
              "text": "接口层"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 转发层"
          },
          "explanation": ""
        },
        {
          "id": "q-16f9d83b50",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 25,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 25,
          "prompt": "在 SDN 网络架构中，位于数据平面和控制平面之间，负责 SDN 控制器与网\n络单元之间数据交换和交互操作的接口是（ ）",
          "options": [
            {
              "key": "A",
              "text": "北向接口"
            },
            {
              "key": "B",
              "text": "南向接口"
            },
            {
              "key": "C",
              "text": "东西向接口"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 南向接口"
          },
          "explanation": ""
        },
        {
          "id": "q-cd9dd25321",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 26,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 26,
          "prompt": "OpenFlow 协议工作在 SDN 网络架构的（ ）",
          "options": [
            {
              "key": "A",
              "text": "北向接口"
            },
            {
              "key": "B",
              "text": "南向接口"
            },
            {
              "key": "C",
              "text": "应用层"
            },
            {
              "key": "D",
              "text": "转发层"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 南向接口"
          },
          "explanation": ""
        },
        {
          "id": "q-4d55a4513e",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 27,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 27,
          "prompt": "在 SDN 网络架构中，上层应用程序通过哪个接口获取下层网络资源并向下层\n网络发送数据？（ ）",
          "options": [
            {
              "key": "A",
              "text": "北向接口"
            },
            {
              "key": "B",
              "text": "南向接口"
            },
            {
              "key": "C",
              "text": "控制接口"
            },
            {
              "key": "D",
              "text": "数据接口"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 北向接口"
          },
          "explanation": ""
        },
        {
          "id": "q-69b526bb1a",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 28,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 28,
          "prompt": "OpenFlow 属于以下哪种类型的协议？（ ）",
          "options": [
            {
              "key": "A",
              "text": "网络层协议"
            },
            {
              "key": "B",
              "text": "数据链路层协议"
            },
            {
              "key": "C",
              "text": "传输层协议"
            },
            {
              "key": "D",
              "text": "应用层协议"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 数据链路层协议"
          },
          "explanation": ""
        },
        {
          "id": "q-88cfd9d5cb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 29,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 29,
          "prompt": "OpenFlow 网络不包括以下哪个组件？（ ）",
          "options": [
            {
              "key": "A",
              "text": "OpenFlow 网络设备（OpenFlow 交换机）"
            },
            {
              "key": "B",
              "text": "路由器"
            },
            {
              "key": "C",
              "text": "控制器（OpenFlow 控制器）"
            },
            {
              "key": "D",
              "text": "安全通道（Secure Channel）"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 路由器"
          },
          "explanation": ""
        },
        {
          "id": "q-e62ba54c93",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 30,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 30,
          "prompt": "OpenFlow 协议主要用于描述（ ）",
          "options": [
            {
              "key": "A",
              "text": "网络层设备之间交互信息的标准"
            },
            {
              "key": "B",
              "text": "控制器和交换机之间交互信息的标准以及接口标准"
            },
            {
              "key": "C",
              "text": "应用层与控制层之间的通信标准"
            },
            {
              "key": "D",
              "text": "数据链路层与网络层之间的转换标准"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 控制器和交换机之间交互信息的标准以及接口标准"
          },
          "explanation": ""
        },
        {
          "id": "q-9d401b9868",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 31,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 31,
          "prompt": "第一款真正的 SDN OpenFlow 控制器是（ ）",
          "options": [
            {
              "key": "A",
              "text": "NOX"
            },
            {
              "key": "B",
              "text": "POX"
            },
            {
              "key": "C",
              "text": "ONOS"
            },
            {
              "key": "D",
              "text": "OpenDaylight"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. NOX"
          },
          "explanation": ""
        },
        {
          "id": "q-383ff1889a",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 32,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 32,
          "prompt": "ONOS 控制器主要面向的对象是（ ）",
          "options": [
            {
              "key": "A",
              "text": "个人用户"
            },
            {
              "key": "B",
              "text": "网络服务提供商和企业骨干网"
            },
            {
              "key": "C",
              "text": "研究和教育领域"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 网络服务提供商和企业骨干网"
          },
          "explanation": ""
        },
        {
          "id": "q-1b5f57e03b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 33,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 33,
          "prompt": "OpenDaylight 项目使用什么语言实现开源框架？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Python"
            },
            {
              "key": "B",
              "text": "Java"
            },
            {
              "key": "C",
              "text": "C++"
            },
            {
              "key": "D",
              "text": "C"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Java"
          },
          "explanation": ""
        },
        {
          "id": "q-03848166cd",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 34,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 34,
          "prompt": "OpenFlow 交换机的关键组成部分是（ ）",
          "options": [
            {
              "key": "A",
              "text": "安全通道"
            },
            {
              "key": "B",
              "text": "OpenFlow 表项"
            },
            {
              "key": "C",
              "text": "控制器"
            },
            {
              "key": "D",
              "text": "转发平面"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. OpenFlow 表项"
          },
          "explanation": ""
        },
        {
          "id": "q-ce8f3e1bbb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 35,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 35,
          "prompt": "仅支持 OpenFlow 转发的 OpenFlow 交换机是（ ）",
          "options": [
            {
              "key": "A",
              "text": "OpenFlow - Hybrid Switch"
            },
            {
              "key": "B",
              "text": "OpenFlow - Only Switch"
            },
            {
              "key": "C",
              "text": "普通交换机"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. OpenFlow - Only Switch"
          },
          "explanation": ""
        },
        {
          "id": "q-c2767460db",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 36,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 36,
          "prompt": "OpenFlow - Hybrid Switch 的特点是（ ）",
          "options": [
            {
              "key": "A",
              "text": "仅支持 OpenFlow 转发"
            },
            {
              "key": "B",
              "text": "仅支持普通二三层转发"
            },
            {
              "key": "C",
              "text": "既支持 OpenFlow 转发，也支持普通二三层转发"
            },
            {
              "key": "D",
              "text": "不支持任何转发"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 既支持 OpenFlow 转发，也支持普通二三层转发"
          },
          "explanation": ""
        },
        {
          "id": "q-5c31a05932",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 37,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 37,
          "prompt": "OpenFlow 组表的表项被流表项引用，提供以下哪种功能？（ ）",
          "options": [
            {
              "key": "A",
              "text": "组播报文转发"
            },
            {
              "key": "B",
              "text": "单播报文转发"
            },
            {
              "key": "C",
              "text": "广播报文转发"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 组播报文转发"
          },
          "explanation": ""
        },
        {
          "id": "q-e24a93fb4b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 38,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 38,
          "prompt": "OpenFlow 计量表（Meter Table）由一系列的 Meter 表项组成，其作用是为\n引用它的流表项提供什么功能？（ ）",
          "options": [
            {
              "key": "A",
              "text": "报文限速"
            },
            {
              "key": "B",
              "text": "报文过滤"
            },
            {
              "key": "C",
              "text": "报文加密"
            },
            {
              "key": "D",
              "text": "报文转发"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 报文限速"
          },
          "explanation": ""
        },
        {
          "id": "q-fd90c402f1",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 39,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 39,
          "prompt": "以下关于 OpenFlow 组表和计量表的说法，正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "OpenFlow 组表提供组播报文转发功能"
            },
            {
              "key": "B",
              "text": "OpenFlow 计量表提供报文限速功能"
            },
            {
              "key": "C",
              "text": "组表和计量表的表项都被流表项引用"
            },
            {
              "key": "D",
              "text": "以上都正确"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 以上都正确"
          },
          "explanation": ""
        },
        {
          "id": "q-8a5e8a7678",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 40,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 40,
          "prompt": "NFV 体系架构中，NFVI 指的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "虚拟网络功能"
            },
            {
              "key": "B",
              "text": "NFV 管理和编排"
            },
            {
              "key": "C",
              "text": "NFV 基础设施"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. NFV 基础设施"
          },
          "explanation": ""
        },
        {
          "id": "q-f8a9b6ada6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 41,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 41,
          "prompt": "虚拟网络功能在 NFV 体系架构中对应的英文缩写是（ ）",
          "options": [
            {
              "key": "A",
              "text": "NFVI"
            },
            {
              "key": "B",
              "text": "VNF"
            },
            {
              "key": "C",
              "text": "MANO"
            },
            {
              "key": "D",
              "text": "OSS/BSS"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. VNF"
          },
          "explanation": ""
        },
        {
          "id": "q-29c70ba967",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 42,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 42,
          "prompt": "NFV 管理和编排的英文缩写是（ ）",
          "options": [
            {
              "key": "A",
              "text": "NFVI"
            },
            {
              "key": "B",
              "text": "VNF"
            },
            {
              "key": "C",
              "text": "MANO"
            },
            {
              "key": "D",
              "text": "NFV-MANO"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. MANO"
          },
          "explanation": ""
        },
        {
          "id": "q-950697b463",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 43,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 43,
          "prompt": "Mininet 作为软件定义网络研发和测试平台，支持以下哪种协议？（ ）",
          "options": [
            {
              "key": "A",
              "text": "TCP/IP"
            },
            {
              "key": "B",
              "text": "OpenFlow"
            },
            {
              "key": "C",
              "text": "HTTP"
            },
            {
              "key": "D",
              "text": "SMTP"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. OpenFlow"
          },
          "explanation": ""
        },
        {
          "id": "q-13d107d320",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 44,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 44,
          "prompt": "Mininet 具备拓扑感知和 OpenFlow 感知的什么界面，用于调试或运行网络\n范围的测试？（ ）",
          "options": [
            {
              "key": "A",
              "text": "图形界面"
            },
            {
              "key": "B",
              "text": "命令行界面"
            },
            {
              "key": "C",
              "text": "网页界面"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 命令行界面"
          },
          "explanation": ""
        },
        {
          "id": "q-e1896eb771",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 45,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 45,
          "prompt": "Mininet 为用户网络创建和实验提供了可拓展的哪种语言 API？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Java"
            },
            {
              "key": "B",
              "text": "Python"
            },
            {
              "key": "C",
              "text": "C++"
            },
            {
              "key": "D",
              "text": "C"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Python"
          },
          "explanation": ""
        },
        {
          "id": "q-09bae73ea3",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 46,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 46,
          "prompt": "云基础设施机制不包括（）。",
          "options": [
            {
              "key": "A",
              "text": "虚拟网络边界"
            },
            {
              "key": "B",
              "text": "虚拟服务"
            },
            {
              "key": "C",
              "text": "云存储设备"
            },
            {
              "key": "D",
              "text": "就绪环境"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 虚拟服务"
          },
          "explanation": ""
        },
        {
          "id": "q-b91f1f2215",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 47,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 47,
          "prompt": "云计算交付模型按服务类型大致分为三类，下列（ ）不属于这三种服务\n类型。",
          "options": [
            {
              "key": "A",
              "text": "DaaS"
            },
            {
              "key": "B",
              "text": "PaaS"
            },
            {
              "key": "C",
              "text": "IaaS"
            },
            {
              "key": "D",
              "text": "SaaS"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. DaaS"
          },
          "explanation": ""
        },
        {
          "id": "q-1afcfbc2a6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 48,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 48,
          "prompt": "HDFS 最基本的存储单元被称为 block，大文件会被分割成多个 block 存储，\n一个 block 默认的大小为（ ）。",
          "options": [
            {
              "key": "A",
              "text": "32MB"
            },
            {
              "key": "B",
              "text": "64MB"
            },
            {
              "key": "C",
              "text": "128KB"
            },
            {
              "key": "D",
              "text": "269MB"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 64MB"
          },
          "explanation": ""
        },
        {
          "id": "q-6e147a2ad9",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 49,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 49,
          "prompt": "QEMU 主线程执行循环时，不包括以下哪项操作？（ ）",
          "options": [
            {
              "key": "A",
              "text": "执行 select 操作，查询文件描述符有无读写操作"
            },
            {
              "key": "B",
              "text": "执行定时器回调函数"
            },
            {
              "key": "C",
              "text": "执行文件复制操作"
            },
            {
              "key": "D",
              "text": "执行下半部（BHs）回调函数"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 执行文件复制操作"
          },
          "explanation": ""
        },
        {
          "id": "q-980b045b3e",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 50,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 50,
          "prompt": "在 QEMU 中，只讨论 KVM 执行客户机代码情况（不考虑 TCG ），如果有多个\nvCPU，意味着（ ）",
          "options": [
            {
              "key": "A",
              "text": "存在多个主线程"
            },
            {
              "key": "B",
              "text": "存在多个执行客户机代码的线程"
            },
            {
              "key": "C",
              "text": "存在多个异步 I/O 文件操作线程"
            },
            {
              "key": "D",
              "text": "以上都不对"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 存在多个执行客户机代码的线程"
          },
          "explanation": ""
        },
        {
          "id": "q-ef29f66b9f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 51,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 51,
          "prompt": "QEMU 中，主线程与执行客户机代码线程不能同时运行，是通过什么实现的？\n（ ）",
          "options": [
            {
              "key": "A",
              "text": "局部互斥锁"
            },
            {
              "key": "B",
              "text": "全局互斥锁"
            },
            {
              "key": "C",
              "text": "信号量"
            },
            {
              "key": "D",
              "text": "条件变量"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 全局互斥锁"
          },
          "explanation": ""
        },
        {
          "id": "q-2c710bb94f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 52,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 52,
          "prompt": "QEMU 内存 API 不包括对以下哪部分的仿真？（ ）",
          "options": [
            {
              "key": "A",
              "text": "常规内存"
            },
            {
              "key": "B",
              "text": "显卡显存"
            },
            {
              "key": "C",
              "text": "I/O 映射内存 (MMIO)"
            },
            {
              "key": "D",
              "text": "内存控制器"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 显卡显存"
          },
          "explanation": ""
        },
        {
          "id": "q-ea53321147",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 53,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 53,
          "prompt": "QEMU 内存模型功能中，不包括以下哪一项？（ ）",
          "options": [
            {
              "key": "A",
              "text": "跟踪目标机内存的变化"
            },
            {
              "key": "B",
              "text": "为 KVM 建立共享内存 (Coalesced Memory)"
            },
            {
              "key": "C",
              "text": "为 KVM 建立 ioeventfd regions"
            },
            {
              "key": "D",
              "text": "为 KVM 分配 CPU 资源"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 为 KVM 分配 CPU 资源"
          },
          "explanation": ""
        },
        {
          "id": "q-d29cefc53e",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 54,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 54,
          "prompt": "KVM 在（ ）被导入 Linux2.6.20 内核版本中。",
          "options": [
            {
              "key": "A",
              "text": "2007 年 2 月"
            },
            {
              "key": "B",
              "text": "2008 年 2 月"
            },
            {
              "key": "C",
              "text": "2007 年 6 月"
            },
            {
              "key": "D",
              "text": "2008 年 6 月"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 2007 年 2 月"
          },
          "explanation": ""
        },
        {
          "id": "q-c305648121",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 55,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 55,
          "prompt": "KVM 是基于（ ）架构且支持硬件虚拟化技术的 Linux 全虚拟化解决方案。",
          "options": [
            {
              "key": "A",
              "text": "ARM"
            },
            {
              "key": "B",
              "text": "x86"
            },
            {
              "key": "C",
              "text": "MIPS"
            },
            {
              "key": "D",
              "text": "PowerPC"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. x86"
          },
          "explanation": ""
        },
        {
          "id": "q-7b941ba56f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 56,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 56,
          "prompt": "KVM 包含的为处理器提供底层虚拟化的可加载核心模块，对于 Intel 处理器\n是（ ）。",
          "options": [
            {
              "key": "A",
              "text": "kvm-amd.ko"
            },
            {
              "key": "B",
              "text": "kvm-intel.ko"
            },
            {
              "key": "C",
              "text": "kvm.x86.ko"
            },
            {
              "key": "D",
              "text": "kvm.ko"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. kvm-intel.ko"
          },
          "explanation": ""
        },
        {
          "id": "q-2a3a47caf4",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 57,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 57,
          "prompt": "VMM 调度虚拟机（Guest OS）执行时，QEMU 通过以下哪种方式进入内核模\n式？（ ）",
          "options": [
            {
              "key": "A",
              "text": "函数调用"
            },
            {
              "key": "B",
              "text": "IOCTL 系统调用"
            },
            {
              "key": "C",
              "text": "中断"
            },
            {
              "key": "D",
              "text": "异常"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. IOCTL 系统调用"
          },
          "explanation": ""
        },
        {
          "id": "q-82638b9415",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 58,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 58,
          "prompt": "KVM 实现客户物理地址到宿主机物理地址转换的方式是（ ）。",
          "options": [
            {
              "key": "A",
              "text": "直接映射"
            },
            {
              "key": "B",
              "text": "虚拟页表"
            },
            {
              "key": "C",
              "text": "影子页表"
            },
            {
              "key": "D",
              "text": "页目录"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 影子页表"
          },
          "explanation": ""
        },
        {
          "id": "q-79cfbd0a65",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 59,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 59,
          "prompt": "1959 年发表《大型高速计算机中的时间共享》论文，首次提出虚拟化概念的\n英国计算机科学家是？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Marc Andreessen"
            },
            {
              "key": "B",
              "text": "埃里克・施密特"
            },
            {
              "key": "C",
              "text": "克里斯托弗・斯特雷奇"
            },
            {
              "key": "D",
              "text": "蒂姆・伯纳斯 - 李"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 克里斯托弗・斯特雷奇"
          },
          "explanation": ""
        },
        {
          "id": "q-6e635927a6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 60,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 60,
          "prompt": "世界上第一个商业化的基础设施即服务（IaaS）模型 LoudCloud 是由谁在哪\n一年创建的？（ ）",
          "options": [
            {
              "key": "A",
              "text": "克里斯托弗・斯特雷奇，1959 年"
            },
            {
              "key": "B",
              "text": "Marc Andreessen，1999 年"
            },
            {
              "key": "C",
              "text": "埃里克・施密特，2006 年"
            },
            {
              "key": "D",
              "text": "拉里・佩奇，2006 年"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Marc Andreessen，1999 年"
          },
          "explanation": ""
        },
        {
          "id": "q-357d8eeb5f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 61,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 1,
          "prompt": "以下关于特权指令的说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "特权指令用于操作和管理关键系统资源"
            },
            {
              "key": "B",
              "text": "特权指令可在任意特权级上执行"
            },
            {
              "key": "C",
              "text": "在非最高特权级上执行特权指令会引发异常"
            },
            {
              "key": "D",
              "text": "特权指令执行异常时处理器会陷入最高特权级由系统软件处理"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C",
              "D"
            ],
            "text": "A. 特权指令用于操作和管理关键系统资源；C. 在非最高特权级上执行特权指令会引发异常；D. 特权指令执行异常时处理器会陷入最高特权级由系统软件处理"
          },
          "explanation": ""
        },
        {
          "id": "q-9f993ac516",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 62,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 2,
          "prompt": "敏感指令在虚拟化环境中的操作涉及以下哪些方面？（ ）",
          "options": [
            {
              "key": "A",
              "text": "修改虚拟机的运行模式"
            },
            {
              "key": "B",
              "text": "操作物理机的状态"
            },
            {
              "key": "C",
              "text": "读写敏感的寄存器"
            },
            {
              "key": "D",
              "text": "读写敏感的内存"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 修改虚拟机的运行模式；B. 操作物理机的状态；C. 读写敏感的寄存器；D. 读写敏感的内存"
          },
          "explanation": ""
        },
        {
          "id": "q-7ee317b9a3",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 63,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 3,
          "prompt": "关于特权指令和敏感指令，下列说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "特权指令是系统中操作关键系统资源的指令"
            },
            {
              "key": "B",
              "text": "敏感指令是在虚拟化环境里操作特权资源的指令"
            },
            {
              "key": "C",
              "text": "特权指令只能在最高特权级正确执行"
            },
            {
              "key": "D",
              "text": "敏感指令包括修改虚拟机运行模式等操作指令"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 特权指令是系统中操作关键系统资源的指令；B. 敏感指令是在虚拟化环境里操作特权资源的指令；C. 特权指令只能在最高特权级正确执行；D. 敏感指令包括修改虚拟机运行模式等操作指令"
          },
          "explanation": ""
        },
        {
          "id": "q-6f3d4fe021",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 64,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 4,
          "prompt": "在 x86 体系结构中，处理器的运行级别包括（ ）",
          "options": [
            {
              "key": "A",
              "text": "Ring0"
            },
            {
              "key": "B",
              "text": "Ring1"
            },
            {
              "key": "C",
              "text": "Ring2"
            },
            {
              "key": "D",
              "text": "Ring3"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. Ring0；B. Ring1；C. Ring2；D. Ring3"
          },
          "explanation": ""
        },
        {
          "id": "q-37ebdd7b74",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 65,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 5,
          "prompt": "关于处理器虚拟化，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "处理器虚拟化是 VMM 中最重要的部分"
            },
            {
              "key": "B",
              "text": "内存虚拟化和 I/O 虚拟化依赖于处理器虚拟化"
            },
            {
              "key": "C",
              "text": "处理器虚拟化只涉及处理器，与其他虚拟化技术无关"
            },
            {
              "key": "D",
              "text": "处理器虚拟化在 x86 体系结构中有特定的运行级别"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. 处理器虚拟化是 VMM 中最重要的部分；B. 内存虚拟化和 I/O 虚拟化依赖于处理器虚拟化；D. 处理器虚拟化在 x86 体系结构中有特定的运行级别"
          },
          "explanation": ""
        },
        {
          "id": "q-f902110c47",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 66,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 6,
          "prompt": "在 Intel EPT 的页表项中，以下代表权限的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "X"
            },
            {
              "key": "B",
              "text": "R"
            },
            {
              "key": "C",
              "text": "W"
            },
            {
              "key": "D",
              "text": "SP"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. X；B. R；C. W"
          },
          "explanation": ""
        },
        {
          "id": "q-a2fc8c7470",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 67,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 7,
          "prompt": "关于 Intel EPT 中页表项含义，说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "ADDR 表示下一级页表的物理地址，若为最后一级页表，则是 GPA 对应的物 理地址"
            },
            {
              "key": "B",
              "text": "SP 表示超级页，CPU 遇到 SP = 1 时会停止继续往下查询"
            },
            {
              "key": "C",
              "text": "X = 1 表示该页不可执行"
            },
            {
              "key": "D",
              "text": "R = 1 表示该页不可读"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. ADDR 表示下一级页表的物理地址，若为最后一级页表，则是 GPA 对应的物 理地址；B. SP 表示超级页，CPU 遇到 SP = 1 时会停止继续往下查询"
          },
          "explanation": ""
        },
        {
          "id": "q-7704c53708",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 68,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 8,
          "prompt": "Intel EPT 是多级页表，其页表项包含以下哪些内容？（ ）",
          "options": [
            {
              "key": "A",
              "text": "ADDR"
            },
            {
              "key": "B",
              "text": "SP"
            },
            {
              "key": "C",
              "text": "X、R、W"
            },
            {
              "key": "D",
              "text": "GPA"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. ADDR；B. SP；C. X、R、W"
          },
          "explanation": ""
        },
        {
          "id": "q-58b0fb920f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 69,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 9,
          "prompt": "IOMMU 具有以下哪些功能？（ ）",
          "options": [
            {
              "key": "A",
              "text": "提供 DMA 地址转换"
            },
            {
              "key": "B",
              "text": "对设备读取和写入进行权限检查"
            },
            {
              "key": "C",
              "text": "将页转译缓存在 TLB 中"
            },
            {
              "key": "D",
              "text": "提供转译和保护双重功能"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 提供 DMA 地址转换；B. 对设备读取和写入进行权限检查；C. 将页转译缓存在 TLB 中；D. 提供转译和保护双重功能"
          },
          "explanation": ""
        },
        {
          "id": "q-8521d45916",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 70,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 10,
          "prompt": "关于 IOMMU，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "IOMMU 允许 VMM 直接将真实设备分配到客户机操作系统"
            },
            {
              "key": "B",
              "text": "IOMMU 避免设备模拟，降低 I/O 设备虚拟化开销"
            },
            {
              "key": "C",
              "text": "IOMMU 提供的功能需要内核模式驱动程序操作设备"
            },
            {
              "key": "D",
              "text": "IOMMU 将页转译缓存在一个特定的缓冲区中"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. IOMMU 允许 VMM 直接将真实设备分配到客户机操作系统；B. IOMMU 避免设备模拟，降低 I/O 设备虚拟化开销；D. IOMMU 将页转译缓存在一个特定的缓冲区中"
          },
          "explanation": ""
        },
        {
          "id": "q-87f43604b9",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 71,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 11,
          "prompt": "IOMMU 在 I/O 虚拟化中的作用包括（ ）",
          "options": [
            {
              "key": "A",
              "text": "实现更有效的 I/O 虚拟化"
            },
            {
              "key": "B",
              "text": "允许本机驱动程序直接配合设备"
            },
            {
              "key": "C",
              "text": "取消转译层"
            },
            {
              "key": "D",
              "text": "增加 I/O 设备虚拟化的开销"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 实现更有效的 I/O 虚拟化；B. 允许本机驱动程序直接配合设备；C. 取消转译层"
          },
          "explanation": ""
        },
        {
          "id": "q-1a61504aa0",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 72,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 12,
          "prompt": "具有 SR - IOV 功能的设备在提高系统性能方面采取了哪些技术？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Passsthrough 技术"
            },
            {
              "key": "B",
              "text": "IOMMU 技术"
            },
            {
              "key": "C",
              "text": "内存虚拟化技术"
            },
            {
              "key": "D",
              "text": "处理器虚拟化技术"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. Passsthrough 技术；B. IOMMU 技术"
          },
          "explanation": ""
        },
        {
          "id": "q-7a6716ff43",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 73,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 13,
          "prompt": "关于具有 SR - IOV 功能的设备的可扩展性优势，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "可以用单个高宽带 I/O 设备代替多个低带宽设备"
            },
            {
              "key": "B",
              "text": "利用 VF 隔离带宽，使单个物理设备像多个隔离的物理设备"
            },
            {
              "key": "C",
              "text": "能够为其他类型设备节省插槽"
            },
            {
              "key": "D",
              "text": "可以提高设备的处理速度"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 可以用单个高宽带 I/O 设备代替多个低带宽设备；B. 利用 VF 隔离带宽，使单个物理设备像多个隔离的物理设备；C. 能够为其他类型设备节省插槽"
          },
          "explanation": ""
        },
        {
          "id": "q-31ba73da85",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 74,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 14,
          "prompt": "以下属于前端驱动程序的有（ ）",
          "options": [
            {
              "key": "A",
              "text": "virtio - blk"
            },
            {
              "key": "B",
              "text": "virtio - net"
            },
            {
              "key": "C",
              "text": "virtio - pci"
            },
            {
              "key": "D",
              "text": "virtio - balloon"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. virtio - blk；B. virtio - net；C. virtio - pci；D. virtio - balloon"
          },
          "explanation": ""
        },
        {
          "id": "q-4dd363d005",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 75,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 15,
          "prompt": "关于 Virtio，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "前端驱动程序在客户机操作系统中实现"
            },
            {
              "key": "B",
              "text": "后端驱动程序在 Hypervisor 中实现"
            },
            {
              "key": "C",
              "text": "Virtio 是虚拟队列接口"
            },
            {
              "key": "D",
              "text": "数据传输使用环形缓冲区保存执行信息"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 前端驱动程序在客户机操作系统中实现；B. 后端驱动程序在 Hypervisor 中实现；C. Virtio 是虚拟队列接口；D. 数据传输使用环形缓冲区保存执行信息"
          },
          "explanation": ""
        },
        {
          "id": "q-5fdec5970d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 76,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 16,
          "prompt": "Virtio 定义的支持客户机操作系统与 Hypervisor 之间通信的两个层是（ ）",
          "options": [
            {
              "key": "A",
              "text": "virtio"
            },
            {
              "key": "B",
              "text": "transport"
            },
            {
              "key": "C",
              "text": "前端驱动层"
            },
            {
              "key": "D",
              "text": "后端驱动层"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. virtio；B. transport"
          },
          "explanation": ""
        },
        {
          "id": "q-f975d07d62",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 77,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 15,
          "prompt": "OpenFlow 流表项由以下哪些字段组成？（ ）",
          "options": [
            {
              "key": "A",
              "text": "匹配域（Match Fields）"
            },
            {
              "key": "B",
              "text": "优先级（Priority）"
            },
            {
              "key": "C",
              "text": "处理指令（Instructions）"
            },
            {
              "key": "D",
              "text": "统计数据（如 Counters）"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 匹配域（Match Fields）；B. 优先级（Priority）；C. 处理指令（Instructions）；D. 统计数据（如 Counters）"
          },
          "explanation": ""
        },
        {
          "id": "q-5553493ecc",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 78,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 16,
          "prompt": "关于 OpenFlow 流表项中的 Priority，说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "定义流表项之间的匹配顺序"
            },
            {
              "key": "B",
              "text": "优先级高的先匹配"
            },
            {
              "key": "C",
              "text": "用于统计匹配到该流表项的报文数量"
            },
            {
              "key": "D",
              "text": "是流表项的匹配规则"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. 定义流表项之间的匹配顺序；B. 优先级高的先匹配"
          },
          "explanation": ""
        },
        {
          "id": "q-ee5e0d6a0c",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 79,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 17,
          "prompt": "OpenFlow 流表项中的 Timeouts 包括以下哪些时间？（ ）",
          "options": [
            {
              "key": "A",
              "text": "Idle Time"
            },
            {
              "key": "B",
              "text": "Hard Time"
            },
            {
              "key": "C",
              "text": "Active Time"
            },
            {
              "key": "D",
              "text": "Soft Time"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. Idle Time；B. Hard Time"
          },
          "explanation": ""
        },
        {
          "id": "q-e5e71cdd2d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 80,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 18,
          "prompt": "以下属于 Controller to Switch 消息类型的有（ ）",
          "options": [
            {
              "key": "A",
              "text": "Features"
            },
            {
              "key": "B",
              "text": "Modify - State"
            },
            {
              "key": "C",
              "text": "Read - State"
            },
            {
              "key": "D",
              "text": "Flow - Mod"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. Features；B. Modify - State；C. Read - State；D. Flow - Mod"
          },
          "explanation": ""
        },
        {
          "id": "q-e6768706ab",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 81,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 19,
          "prompt": "Controller to Switch 消息中的 Flow - Mod 消息可用于（ ）",
          "options": [
            {
              "key": "A",
              "text": "添加 OpenFlow 交换机的流表信息"
            },
            {
              "key": "B",
              "text": "删除 OpenFlow 交换机的流表信息"
            },
            {
              "key": "C",
              "text": "修改 OpenFlow 交换机的流表信息"
            },
            {
              "key": "D",
              "text": "收集交换机的统计信息"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 添加 OpenFlow 交换机的流表信息；B. 删除 OpenFlow 交换机的流表信息；C. 修改 OpenFlow 交换机的流表信息"
          },
          "explanation": ""
        },
        {
          "id": "q-a31930fd53",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 82,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 20,
          "prompt": "Controller to Switch 消息中，用于收集交换机信息或管理交换机状态的有\n（ ）",
          "options": [
            {
              "key": "A",
              "text": "Features"
            },
            {
              "key": "B",
              "text": "Modify - State"
            },
            {
              "key": "C",
              "text": "Read - State"
            },
            {
              "key": "D",
              "text": "Packet - out"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. Features；B. Modify - State；C. Read - State"
          },
          "explanation": ""
        },
        {
          "id": "q-ac01da740a",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 83,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 21,
          "prompt": "以下属于异步（Asynchronous）消息类型的有（ ）",
          "options": [
            {
              "key": "A",
              "text": "Packet - in"
            },
            {
              "key": "B",
              "text": "Flow - Removed"
            },
            {
              "key": "C",
              "text": "Port - Status"
            },
            {
              "key": "D",
              "text": "Features"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. Packet - in；B. Flow - Removed；C. Port - Status"
          },
          "explanation": ""
        },
        {
          "id": "q-0688b45a38",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 84,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 22,
          "prompt": "关于 Packet - in 消息，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "用于转移报文的控制权到控制器"
            },
            {
              "key": "B",
              "text": "匹配流表项后转发到 Controller 端口的报文通过该消息送到 Controller"
            },
            {
              "key": "C",
              "text": "Table Miss 后转发到 Controller 端口的报文通过该消息送到 Controller"
            },
            {
              "key": "D",
              "text": "用于通知控制器将某个流表项从流表移除"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 用于转移报文的控制权到控制器；B. 匹配流表项后转发到 Controller 端口的报文通过该消息送到 Controller；C. Table Miss 后转发到 Controller 端口的报文通过该消息送到 Controller"
          },
          "explanation": ""
        },
        {
          "id": "q-c3f99ffdd6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 85,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 23,
          "prompt": "异步消息中的 Flow - Removed 消息在以下哪些情况下产生？（ ）",
          "options": [
            {
              "key": "A",
              "text": "控制器发送删除流表项消息后"
            },
            {
              "key": "B",
              "text": "流表项的定时器超时后"
            },
            {
              "key": "C",
              "text": "端口状态改变时"
            },
            {
              "key": "D",
              "text": "有新的报文进入交换机时"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B"
            ],
            "text": "A. 控制器发送删除流表项消息后；B. 流表项的定时器超时后"
          },
          "explanation": ""
        },
        {
          "id": "q-dbf79e4303",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 86,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 24,
          "prompt": "SDN 的核心思想包括以下哪些内容？（ ）",
          "options": [
            {
              "key": "A",
              "text": "转发与控制分离"
            },
            {
              "key": "B",
              "text": "控制面集中"
            },
            {
              "key": "C",
              "text": "网络可编程化"
            },
            {
              "key": "D",
              "text": "将网络功能从专用设备移到通用设备上"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 转发与控制分离；B. 控制面集中；C. 网络可编程化"
          },
          "explanation": ""
        },
        {
          "id": "q-a8b3d49695",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 87,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 25,
          "prompt": "NFV 的初始应用场景涉及以下哪些设备或服务？（ ）",
          "options": [
            {
              "key": "A",
              "text": "路由器"
            },
            {
              "key": "B",
              "text": "防火墙"
            },
            {
              "key": "C",
              "text": "云资源调度"
            },
            {
              "key": "D",
              "text": "广域网加速器"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. 路由器；B. 防火墙；D. 广域网加速器"
          },
          "explanation": ""
        },
        {
          "id": "q-a825ee564b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 88,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 26,
          "prompt": "关于 NFV 和 SDN，以下说法正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "SDN 的通用协议是 OpenFlow，NFV 尚没有通用协议"
            },
            {
              "key": "B",
              "text": "SDN 的标准组织是 ONF（Open Networking Forun）组织，NFV 的标准组织是 ETSI NFV 工作组"
            },
            {
              "key": "C",
              "text": "SDN 针对场景为校园网、数据中心、云，NFV 针对场景为运营商网络"
            },
            {
              "key": "D",
              "text": "SDN 针对设备为专用服务器和交换机，NFV 针对设备为商用服务器和交换机"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. SDN 的通用协议是 OpenFlow，NFV 尚没有通用协议；B. SDN 的标准组织是 ONF（Open Networking Forun）组织，NFV 的标准组织是 ETSI NFV 工作组；C. SDN 针对场景为校园网、数据中心、云，NFV 针对场景为运营商网络"
          },
          "explanation": ""
        },
        {
          "id": "q-9a7cd541e5",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 89,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 27,
          "prompt": "Open vSwitch（OVS）的主要特性包括以下哪些？（ ）",
          "options": [
            {
              "key": "A",
              "text": "虚拟机间互联的可视性"
            },
            {
              "key": "B",
              "text": "支持 trunking 的标准 802.1Q VLAN 模块"
            },
            {
              "key": "C",
              "text": "细粒度的 QoS"
            },
            {
              "key": "D",
              "text": "负载均衡支持 OpenFlow"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 虚拟机间互联的可视性；B. 支持 trunking 的标准 802.1Q VLAN 模块；C. 细粒度的 QoS；D. 负载均衡支持 OpenFlow"
          },
          "explanation": ""
        },
        {
          "id": "q-eaa672ee77",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 90,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 28,
          "prompt": "Open vSwitch 由哪家公司开发，遵循什么开源代码版权协议？（ ）",
          "options": [
            {
              "key": "A",
              "text": "由 Nicira Networks 开发"
            },
            {
              "key": "B",
              "text": "由 Cisco 开发"
            },
            {
              "key": "C",
              "text": "遵循 Apache 2.0 开源代码版权协议"
            },
            {
              "key": "D",
              "text": "遵循 GPL 开源代码版权协议"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C"
            ],
            "text": "A. 由 Nicira Networks 开发；C. 遵循 Apache 2.0 开源代码版权协议"
          },
          "explanation": ""
        },
        {
          "id": "q-cd2ab73609",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 91,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 29,
          "prompt": "以下关于 Open vSwitch 的说法，正确的是（ ）",
          "options": [
            {
              "key": "A",
              "text": "是一个高质量、多层的虚拟交换软件"
            },
            {
              "key": "B",
              "text": "目的是通过编程扩展支持大规模网络自动化"
            },
            {
              "key": "C",
              "text": "可用于生产环境，支持跨物理服务器分布式管理等功能"
            },
            {
              "key": "D",
              "text": "实现了和大多数商业闭源交换机功能类似的功能"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. 是一个高质量、多层的虚拟交换软件；B. 目的是通过编程扩展支持大规模网络自动化；C. 可用于生产环境，支持跨物理服务器分布式管理等功能；D. 实现了和大多数商业闭源交换机功能类似的功能"
          },
          "explanation": ""
        },
        {
          "id": "q-cea0a038fe",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 92,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 30,
          "prompt": "QEMU 将客户机代码转化成宿主机指定架构代码的过程分为哪两个部分？\n（ ）",
          "options": [
            {
              "key": "A",
              "text": "将客户机代码转化成汇编代码"
            },
            {
              "key": "B",
              "text": "将客户机代码转化成 TCG 中间代码"
            },
            {
              "key": "C",
              "text": "将中间代码转化成宿主机代码"
            },
            {
              "key": "D",
              "text": "将客户机代码直接转化成宿主机代码"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "C"
            ],
            "text": "B. 将客户机代码转化成 TCG 中间代码；C. 将中间代码转化成宿主机代码"
          },
          "explanation": ""
        },
        {
          "id": "q-e7111e9240",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 123,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 1,
          "prompt": "云计算体系架构中，资源池包含计算资源池、存储资源池、________、数据资\n源池和软件资源池。",
          "options": [],
          "answer": {
            "blanks": [
              "网络资源池"
            ],
            "text": "网络资源池"
          },
          "explanation": ""
        },
        {
          "id": "q-22476d35bc",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 124,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 2,
          "prompt": "在云计算管理中间件的资源管理部分，包含负载均衡、故障检测、________、\n监视统计等功能。",
          "options": [],
          "answer": {
            "blanks": [
              "故障恢复"
            ],
            "text": "故障恢复"
          },
          "explanation": ""
        },
        {
          "id": "q-b4f81b6c75",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 125,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 3,
          "prompt": "云计算体系架构的 SOA 构建层包含服务接口、服务注册、服务查找、________、\n服务工作流。",
          "options": [],
          "answer": {
            "blanks": [
              "服务访问"
            ],
            "text": "服务访问"
          },
          "explanation": ""
        },
        {
          "id": "q-a311cc9db2",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 126,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 4,
          "prompt": "在 Intel VT-x 中，虚拟机监控器运行在________模式。",
          "options": [],
          "answer": {
            "blanks": [
              "VMX root operation（或根操作模式）"
            ],
            "text": "VMX root operation（或根操作模式）"
          },
          "explanation": ""
        },
        {
          "id": "q-034c13dc33",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 127,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 5,
          "prompt": "客户机在 Intel VT-x 中运行所处的模式是________。",
          "options": [],
          "answer": {
            "blanks": [
              "VMX Non-Root Operation（或非根操作模式）"
            ],
            "text": "VMX Non-Root Operation（或非根操作模式）"
          },
          "explanation": ""
        },
        {
          "id": "q-b39f3d747e",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 128,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 6,
          "prompt": "IOMMU 位于________和主机之间，可将设备请求的地址转换为系统内存地址。",
          "options": [],
          "answer": {
            "blanks": [
              "外围设备"
            ],
            "text": "外围设备"
          },
          "explanation": ""
        },
        {
          "id": "q-b1196e2406",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 129,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 7,
          "prompt": "SDN 从分类上可分为控制与转发分离（超广义）和________（广义）。",
          "options": [],
          "answer": {
            "blanks": [
              "管理与控制分离"
            ],
            "text": "管理与控制分离"
          },
          "explanation": ""
        },
        {
          "id": "q-6af90d18e8",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 130,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 8,
          "prompt": "SDN 的三个主要特征是转控分离、集中控制和________。",
          "options": [],
          "answer": {
            "blanks": [
              "开放接口"
            ],
            "text": "开放接口"
          },
          "explanation": ""
        },
        {
          "id": "q-4b4bb80763",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 131,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 9,
          "prompt": "Mininet 架构按 datapath 的运行权限不同，分为________和________两种。",
          "options": [],
          "answer": {
            "blanks": [
              "kernel datapath",
              "userspace datapath"
            ],
            "text": "kernel datapath；userspace datapath"
          },
          "explanation": ""
        },
        {
          "id": "q-c1c39e4a8f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 132,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 10,
          "prompt": "在 Mininet 的 kernel datapath 架构中，存在________和________两种命\n名空间。",
          "options": [],
          "answer": {
            "blanks": [
              "root 命名空间",
              "host 命名空间"
            ],
            "text": "root 命名空间；host 命名空间"
          },
          "explanation": ""
        },
        {
          "id": "q-9a0832a37d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 133,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 11,
          "prompt": "容器技术通过________实现资源隔离，通过________实现资源控制。",
          "options": [],
          "answer": {
            "blanks": [
              "Namespace",
              "Cgroups"
            ],
            "text": "Namespace；Cgroups"
          },
          "explanation": ""
        },
        {
          "id": "q-34a3cda938",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 134,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 12,
          "prompt": "云计算涵盖了计算机系统结构、计算机网络、并行计算、分布式计算和\n________等各种技术。",
          "options": [],
          "answer": {
            "blanks": [
              "网格计算"
            ],
            "text": "网格计算"
          },
          "explanation": ""
        },
        {
          "id": "q-28dc555876",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 135,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 13,
          "prompt": "容器即________（Container as a Service，CaaS），也称为________，是以\n容器为资源分割和调度的基本单位。",
          "options": [],
          "answer": {
            "blanks": [
              "服务、容器云"
            ],
            "text": "服务、容器云"
          },
          "explanation": ""
        },
        {
          "id": "q-2347139dba",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 136,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 14,
          "prompt": "部署云计算服务的模式有三大类：公有云、私有云和________。",
          "options": [],
          "answer": {
            "blanks": [
              "混合云"
            ],
            "text": "混合云"
          },
          "explanation": ""
        },
        {
          "id": "q-30442a6f73",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 137,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 15,
          "prompt": "应用虚拟化通常包含两层含义，一是应用软件的虚拟化，二是________。",
          "options": [],
          "answer": {
            "blanks": [
              "桌面的虚拟化"
            ],
            "text": "桌面的虚拟化"
          },
          "explanation": ""
        },
        {
          "id": "q-a7679ac8ab",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 138,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 16,
          "prompt": "虚拟化通常分为________、________、存储虚拟化 和应用虚拟化 4 类。",
          "options": [],
          "answer": {
            "blanks": [
              "服务器虚拟化、网络虚拟化"
            ],
            "text": "服务器虚拟化、网络虚拟化"
          },
          "explanation": ""
        },
        {
          "id": "q-a199ab2c68",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 139,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 17,
          "prompt": "安全凭证管理：包括密码、访问密钥、________、________，在通过UI 访问\n或者 API 以及命令访问时，会采用不同的凭证方式。",
          "options": [],
          "answer": {
            "blanks": [
              "密钥对、X.509 证书"
            ],
            "text": "密钥对、X.509 证书"
          },
          "explanation": ""
        },
        {
          "id": "q-781b750683",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 140,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 18,
          "prompt": "最常用的远程管理机制有 VPN、________、________。",
          "options": [],
          "answer": {
            "blanks": [
              "远程桌面、Web 控制台 UI"
            ],
            "text": "远程桌面、Web 控制台 UI"
          },
          "explanation": ""
        },
        {
          "id": "q-e45b238186",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 141,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 19,
          "prompt": "________对保证基于虚拟技术的公有云的完整性和可用性是最重要也是最\n关键的。",
          "options": [],
          "answer": {
            "blanks": [
              "安全策略和机制"
            ],
            "text": "安全策略和机制"
          },
          "explanation": ""
        },
        {
          "id": "q-ef025a4475",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 142,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 20,
          "prompt": "分布式文件系统实现方法是________、________。",
          "options": [],
          "answer": {
            "blanks": [
              "共享文件系统、共享磁盘"
            ],
            "text": "共享文件系统、共享磁盘"
          },
          "explanation": ""
        },
        {
          "id": "q-686028174d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 143,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 21,
          "prompt": "本地文件系统含有________、________文件内容、目录内容 4 类信息。",
          "options": [],
          "answer": {
            "blanks": [
              "超级块、inode"
            ],
            "text": "超级块、inode"
          },
          "explanation": ""
        },
        {
          "id": "q-b4ad49ffc1",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 144,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 22,
          "prompt": "在分布式文件系统的架构中，负责命名空间维护的是________。",
          "options": [],
          "answer": {
            "blanks": [
              "主控服务器"
            ],
            "text": "主控服务器"
          },
          "explanation": ""
        },
        {
          "id": "q-4ce773e5fb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 145,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 23,
          "prompt": "数据服务器负责：数据本地存储、________、________。",
          "options": [],
          "answer": {
            "blanks": [
              "状态维护、副本管理"
            ],
            "text": "状态维护、副本管理"
          },
          "explanation": ""
        },
        {
          "id": "q-667fcb386a",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 146,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 24,
          "prompt": "在云计算中维持足够性能表现的关键就是一方面扩大运行的服务器数量，另\n一方面________和________。",
          "options": [],
          "answer": {
            "blanks": [
              "分割数据、工作负载"
            ],
            "text": "分割数据、工作负载"
          },
          "explanation": ""
        },
        {
          "id": "q-f9dfc1a51f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 147,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 25,
          "prompt": "主机操作系统所发出的指令分为两种类型：__________和____________。",
          "options": [],
          "answer": {
            "blanks": [
              "特权指令、普通指令"
            ],
            "text": "特权指令、普通指令"
          },
          "explanation": ""
        },
        {
          "id": "q-ef2b7afc8a",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 148,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 26,
          "prompt": "_________是为用户提供随时随地可获取的 IT 访问，是一种商业模式或者访\n问模式，而________是一种技术手段，是云计算实现的重要手段之一。",
          "options": [],
          "answer": {
            "blanks": [
              "云计算、虚拟化"
            ],
            "text": "云计算、虚拟化"
          },
          "explanation": ""
        },
        {
          "id": "q-43e8dedde6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 149,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 27,
          "prompt": "内存复用的技术主要包括：_________、_________、_________。一般情况下，\n这三种技术需要综合应用，同时生效。",
          "options": [],
          "answer": {
            "blanks": [
              "内存气泡、内存置换、内存共享"
            ],
            "text": "内存气泡、内存置换、内存共享"
          },
          "explanation": ""
        },
        {
          "id": "q-92d84ab249",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 150,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 28,
          "prompt": "________和_________一起才能构成一个完整的虚拟化技术。",
          "options": [],
          "answer": {
            "blanks": [
              "KVM 核心模块、QEMU"
            ],
            "text": "KVM 核心模块、QEMU"
          },
          "explanation": ""
        },
        {
          "id": "q-1fb4525e64",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 151,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 29,
          "prompt": "GFS 数据块大小为 ________。",
          "options": [],
          "answer": {
            "blanks": [
              "64MB"
            ],
            "text": "64MB"
          },
          "explanation": ""
        },
        {
          "id": "q-26020646ca",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 93,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 1,
          "prompt": "数据丢失是常见的云计算安全问题之一。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-4e72163709",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 94,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 2,
          "prompt": "云计算安全领域中，主要技术只有数据加密和用户身份认证。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-8652472dc7",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 95,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 3,
          "prompt": "网络病毒不属于云计算常见的安全问题。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-43386b3818",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 96,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 4,
          "prompt": "同步（Symmetric）消息是单向的，仅由控制器向 OpenFlow 交换机发送。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-fddf05341d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 97,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 5,
          "prompt": "当连接启动时，只有控制器会发送 Hello 消息进行交互。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-d333ddd4b8",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 98,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 6,
          "prompt": "Echo 消息仅用于验证控制器到交换机方向连接的存活。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-bda923ced6",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 99,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 7,
          "prompt": "NFV 通过设备合并、借助 IT 规模化经济，能减小设备成本和能源开销。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-2bac2eb938",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 100,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 8,
          "prompt": "NFV 不能缩短网络运营的业务创新周期，也无法提升投放市场的速度。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-6a0bb602ad",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 101,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 9,
          "prompt": "NFV 不允许网络设备多版本、多租户共存，单一平台不能为不同应用、用户、\n租户提供服务。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-c22d3a0f19",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 102,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 10,
          "prompt": "云计算是基于互联网的相关服务的增加、使用和交付模式。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-5bb25d89d7",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 103,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 11,
          "prompt": "云计算是一种融合产物。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-8b1855bdf3",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 104,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 12,
          "prompt": "云计算不仅大大降低了计算的成本，而且也推动了互联网技术的发展。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-851eb2d37f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 105,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 13,
          "prompt": "云计算是一种按使用时间付费的模式。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-f7143bf4eb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 106,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 14,
          "prompt": "IaaS、PaaS、SaaS 三个交付模型之间有必然的联系，只是三种不同的服务模\n式，都是基于互联网。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-459b22b919",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 107,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 15,
          "prompt": "在云计算中相同类型不同型号的硬件可以组成一个资源池。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-d48b67ecfd",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 108,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 16,
          "prompt": "KVM(Kernel-based Virtual Machine）虚拟机通过格式转换后可以运行在其\n他虚拟化平台上。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-721c5a7d5b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 109,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 17,
          "prompt": "云计算是互联网和计算技术发展的产物，因此云计算一定离不开网络。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-7b7a4b3b97",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 110,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 18,
          "prompt": "计算虚拟化通过不同的角度会产生不同的分类，可以分为Ⅰ型和Ⅱ型虚拟化，\n也可以分为全虚拟化和半虚拟化。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-438811d546",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 111,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 19,
          "prompt": "开源虚拟化技术都为Ⅰ型虚拟化，闭源的虚拟化技术都为Ⅱ型虚拟化。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-da1a902c20",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 112,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 20,
          "prompt": "SSD 盘属于机械类硬盘，具有读写速度快、功耗小、重量轻等优点，但其有\n使用寿命的限制。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-cebbd0a009",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 113,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 21,
          "prompt": "使用虚拟化技术可以将一台物理服务器虚拟成多台虚拟机，从而提升了物理\n服务器的硬件性能。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-070fabdbd7",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 114,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 22,
          "prompt": "在云计算中，网络可分为虚拟网络和物理网络两部分。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-1652d2e753",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 115,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 23,
          "prompt": "CPU 虚拟化技术可以分为全虚拟化、半虚拟化、软件虚拟化和硬件辅助虚拟\n化。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-e32861877e",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 116,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 24,
          "prompt": "存储虚拟化技术可以提高存储的利用率，为多台虚拟机提供存储资源（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-c2d1cb2634",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 117,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 25,
          "prompt": "云计算可以模拟核爆炸、预测气候变化和市场发展趋势。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-45e28b24ae",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 118,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 26,
          "prompt": "虚拟服务器是一种模拟物理服务器的虚拟化软件。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-73a4e05c28",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 119,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 27,
          "prompt": "系统虚拟化的核心思想是通过一台虚拟机映射出一台或多台物理机。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-e9ee2173fc",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 120,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 28,
          "prompt": "云计算是一种具体的技术。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-f6b1abaca3",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 121,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 29,
          "prompt": "云用户在云服务提供商存储数据时存在数据滥用、存储位置隔离、灾难恢复、\n数据审计等安全风险。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-afb9c5b61f",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 122,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 30,
          "prompt": "SDN 与 NFV 两者不能相互独立存在。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-24dec515af",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 152,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 1,
          "prompt": "简述云计算的定义。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-b312efa28d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 153,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 2,
          "prompt": "请阐述云计算与传统计算机和网络技术的关系。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-c0e828104b",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 154,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 3,
          "prompt": "请简述云计算的四种部署模型及其特点。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-586e1fe451",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 155,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 4,
          "prompt": "请简述云计算的三种服务模式（IaaS、PaaS、SaaS）及其主要区别。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-03d27d8554",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 156,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 5,
          "prompt": "简述虚拟化技术在云计算中的作用。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-f7bb63b966",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 157,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 6,
          "prompt": "简述云计算与虚拟化的关系。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-65530d4ad0",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 158,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 7,
          "prompt": "请简述 Intel VT 和 AMD SVM 在硬件虚拟化技术方面的主要差异。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-45707c1e37",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 159,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 8,
          "prompt": "简述虚拟机的三个典型特征及其含义。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-ac158161d8",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 160,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 9,
          "prompt": "简述 vCPU 的基本操作及其含义。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-c97611f8bf",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 161,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 10,
          "prompt": "描述云计算的三种部署模式以及各自的优缺点。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-1d6feba69d",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 162,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 11,
          "prompt": "什么是虚拟化？为什么要使用虚拟化？",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-90749747b0",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 163,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 12,
          "prompt": "简述该如何实现云安全？",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-ebfa241d75",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 164,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 13,
          "prompt": "什么是 I 型虚拟化？什么是 II 型虚拟化？它们各有什么优缺点？",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-32d9008a51",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 165,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 14,
          "prompt": "全虚拟化与半虚拟化有何区别？各有什么优缺点？",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-fe1d7d9b62",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 166,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 1,
          "prompt": "论述云计算与虚拟化的相互作用和促进关系，并结合实际案例说明两者如何协\n同推动信息技术发展。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        },
        {
          "id": "q-aff49bb0fb",
          "subject": "云计算",
          "source": "题库(1).pdf",
          "order": 167,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 2,
          "prompt": "分析 SDN（软件定义网络）与 NFV（网络功能虚拟化）的技术特点及两者在网\n络架构转型中的协同作用。",
          "options": [],
          "answer": {
            "text": ""
          },
          "explanation": ""
        }
      ]
    },
    {
      "id": "subject-0fea7c47",
      "name": "数据结构",
      "sources": [
        "数据结构与算法(java)-- 复习题-1.docx",
        "数据结构与算法(java)-- 复习题-2.docx",
        "数据结构与算法(java)-- 复习题-3.txt",
        "数据结构与算法(java)-- 复习题-4.docx"
      ],
      "counts": {
        "single": 0,
        "multiple": 0,
        "blank": 54,
        "judge": 60,
        "short": 9,
        "comprehensive": 4,
        "programming": 0
      },
      "total": 127,
      "questions": [
        {
          "id": "q-9f18d86679",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 61,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 1,
          "prompt": "数据存储结构的基本形式有两种：顺序存储结构和        。",
          "options": [],
          "answer": {
            "blanks": [
              "链式存储结构"
            ],
            "text": "链式存储结构"
          },
          "explanation": ""
        },
        {
          "id": "q-c5815a4a0b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 62,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 2,
          "prompt": "顺序表中逻辑上相邻的元素的物理位置        。",
          "options": [],
          "answer": {
            "blanks": [
              "相邻"
            ],
            "text": "相邻"
          },
          "explanation": ""
        },
        {
          "id": "q-fcc817a339",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 63,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 3,
          "prompt": "当对一个线性表频繁进行存取操作，而很少进行插入和删除操作时，采用顺序存储结构为宜。相反，当经常进行的是插入和删除操作时，则采用        存储结构为宜。",
          "options": [],
          "answer": {
            "blanks": [
              "链式"
            ],
            "text": "链式"
          },
          "explanation": ""
        },
        {
          "id": "q-f0ad58a5f5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 64,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 4,
          "prompt": "在双向链表中，每个结点含有两个指针域，一个指向直接前驱结点，   另一个指向直接        结点。",
          "options": [],
          "answer": {
            "blanks": [
              "后继"
            ],
            "text": "后继"
          },
          "explanation": ""
        },
        {
          "id": "q-6377fe7ba1",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 65,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 5,
          "prompt": "区分循环队列的满与空，只有两种方法，它们是        和设标记。",
          "options": [],
          "answer": {
            "blanks": [
              "牺牲一个存储单元"
            ],
            "text": "牺牲一个存储单元"
          },
          "explanation": ""
        },
        {
          "id": "q-91e3eceffb",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 66,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 6,
          "prompt": "栈是操作受限/限定仅在表尾进行插入和删除操作的线性表，其运算遵循        的原则。",
          "options": [],
          "answer": {
            "blanks": [
              "后进先出"
            ],
            "text": "后进先出"
          },
          "explanation": ""
        },
        {
          "id": "q-15fc0335f0",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 67,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 7,
          "prompt": "设T和P是两个给定的串，在T中寻找等于P的子串的过程称为        ，又称p为模式串。",
          "options": [],
          "answer": {
            "blanks": [
              "模式匹配"
            ],
            "text": "模式匹配"
          },
          "explanation": ""
        },
        {
          "id": "q-371f2034fc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 68,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 8,
          "prompt": "空格串是指由空格字符所组成的字符串，其长度等于        。",
          "options": [],
          "answer": {
            "blanks": [
              "空格个数"
            ],
            "text": "空格个数"
          },
          "explanation": ""
        },
        {
          "id": "q-52ee2e59fc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 69,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 9,
          "prompt": "广义表(a,(a,b),d,e,((I,j),k))的深度是        。",
          "options": [],
          "answer": {
            "blanks": [
              "3"
            ],
            "text": "3"
          },
          "explanation": ""
        },
        {
          "id": "q-6ba77ddd63",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 70,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 10,
          "prompt": "在一个连通图中存在着        个连通分量。",
          "options": [],
          "answer": {
            "blanks": [
              "1"
            ],
            "text": "1"
          },
          "explanation": ""
        },
        {
          "id": "q-a9a5daa7dc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 71,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 11,
          "prompt": "已知先序序列或后序序列和        序列，可以唯一确定一颗二叉树。",
          "options": [],
          "answer": {
            "blanks": [
              "中序"
            ],
            "text": "中序"
          },
          "explanation": ""
        },
        {
          "id": "q-a275964ddd",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 72,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 12,
          "prompt": "图的        优先搜索遍历算法是一种递归算法，图的广度优先搜索遍历算法需要使用队列。",
          "options": [],
          "answer": {
            "blanks": [
              "深度"
            ],
            "text": "深度"
          },
          "explanation": ""
        },
        {
          "id": "q-4b6f6f99e7",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 73,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 13,
          "prompt": "冒泡排序是基于交换两个逆序元素的排序方法，冒泡排序算法的最坏时间复杂性是        。",
          "options": [],
          "answer": {
            "blanks": [
              "O(n2 )"
            ],
            "text": "O(n2 )"
          },
          "explanation": ""
        },
        {
          "id": "q-4d55614cb5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 74,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 14,
          "prompt": "数据的逻辑结构是从逻辑关系上描述数据，它与数据的         无关，是独立于计算机的。",
          "options": [],
          "answer": {
            "blanks": [
              "存储结构/物理结构"
            ],
            "text": "存储结构/物理结构"
          },
          "explanation": ""
        },
        {
          "id": "q-252812c88b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 75,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 15,
          "prompt": "希尔排序的增量序列必须是        。",
          "options": [],
          "answer": {
            "blanks": [
              "递减的"
            ],
            "text": "递减的"
          },
          "explanation": ""
        },
        {
          "id": "q-57a1cbca38",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 76,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 16,
          "prompt": "抽象数据类型的定义通常采用简洁、严谨的文字描述，一般包括数据对象、              和操作集合。",
          "options": [],
          "answer": {
            "blanks": [
              "数据关系"
            ],
            "text": "数据关系"
          },
          "explanation": ""
        },
        {
          "id": "q-4f3c71e337",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 77,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 17,
          "prompt": "栈的主要特点是        。",
          "options": [],
          "answer": {
            "blanks": [
              "后进先出",
              "先进后出"
            ],
            "text": "后进先出;先进后出"
          },
          "explanation": ""
        },
        {
          "id": "q-6e2142f4ab",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 78,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 18,
          "prompt": "在计算机的存储器中表示时,逻辑上相邻的两个元素对应的物理地址也是相邻的这种存储结构称为        。",
          "options": [],
          "answer": {
            "blanks": [
              "顺序存储结构"
            ],
            "text": "顺序存储结构"
          },
          "explanation": ""
        },
        {
          "id": "q-ae04b8f6f2",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 79,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 19,
          "prompt": "查找表按照操作方式分为静态查找表和        两类。",
          "options": [],
          "answer": {
            "blanks": [
              "动态查找表"
            ],
            "text": "动态查找表"
          },
          "explanation": ""
        },
        {
          "id": "q-9c4063d7b0",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 80,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 20,
          "prompt": "若线性表的运算需要频繁地做插入和删除操作，宜采用        作为存储结构。",
          "options": [],
          "answer": {
            "blanks": [
              "链表"
            ],
            "text": "链表"
          },
          "explanation": ""
        },
        {
          "id": "q-d688a0ff0b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 81,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 21,
          "prompt": "一个串中任意连续的字符组成的子序列称为该串的        。",
          "options": [],
          "answer": {
            "blanks": [
              "子串"
            ],
            "text": "子串"
          },
          "explanation": ""
        },
        {
          "id": "q-e25f199b69",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 82,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 22,
          "prompt": "高度为 5 的二叉树最少有        个结点。",
          "options": [],
          "answer": {
            "blanks": [
              "5"
            ],
            "text": "5"
          },
          "explanation": ""
        },
        {
          "id": "q-f85c272c37",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 83,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 23,
          "prompt": "一个有 n 个顶点的无向图最多有        条边。",
          "options": [],
          "answer": {
            "blanks": [
              "n(n-1)/2"
            ],
            "text": "n(n-1)/2"
          },
          "explanation": ""
        },
        {
          "id": "q-c1ca61f251",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 84,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 24,
          "prompt": "表示图的两种存储结构为        和邻接表。",
          "options": [],
          "answer": {
            "blanks": [
              "邻接矩阵"
            ],
            "text": "邻接矩阵"
          },
          "explanation": ""
        },
        {
          "id": "q-131964ee72",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 85,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 25,
          "prompt": "Prim算法适用于求        的最小生成数。",
          "options": [],
          "answer": {
            "blanks": [
              "稠密网"
            ],
            "text": "稠密网"
          },
          "explanation": ""
        },
        {
          "id": "q-ccb26b558e",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 86,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 26,
          "prompt": "衡量查找算法性能好坏的主要指标是        。",
          "options": [],
          "answer": {
            "blanks": [
              "比较次数/平均查找长度"
            ],
            "text": "比较次数/平均查找长度"
          },
          "explanation": ""
        },
        {
          "id": "q-a5753e7d69",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 87,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 27,
          "prompt": "数据的逻辑结构分为集合、线性结构、        和图形结构4种基本类型。",
          "options": [],
          "answer": {
            "blanks": [
              "树形结构"
            ],
            "text": "树形结构"
          },
          "explanation": ""
        },
        {
          "id": "q-f9d65bdf47",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 88,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 28,
          "prompt": "在线性表中，除了开始元素外，每个元素        。",
          "options": [],
          "answer": {
            "blanks": [
              "只有唯一的前驱元素"
            ],
            "text": "只有唯一的前驱元素"
          },
          "explanation": ""
        },
        {
          "id": "q-87fc8a0bc4",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 89,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 29,
          "prompt": "顺序表是线性表的一种顺序存储结构，采用        存放线性表中的元素及其关系。",
          "options": [],
          "answer": {
            "blanks": [
              "一维数组"
            ],
            "text": "一维数组"
          },
          "explanation": ""
        },
        {
          "id": "q-bb62948add",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 90,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 30,
          "prompt": "在栈结构中，允许插入和删除的一端称为        。",
          "options": [],
          "answer": {
            "blanks": [
              "栈顶"
            ],
            "text": "栈顶"
          },
          "explanation": ""
        },
        {
          "id": "q-502a7e98f8",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 91,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 31,
          "prompt": "在程序设计时，如果需要临时保存一组数据，而先保存的数据要先处理，则应该将这组数据保存在         中。",
          "options": [],
          "answer": {
            "blanks": [
              "队列"
            ],
            "text": "队列"
          },
          "explanation": ""
        },
        {
          "id": "q-4291700753",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 92,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 32,
          "prompt": "队列通常有顺序队和         两种存储结构。",
          "options": [],
          "answer": {
            "blanks": [
              "链队"
            ],
            "text": "链队"
          },
          "explanation": ""
        },
        {
          "id": "q-7d7f2478d9",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 93,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 33,
          "prompt": "在队列中新插入的元素只能插入到          。",
          "options": [],
          "answer": {
            "blanks": [
              "队尾"
            ],
            "text": "队尾"
          },
          "explanation": ""
        },
        {
          "id": "q-338f561ec5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 94,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 34,
          "prompt": "循环队列的优点是",
          "options": [],
          "answer": {
            "blanks": [
              "解决了“假溢出”问题"
            ],
            "text": "解决了“假溢出”问题"
          },
          "explanation": ""
        },
        {
          "id": "q-790b0488e0",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 95,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 35,
          "prompt": "在队列的顺序存储结构中，避免队列中出现假溢出现象的办法是把队列的存储空间构成一个        。",
          "options": [],
          "answer": {
            "blanks": [
              "循环结构"
            ],
            "text": "循环结构"
          },
          "explanation": ""
        },
        {
          "id": "q-3a16f52a85",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 96,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 36,
          "prompt": "由二叉树的后序遍历序列和中序遍历序列，        唯一确定该二叉树。",
          "options": [],
          "answer": {
            "blanks": [
              "能够"
            ],
            "text": "能够"
          },
          "explanation": ""
        },
        {
          "id": "q-70c882b292",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 97,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 37,
          "prompt": "由二叉树的先序遍历序列和后序遍历序列，        唯一确定该二叉树。",
          "options": [],
          "answer": {
            "blanks": [
              "不能"
            ],
            "text": "不能"
          },
          "explanation": ""
        },
        {
          "id": "q-c1c2181c54",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 98,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 38,
          "prompt": "一棵二叉树中不存在度        的节点。",
          "options": [],
          "answer": {
            "blanks": [
              "大于2"
            ],
            "text": "大于2"
          },
          "explanation": ""
        },
        {
          "id": "q-8f644f757a",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 99,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 39,
          "prompt": "二叉树线索化实质是将二叉链中        改为存放该节点的前趋节点或后继节点的地址。",
          "options": [],
          "answer": {
            "blanks": [
              "空指针域"
            ],
            "text": "空指针域"
          },
          "explanation": ""
        },
        {
          "id": "q-4f8b16374a",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 100,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 40,
          "prompt": "对有n 个顶点的连通图来说，它的生成树一定有        条边。",
          "options": [],
          "answer": {
            "blanks": [
              "n-1"
            ],
            "text": "n-1"
          },
          "explanation": ""
        },
        {
          "id": "q-19af4b505f",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 101,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 41,
          "prompt": "如果一组数据采用某种排序方法进行排序，排序后相同关键字的数据元素的相对位置不发生改变，称该排序方法是        。",
          "options": [],
          "answer": {
            "blanks": [
              "稳定的"
            ],
            "text": "稳定的"
          },
          "explanation": ""
        },
        {
          "id": "q-db951cbe15",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 102,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 42,
          "prompt": "每次从无序子表中取出一个数据元素，通过依次比较把它插入有序子表的适当位置，此种排序方法称为        。",
          "options": [],
          "answer": {
            "blanks": [
              "直接插入排序"
            ],
            "text": "直接插入排序"
          },
          "explanation": ""
        },
        {
          "id": "q-73063cfe9c",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 112,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 1,
          "prompt": "【算法补充题】顺序表的插入\n// 顺序表类，T表示数据元素的数据类型；默认继承Object\npublic class SeqList<T> extends Object implements List<T>\n{\nprotected int n;               // 顺序表元素个数（长度）\nprotected Object[] element;     // 对象数组，保护成员\nprivate static final int MIN_CAPACITY=16;    // 常量，指定element数组容量的最小值\n// 插入x为第i个元素，x!=null，返回插入元素序号。\n// 对i容错，若i<0，则头插入；若i>长度，则尾插入。\npublic int insert(int i, T x)\n{   if(x==null)\nreturn -1;   // 没有插入。//返回一种执行结果，不是错误，不抛出空对象异常\nif(i<0)\ni=0;       // 插入位置i容错，插入在最前（头插入）\nif(i>this.n)\ni=this.n;    // 插入在最后（尾插入）\nObject[] source = this.element;  // 数组变量引用赋值，source也引用element数组\nif(this.n==element.length)      // 若数组满，则扩充顺序表的数组容量\n{\nthis.element = new Object[source.length*2];  // 再申请一个容量更大的数组\nfor(int j=0; j<i; j++)            // 复制当前数组前i-1个元素\nthis.element[j] = source[j];   // 复制数组元素，传递对象引用\n}\nfor(int j=this.n-1; j>=i; j--)    // 从i开始至表尾的元素向后移动，次序从后向前\n1                  ； \t// 复制数组元素，传递对象引用\nthis.element[i] = x;\n2                 ； \t//表长增1\nreturn i;   // 返回插入元素序号\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "this.element[j + 1] = source[j]",
              "this.n++"
            ],
            "text": "this.element[j + 1] = source[j]；this.n++"
          },
          "explanation": "顺序表的插入"
        },
        {
          "id": "q-d069ea3ef4",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 113,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 2,
          "prompt": "【算法补充题】顺序表的删除\npublic class SeqList<T> extends Object implements List<T>\n{\nprotected int n;               // 顺序表元素个数（长度）\nprotected Object[] element;     // 对象数组，保护成员\nprivate static final int MIN_CAPACITY=16;    // 常量，指定element数组容量的最小值\n//顺序表的删除操作\npublic T remove(int i) //删除第i个元素，0≤i<n，返回被删除元素。若i越界，返回null。\n{\nif(i>=0 && i<this.n)\n{   T x = (T)this.element[i];            // x中存储被删除元素\nfor(int j=i; j<this.n-1; j++)\n1               ;\t \t// 元素前移一个位置\nthis.element[this.n-1]=null;    // 设置数组元素对象为空，释放原引用实例\n2                ; \t//表长减1\nreturn x;        // 返回x局部变量引用的对象，传递对象引用\n}\nreturn null;\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "this.element[j] = this.element[j+1]",
              "this.n--"
            ],
            "text": "this.element[j] = this.element[j+1]； this.n--"
          },
          "explanation": "顺序表的删除"
        },
        {
          "id": "q-faab4f3507",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 114,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 3,
          "prompt": "【算法补充题】单链表的插入\npublic class Node<T> {   //单链表结点类，T是数据元素的类型\npublic T data;       //数据域，存储数据元素\npublic Node<T> next;  //地址域，引用后续结点\npublic Node(T data, Node<T> next) { //由指定的两个域来构造结点\nthis.data = data;\nthis.next = next;\n}\npublic Node () {  this(null,null);  }\t//空构造\n}\npublic class SinglyLinkedList<T> {\npublic Node<T> head;   //单链表的头指针，指向头结点\npublic SinglyLinkedList() { //构造空单链表\nhead=new Node<T> ( ); //创建头结点，data和next的值均为null\n}\n// 在ai前插入元素t，若插入成功，返回i，否则返回-1\npublic int insert(int i, T t) {\nint j=0;\nif(t==null)  throw new NullPointerException(\"不能插入空对象！\")\n//抛出空对象异常\nNode<T> p=this.head;\nwhile(p.next!=null&&j<i){\t//寻找ai-1结点\n1\t\t\t\t;\nj++;\n}\nif(p!=null&&j==i){     \t//找到ai-1结点\nNode<T> s=new Node<T> (t,p.next); //建立新结点，数据域为t，地址为p.next\n2\t\t\t\t ;  //在p之后插入新结点\nreturn i;       //插入成功，返回i\n}else{\nreturn -1;      //插入失败，返回-1\n}\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "p=p.next",
              "p.next=s"
            ],
            "text": "p=p.next； p.next=s"
          },
          "explanation": "单链表的插入"
        },
        {
          "id": "q-19ec4ec597",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 115,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 4,
          "prompt": "【算法补充题】单链表的删除\npublic class Node<T> {   \t\t//单链表结点类，T是数据元素的类型\npublic T data;       \t//数据域，存储数据元素\npublic Node<T> next;  \t//地址域，引用后续结点\npublic Node(T data, Node<T> next) { //由指定的两个域来构造结点\nthis.data = data;\nthis.next = next;\n}\npublic Node () { this(null,null);  } \t//空构造\n}\npublic class SinglyLinkedList<T>{\npublic Node<T> head;   \t//单链表的头指针，指向头结点\npublic SinglyLinkedList( ) { \t//构造空单链表\nhead=new Node<T> (); \t//创建头结点，data和next的值均为null\n}\n//删除结点ai\npublic T remove(int i) {\nint j=0;\nNode<T> p=this.head;\nwhile(p.next!=null&&j<i){   //寻找ai-1结点\n1\t\t\t\t;\nj++;\n}\nif(p.next!=null&&j==i){  \t//ai结点存在\nT old=p.next.data; \t\t//保存待删除结点的数据域\n2\t\t\t\t ;\t//删除结点，包括开始、中间和尾结点删除\nreturn old;       \t\t//返回已删除结点的数据域\n}else{\nreturn null;      \t\t//i越界，返回null\n}\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "p=p.next",
              "p.next=p.next.next"
            ],
            "text": "p=p.next； p.next=p.next.next"
          },
          "explanation": "单链表的删除"
        },
        {
          "id": "q-90894a0846",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 116,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 5,
          "prompt": "【算法补充题】链栈的出/入栈\n//链栈结点\npublic class LinkedNode<T> {\nprivate T data;\nprivate LinkedNode<T> next;\n//构造方法\npublic LinkedNode() {\n}\npublic LinkedNode(T data) {\tthis.data = data;\t}\npublic LinkedNode(T data, LinkedNode<T> next) {\nthis.data = data;\tthis.next = next;\n}\n//setter和getter方法\npublic T getData() {\treturn data;\t}\npublic void setData(T data) {\tthis.data = data;\t}\npublic LinkedNode<T> getNext() {\treturn next;\t}\npublic void setNext(LinkedNode<T> next) {\tthis.next = next;\t}\n}\n//链栈类\npublic class LinkedStack<T> implements Stack<T>{\nprivate LinkedNode<T> top;   //代表栈顶指针\n//栈初始化\npublic LinkedStack() {\ntop=null;   //将栈顶指针top置空，构造一个空链栈\n}\n//元素入栈\npublic void push(T t) {\n//将新结点指向栈顶，再移动栈顶指针指向新结点，新结点成为栈顶元素\nLinkedNode<T> node=new LinkedNode<T>(t);  //先构造新结点\n1\t\t\t\t ;\t//设置新结点指向栈顶指针\ntop=node;   \t\t//设置栈顶指针指向新结点\n}\n//元素出栈\npublic T pop() {\n//判断链栈是否为空\nif(this.isEmpty()) {\nthrow new RuntimeException(\"栈为空，没有元素可出栈\");\n}\nT topData=top.getData(); \t//获取栈顶元素值\n2\t\t\t\t;\t//修改栈顶指针，指向下一个结点\nreturn topData;\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "node.setNext(top)",
              "top=top.getNext()"
            ],
            "text": "node.setNext(top)； top=top.getNext()"
          },
          "explanation": "链栈的出/入栈"
        },
        {
          "id": "q-2f011abe9b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 117,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 6,
          "prompt": "【算法补充题】循环队列的入队\npublic interface Queue<T> {\npublic void enqueue(T t);  \t//元素入队,在队尾插入元素T\npublic T dequeue();  \t\t//元素出队，队头元素出队\npublic T peek();  \t\t\t//取队头元素值,但队头元素不出队\npublic boolean isEmpty();  \t//判断队列是否为空\n}\n//顺序循环队列类\npublic class SeqCirQueue<T> implements Queue<T> {\nprivate T[] queue=null;  //声明一维数组，存储队列元素\nprivate int length;   \t\t//数组的大小，表示队列的最大容量\nprivate int front;   \t\t//表示队头位置\nprivate int rear;    \t\t//表示队尾位置\n//队列初始化\npublic SeqCirQueue() {\nqueue=(T[])new Object[16];   //构造一维的泛型数组，默认大小为16\nlength=16;\nfront=rear=0;   \t\t//初始队列为空\n}\npublic SeqCirQueue(int length) {\nqueue=(T[])new Object[length];   //构造一维的泛型数组，存储队列元素\nthis.length=length;\nfront=rear=0;    \t//初始队列为空\n}\n//元素入队\npublic void enqueue(T t) {\n//判断队列是否满，若已满，则抛出异常，若未满，队尾位置向前移动1，插入元素\nif(front==(rear+1) % length) {\nthrow new RuntimeException(\"队列已满，元素不能入队\");\n}else {\n1\t\t\t\t ;\t//队尾指针加1\n2\t     \t  \t;\t//新元素插入队尾\n}\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "rear=(rear+1)%length",
              "queue[rear]=t"
            ],
            "text": "rear=(rear+1)%length； queue[rear]=t"
          },
          "explanation": "循环队列的入队"
        },
        {
          "id": "q-6e8a6048ad",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 118,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 7,
          "prompt": "【算法补充题】循环队列的出队\npublic interface Queue<T> {\npublic void enqueue(T t);  \t//元素入队,在队尾插入元素T\npublic T dequeue();  \t\t//元素出队，队头元素出队\npublic T peek();  \t\t\t//取队头元素值,但队头元素不出队\npublic boolean isEmpty();  \t//判断队列是否为空\n}\n//顺序循环队列类\npublic class SeqCirQueue<T> implements Queue<T> {\nprivate T[] queue=null;  //声明一维数组，存储队列元素\nprivate int length;   \t\t//数组的大小，表示队列的最大容量\nprivate int front;   \t\t//表示队头位置\nprivate int rear;    \t\t//表示队尾位置\n//队列初始化\npublic SeqCirQueue() {\nqueue=(T[])new Object[16];   //构造一维的泛型数组，默认大小为16\nlength=16;\nfront=rear=0;   \t\t//初始队列为空\n}\npublic SeqCirQueue(int length) {\nqueue=(T[])new Object[length];   //构造一维的泛型数组，存储队列元素\nthis.length=length;\nfront=rear=0;    \t//初始队列为空\n}\n//元素出队\npublic T dequeue() {\n//判断队列是否空，若为空，抛出异常，若不为空，队头位置向前移动1，取出元素\nif(isEmpty()) {\nthrow new RuntimeException(\"队列空，没有元素出队\");\n}else {\n1\t\t\t\t ; //队头指针加1\n2\t\t\t\t ; //保存队头元素\nqueue[front]=null;\nreturn t;\n}\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "front=(front+1) %length",
              "T t=queue[front]"
            ],
            "text": "front=(front+1) %length； T t=queue[front]"
          },
          "explanation": "循环队列的出队"
        },
        {
          "id": "q-ae9ccabd6e",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 119,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 8,
          "prompt": "【算法补充题】链队的出/入队\n//队列数据类型，其中T表示队列中数据的类型\npublic interface Queue<T> {\npublic void enqueue(T t);  //元素入队,在队尾插入元素T\npublic T dequeue();  \t\t//元素出队，队头元素出队\npublic T peek();  \t\t\t//取队头元素值,但队头元素不出队\npublic boolean isEmpty(); \t//判断队列是否为空\n}\n//链栈结点\npublic class LinkedNode<T> {\nprivate T data;\nprivate LinkedNode<T> next;\n//构造方法\npublic LinkedNode() {\n}\npublic LinkedNode(T data) {\tthis.data = data;\t}\npublic LinkedNode(T data, LinkedNode<T> next) {\nthis.data = data;\t\tthis.next = next;\n}\n//setter和getter方法\npublic T getData() {\treturn data;\t}\npublic void setData(T data) {\tthis.data = data;\t}\npublic LinkedNode<T> getNext() {\treturn next;\t}\npublic void setNext(LinkedNode<T> next) {\t\tthis.next = next;\t}\n}\n//链式队列类\npublic class LinkedQueue<T> implements Queue<T> {\nprivate LinkedNode<T> front, rear; \t// 表示队头,队尾指针\n// 队列初始化\npublic LinkedQueue() {\nfront = rear = new LinkedNode<T>();\t // 初始空队列，队头和队尾指向一个空的头结点\n}\n// 元素入队\npublic void enqueue(T t) {\n// 先构造新结点，再将新元素入队，在队尾处插入新结点，再移动队尾指针指向新结点\nLinkedNode<T> node = new LinkedNode<T>(t, null);\n1\t\t\t ;  //新结点插入队尾\nrear = node;   \t\t //移动队尾指针\n}\n// 元素出队\npublic T dequeue() {\n// 先获取队头元素，再移动队头指针指向下一个结点，若队列只有一个元素，出队后队列为空，则移动队尾指针指向头结点\nif (isEmpty())\nthrow new RuntimeException(\"队列为空，没有元素可出队\");\nLinkedNode<T> node = front.getNext();   //保存要出队的队头结点\nfront.setNext(node.getNext());    \t\t//队头指针指向node的后继结点\nif (node.getNext() == null)    \t\t\t//若队列中只有一个元素\n2\t\t\t ; \t//元素出队后，队列为空，队尾和队头指针都指向头结点\nreturn node.getData();\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "rear.setNext(node)",
              "rear = front"
            ],
            "text": "rear.setNext(node)； rear = front"
          },
          "explanation": "链队的出/入队"
        },
        {
          "id": "q-dd28c12446",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 120,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 9,
          "prompt": "【算法补充题】二叉树的中序遍历\npublic class BinaryNode<T> {\npublic T data;\t\t\t\t\t\t //数据域，存储数据元素\npublic BinaryNode<T> lchild,rchild;\t //链域，分别指向左右孩子结点\n//构造结点，分别指定元和左右结点\npublic BinaryNode(T data,BinaryNode<T> lchild,BinaryNode<T> rchild){\nthis.data=data;\nthis.lchild=lchild;\nthis.rchild=rchild;\n}\npublic BinaryNode(T data){\tthis(data, null, null);\t}\npublic BinaryNode(){\tthis(null,null,null);}\n}\npublic interface BinaryTTree<T> {\npublic void inOrder();\t//中序遍历\n}\npublic class BinaryTree<T> implements BinaryTTree<T> {\n    public BinaryNode<T> root;\n    public BinaryTree() { this.root = null; }\n    public BinaryTree(BinaryNode<T> root) { this.root = root;  }\n// 中序遍历\n    public void inOrder() {  inOrder(this.root);  }\n    public void inOrder(BinaryNode<T> p) {\n       if (p != null) {\n          \t\t     \t1\t    \t\t ;\n          System.out.print(p.data.toString() + \" \");\n          \t\t    \t2\t\t\t\t ;\n}\n    }\n}",
          "options": [],
          "answer": {
            "blanks": [
              "inOrder(p.lchild)",
              "inOrder(p.rchild)"
            ],
            "text": "inOrder(p.lchild)； inOrder(p.rchild)"
          },
          "explanation": "二叉树的中序遍历"
        },
        {
          "id": "q-ae5c734f55",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 121,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 10,
          "prompt": "【算法补充题】计算二叉树高度\npublic class BinaryNode<T> {\npublic T data; \t\t\t\t\t\t//数据域，存储数据元素\npublic BinaryNode<T> lchild,rchild; \t//链域，分别指向左右孩子结点\n//构造结点，分别指定元和左右结点\npublic BinaryNode(T data,BinaryNode<T> lchild,BinaryNode<T> rchild){\nthis.data=data;\nthis.lchild=lchild;\nthis.rchild=rchild;\n}\npublic BinaryNode(T data){\tthis(data, null, null);\t}\npublic BinaryNode(){\tthis(null,null,null);}\n}\npublic interface BinaryTTree<T> {\npublic boolean isEmpty();\t\t//判断是否为空\npublic int height();\t\t\t//返回二叉树的高度\n}\npublic class BinaryTree<T> implements BinaryTTree<T> {\n    public BinaryNode<T> root;\n    public BinaryTree() { this.root = null; }\n    public BinaryTree(BinaryNode<T> root) { this.root = root;  }\n// 求二叉树的高度\n    public int height() {   return height(this.root);    }\n    public int height(BinaryNode<T> p) {\n       if (p == null) {\n          return 0;\n       }\n       int m = height(p.lchild);\n       int n = height(p.rchild);\nif(m >n ) \t\t\t1\t\t\t\t;\nelse \t\t\t2\t\t\t\t;\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "return(m+1)",
              "return (n+1)"
            ],
            "text": "return(m+1)； return (n+1)"
          },
          "explanation": "计算二叉树高度"
        },
        {
          "id": "q-541c520cfc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 122,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 11,
          "prompt": "【算法补充题】统计二叉树的结点个数\npublic class BinaryNode<T> {\npublic T data; \t\t\t\t\t\t//数据域，存储数据元素\npublic BinaryNode<T> lchild,rchild;\t//链域，分别指向左右孩子结点\n//构造结点，分别指定元和左右结点\npublic BinaryNode(T data,BinaryNode<T> lchild,BinaryNode<T> rchild){\nthis.data=data;\nthis.lchild=lchild;\nthis.rchild=rchild;\n}\npublic BinaryNode(T data){\tthis(data, null, null);\t}\npublic BinaryNode(){\tthis(null,null,null);}\n}\npublic interface BinaryTTree<T> {\npublic boolean isEmpty();\t\t//判断是否为空\npublic int count();\t\t\t//统计二叉树结点的个数\n}\npublic class BinaryTree<T> implements BinaryTTree<T> {\n    public BinaryNode<T> root;\n    public BinaryTree() { this.root = null; }\n    public BinaryTree(BinaryNode<T> root) { this.root = root;  }\n// 统计结点的个数\n    public int count() { return count(this.root);  }\n    public int count(BinaryNode<T> p) {\n       if (\t\t   1\t\t\t) {\t//如果是空树，则叶子结点个数为 0\n          return 0;\n       }\n       return \t\t\t 2\t\t \t ;\n    }\n}",
          "options": [],
          "answer": {
            "blanks": [
              "p == null",
              "1 + count(p.lchild) + count(p.rchild)"
            ],
            "text": "p == null； 1 + count(p.lchild) + count(p.rchild)"
          },
          "explanation": "统计二叉树的结点个数"
        },
        {
          "id": "q-3733f2f986",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-3.txt",
          "order": 123,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 12,
          "prompt": "【算法补充题】折半插入查找\npublic class BinarySearch {\n//在数组data中查找关键字为kx的数据元素， 如果找到，返回元素的数组下标，否则返回0 。线性表的n个数据元素存放到data[1]至data[n]中\npublic static int binarySearch(RecT[] data, Integer kx) {\nint low = 1;\t\t\t\t// 表示查找区间的下界\nint high = data.length -1;\t// 表示查找区间上界\nint mid;\t\t\t\t\t// 表示查找区间中间位置\nwhile (low <= high) {\n1\t\t\t\t ;\t// 表示查找区间的中间位置\nif (data[mid].key.equals(kx)) {\t\t// 查找成功，返回mid\nreturn mid;\n} else if (kx.compareTo((Integer) data[mid].key) < 0) {// 继续在左半区查找\nhigh = mid - 1;\n} else {// 继续在右半区查找\n2\t\t\t\t ;\n}\n}\nreturn 0;\n}\n}",
          "options": [],
          "answer": {
            "blanks": [
              "mid = (low + high) /2",
              "low = mid + 1"
            ],
            "text": "mid = (low + high) /2； low = mid + 1"
          },
          "explanation": "折半插入查找"
        },
        {
          "id": "q-f213804c72",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 1,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 1,
          "prompt": "线性表的长度是线性表所占用的存储空间的大小。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-7b1276855d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 2,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 2,
          "prompt": "顺序存储结构的主要缺点是不利于插入或删除。（     ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-c8b2759600",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 3,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 3,
          "prompt": "线性表采用链式存储时，结点和节点内部的存储空间可以是不连续的。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-453fd7253b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 4,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 4,
          "prompt": "对任何数据结构而言，链式存储结构一定优于顺序存储结构。（    ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-681a21b7dd",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 5,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 5,
          "prompt": "即使对不含相同元素的同一输入序列进行两组不同的合法的入栈和出栈组合操作，所得的输出序列也一定相同。（    ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-50f0add5ef",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 6,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 6,
          "prompt": "在对链式队列作出队列操作时，不会改变front指针的值。（     ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-1226d84501",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 7,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 7,
          "prompt": "字符串采用结点大小为1的链表作为其存储结构，是指链只存放一个字符。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-95882746ff",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 8,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 8,
          "prompt": "如果两个串含有相同的字符集，则说两者相等。（     ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-fdd7668182",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 9,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 9,
          "prompt": "广义表中的元素或者是一个不可分割的原子，或者是一个非空的广义表。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-81e9374f92",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 10,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 10,
          "prompt": "一个广义表可以为其它广义表所共享。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-99e252a35f",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 11,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 11,
          "prompt": "数组可看成线性结构的一种推广，因此与线性表一样，可对它进行增删等操作。（ ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-803604b485",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 12,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 12,
          "prompt": "对于不同的特殊矩阵应该采用不同的存储方式。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-68d06a3f53",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 13,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 13,
          "prompt": "已知二叉树的前序遍历和后序遍历序列并不能唯一地确定这棵树，因为不知道树的根节点是哪一个。（    ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-0752335a08",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 14,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 14,
          "prompt": "连通分量是无向图中极小连通子图。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-0c38d91d6d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 15,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 15,
          "prompt": "平衡二叉树如果因为插入删除结点失去平衡，需要对最小不平衡树进行调整使其重新达到平衡。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-29410e1373",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 16,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 16,
          "prompt": "关键路径是时间结点网络中从源点到汇点的最长路径。（   ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-81fe9e95e3",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 17,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 17,
          "prompt": "平衡二叉权不能进行插入删除操作，因为执行插入删除操作会破坏树的平衡性。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-5a37190de4",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 18,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 18,
          "prompt": "链表是采用链式存储结构存储的线性表，进行插入、删除操作时，在链表中比在顺序存储结构中效率高。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-cb3ae69dac",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 19,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 19,
          "prompt": "队列和栈都是运算受限的线性表，只允许在表的两端进行运算。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-dc4cf6275f",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 20,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 20,
          "prompt": "在满二叉树中，存在度为1的结点。(  )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-dfb1587635",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 21,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 21,
          "prompt": "如果一个串中所有的字母均在另一个串中出现，则说明前者是后者的子串。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-5a77190b0b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 22,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 22,
          "prompt": "链栈与顺序栈相比，其特点之一是通常不会出现栈满的情况。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-1fbcd31b5e",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 23,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 23,
          "prompt": "由树转换二叉树，其根结点的右子树总是空的。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-1ea1257c6c",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 24,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 24,
          "prompt": "哈夫曼树一定是完全二叉树。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-d2120d6444",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 25,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 25,
          "prompt": "递归定义就是循环定义。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-b743f3de3d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 26,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 26,
          "prompt": "在图的广度优先搜索遍历算法中，队列的作用是存储当前访问顶点的所有邻接顶点，这些顶点排队等待被访问，当访问完当前顶点时，出队一个顶点，即是下一个要访问的顶点。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-f6637fc92f",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 27,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 27,
          "prompt": "无向图中代表边的无序顶点对通常用圆括号括起来，用以表示一条无向边。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-a0cc813501",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 28,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 28,
          "prompt": "如果每个结点只设置一个指向其后继结点的指针成员，这样的链表称为双链表。 （  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-85deb14862",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 29,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 29,
          "prompt": "线性表采用链表存储时,存放所有元素的结点地址部分地址必须是连续的。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-98f372b00b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 30,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 30,
          "prompt": "链表不具备的特点是可随机访问任一结点。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-f76c8987ba",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 31,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 31,
          "prompt": "顺序查找、折半查找和分块查找算法都属于线性查找表。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-6b3ec0f7a6",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 32,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 32,
          "prompt": "如果每个结点中设置两个指针成员，分别用以指向其前驱结点和后继结点，这样的链表称为双链表。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-20265771cb",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 33,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 33,
          "prompt": "简单排序的排序思路是从一个无序区中选出最小的元素，最简单方法是逐个进行元素比较。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-a1a7e318da",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 34,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 34,
          "prompt": "树形结构中的每个结点都有一个前驱结点。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-5601f67f79",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 35,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 35,
          "prompt": "完全二叉树中的每个结点或者没有孩子或者有两个孩子。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-fcd475ade0",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 36,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 36,
          "prompt": "二叉树就是度为2的树。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-e121a0e78d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 37,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 37,
          "prompt": "最小生成树是指边数最少的生成树。（  ）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-947338b4b8",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 38,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 38,
          "prompt": "一个数据结构中，如果数据元素值发生改变，则它的逻辑结构也随之改变。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-80c6a18bdc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 39,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 39,
          "prompt": "数据的逻辑结构与各数据元素在计算机中如何存储有关。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-a5b8677750",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 40,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 40,
          "prompt": "线性表中所有元素的数据类型必须相同。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-b09117d9ae",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 41,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 41,
          "prompt": "线性表中每个元素都有一个前趋元素和一个后继元素。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-9e6320d9a7",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 42,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 42,
          "prompt": "线性表的逻辑顺序总与其物理顺序一致。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-9135e36a47",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 43,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 43,
          "prompt": "顺序表具有随机存取特性，而链表不具有随机存取特性。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-9695d59b61",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 44,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 44,
          "prompt": "栈具有先进后出的特点，其中数据的逻辑结构是任意的。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-26fcb91747",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 45,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 45,
          "prompt": "栈和线性表是两种不同的数据结构，它们的数据元素的逻辑关系也不同。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-898ee2a19e",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 46,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 46,
          "prompt": "栈和队列都是限制存取端的线性表。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-45c85ae798",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 47,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 47,
          "prompt": "n 个元素进队的顺序和出队的顺序总是一致的。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-ec0cc1c754",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 48,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 48,
          "prompt": "顺序队中有多少元素，可以根据队头指针和队尾指针的值来计算。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-5ee08608f8",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 49,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 49,
          "prompt": "字符串中每个数据元素只能是字母。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-fcb4ac15fe",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 50,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 50,
          "prompt": "字符串长度为字符串中不同字符的个数。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-fd6666474d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 51,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 51,
          "prompt": "用某种遍历方式对二叉树进行遍历，结果是一个线性序列。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-be99066d51",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 52,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 52,
          "prompt": "非空二叉树的后序遍历序列的最后一个节点一定是叶子节点。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-4ff19807b5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 53,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 53,
          "prompt": "非空二叉树的中序遍历序列的最后一个节点一定是叶子节点。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-5f5e7c1aa5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 54,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 54,
          "prompt": "哈夫曼树中没有度为1的节点。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-0ce30c5de6",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 55,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 55,
          "prompt": "哈夫曼树是带权路径长度最短的二叉树，权值越大的节点离根节点越远。(   )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-bb97e87e2b",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 56,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 56,
          "prompt": "将二叉树变为线索二叉树的过程称为线索化。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-780b2cbb37",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 57,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 57,
          "prompt": "图是一种节点之间无层次关系的线性结构。(      )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-7d31275e8d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 58,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 58,
          "prompt": "在无向图中，如果顶点i 到顶点j 有路径，而顶点j 到顶点k 没有路径，则顶点i 到顶点k 也没有路径。(    )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-338b2a806a",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 59,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 59,
          "prompt": "在有向图中，如果顶点i 到顶点j 有路径，而顶点i  到顶点k 没有路径，则顶点j 到顶点k 也没有路径。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-7e154d2f05",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-1.docx",
          "order": 60,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 60,
          "prompt": "连通图的生成树包含图中所有顶点。(     )",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-7eed9a2eb5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 103,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 1,
          "prompt": "算法的 5 个特性是什么?试根据这些特性解释算法与程序的区别。怎样衡量算法的性能？",
          "options": [],
          "answer": {
            "text": "一个算法应当具有以下5 个特性：分别是有穷性、确定性、可行性、输入、输出。 （2分）\n算法与程序的关系：算法和程序都是用来表达解决问题的逻辑步骤；算法是对解决问题的方法的具体描述，程序是算法在计算机中的具体实现（1分）；程序是算法，但算法不一定是程序。（1分）\n用时间复杂度 O(f(n))表示所花费时间的量级，即时间效率（1分）；用空间复杂度 O(S(n))表示算法执行过程中所需要的额外空间。（1分）"
          },
          "explanation": ""
        },
        {
          "id": "q-06cfabbabf",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 104,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 2,
          "prompt": "什么是数据结构？数据结构概念包括哪些部分？数据的存储结构主要有哪些？不同数据结构之间共同的操作有哪些？",
          "options": [],
          "answer": {
            "text": "数据结构，指数据元素之间存在关系的数据元素集合。 （1分）\n(2) 数据结构包含数据的逻辑结构、存储结构和数据操作三方面概念。 （2分）\n(3) 数据的存储结构有两种：顺序存储结构和链式存储结构。 （1分）\n(4) 数据操作主要有：求数据元素个数，访问、查找、插入、删除数据元素等。（2分）"
          },
          "explanation": ""
        },
        {
          "id": "q-44bc96a377",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 105,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 3,
          "prompt": "简述顺序表和链表存储方式的主要优缺点。若频繁地对一个线性表进行插入和删除操作，该线性表宜采用何种存储结构，为什么?",
          "options": [],
          "answer": {
            "text": "顺序表的优点是可以随机存取元素，存储密度高，结构简单；缺点是需要一片地址连续的存储空间，不便于插入和删除元素(需要移动大量的元素),表的容量不便扩充。（1分）\n链表的优点是便于节点的插入和删除，表的容量扩充十分方便；缺点是不能进行随机访问，只能顺序访问，另外每个节点上增加指针域，导致存储密度较低。（2分）\n宜采用链式存储结构（1分）。因为采用链式结构存储线性表，在插入和删除操作时只修改相关结点的指针域，不需要移动结点（1分）；而采用顺序结构存储线性表，插入和删除操作需要平均移动表中的一半元素。（1分）"
          },
          "explanation": ""
        },
        {
          "id": "q-4c2680bbbc",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 106,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 4,
          "prompt": "什么是队列的假溢出？怎样解决队列的假溢出问题？链式队列会出现假溢出吗？为什么？",
          "options": [],
          "answer": {
            "text": "顺序队列，当入队的元素个数（包括已出队元素）超过数组容量时，队列尾下标越界，数据溢出。此时，由于之前已有若干元素出队，数组前部已空出许多存储单元，所以，这种溢出并不是因存储空间不够而产生的，称之为假溢出（2分）。\n顺序队列之所以会产生假溢出现象，是因为顺序队列的存储单元没有重复使用机制。解决的办法是将顺序队列设计成循环队列解决（2分）。\n(3) 链式队列不会出现假溢出（1分）。因为每次元素入队，都要申请新结点，数据不会溢出（1分）。"
          },
          "explanation": ""
        },
        {
          "id": "q-58aa8fc4f5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 107,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 5,
          "prompt": "Brute-Force 模式匹配算法的主要特点是什么？算法思路是怎样的？给出最好情况和最坏情况及其时间复杂度。",
          "options": [],
          "answer": {
            "text": "Brute-Force 是一种带回溯的模式匹配算法。（2分）\n(2) 算法思路是将目标串中所有长度为 m 的子串依次与模式串匹配，如果一次匹配失败，则模式串再与目标串的下一个子串匹配。 （2分）\n(3) Brute-Force 算法最好情况下的时间复杂度是 O(m+n)，最坏情况下的时间复杂度是 O(m×n)。（2分）"
          },
          "explanation": ""
        },
        {
          "id": "q-7b6a752323",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 108,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 6,
          "prompt": "二叉树的链式存储结构有何特点？二叉树的遍历方式有哪些？为什么已知先序遍历序列和后序遍历序列不能唯一确定一棵二叉树？如何根据二叉树的先序遍历序列和中序遍历序列唯一确定一棵二叉树？请说明步骤。",
          "options": [],
          "answer": {
            "text": "（1）二叉树的链表存储结构中的每个结点至少有两个指针域才能表达二叉树结构。（1分）\n（2） 二叉树的三种递归遍历方式：先序遍历、中序遍历、后序遍历。（1分）\n（3） 已知先序遍历序列和后序遍历序列不能唯一确定一棵二叉树，因为先序序列和后序序列均无法提供根结点左右子树的明确分割信息（1分），同样的先序遍历和后序遍历序列，可以对应不同的二叉树，导致二叉树不唯一。（1分）\n（4）已知先序序列和中序序列可以唯一确定二叉树，原理在于先序序列首元素为根结点，中序序列根结点分割左右子树（1分）。具体步骤：\n确定根结点：先序序列的第一个结点即为根结点。\n分割中序序列：在中序序列中找到根结点，其左侧为左子树中序序列，右侧为右子树中序序列。（1分）"
          },
          "explanation": ""
        },
        {
          "id": "q-9eed6f79d9",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 109,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 7,
          "prompt": "什么是线索二叉树？什么是哈夫曼树？哈夫曼编码的特点是什么？有何作用？",
          "options": [],
          "answer": {
            "text": "（1）线索二叉树是通过利用二叉链表中的空指针域存储结点的前驱或后继信息，以优化遍历效率。（1分）\n（2）哈夫曼树(最优二叉树)是带权路径长度(WPL)最小的二叉树，用于高效编码。（1分）\n（3）哈夫曼编码是一种变长的编码方案。满足基本要求：任何一个字符的编码都不是另一个字符编码的前缀。（2分）\n（4）哈夫曼编码用于实现无损的数据压缩，这种编码显著提升压缩效率，尤其适用于频度分布不均的数据。（2分）"
          },
          "explanation": ""
        },
        {
          "id": "q-d100aaaf3d",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 110,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 8,
          "prompt": "什么是图的生成树？什么是图的邻接矩阵存储结构？最小生成树的构造算法有哪几种？各有何特点？",
          "options": [],
          "answer": {
            "text": "(1) 连通无向图的一个极小连通生成子图称为该图的生成树，它包含原图中所有顶点（n 个），以及足以构成一棵树的 n-1条边。（1分）\n(2) 图的邻接矩阵存储结构就是通过矩阵来表示图中各顶点之间的邻接关系。核心是采用两个数组来表示图：一个是用于存储顶点信息的一维数组；另一个是用于存储图中顶点之间关联关系的二维数组，这个二维数组被称为邻接矩阵。（2分）\n(3) 构造最小生成树主要有两种算法：Prim 算法和 Kruskal 算法（1分）。它们都是基于贪心算法的策略。两者差别是，Prim 算法不断归并顶点集合（1分）；Kruskal 算法不断归并边，通过找n-1条不构成回路的最小权值边，来得到最小生成树集合。（1分）"
          },
          "explanation": ""
        },
        {
          "id": "q-3c329acfe5",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-2.docx",
          "order": 111,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 9,
          "prompt": "二分法查找适用于什么情况？是否适用于单链表,为什么？ 希尔排序的基本思想是什么？顺序查找法、二分查找法和分块查找法，对长度为n的表来说，3种查找法在查找成功时的平均查找长度各是多少？",
          "options": [],
          "answer": {
            "text": "(1) 二分法查找适用于顺序存储结构并且数据元素已经按照关键字大小排序的线性表（1分）。\n(2) 二分法查找不能用于单链表，因为，单链表没有随机存取功能。（1分）\n(3) 希尔排序本质是分组插入排序方法；给出了插入排序的改进方法。基本思想：先将整个待排序记录序列分割成若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行一次直接插入排序。（1分）\n(4) 这3种方法在查找成功时的平均查找长度分别如下。\n① 顺序查找法:查找成功时的平均查找长度为(n+1)/2。（1分）\n②二分查找法:查找成功时的平均查找长度为log2(n+1)-1。（1分）\n③ 分块查找法:若用顺序查找确定所在的块,平均查找长度为(n/s+s)/2+1;若用二分查找确定所在的块,平均查找长度为log2(n/s+1)+s/2。其中,s为每块含有的元素个数。（1分）"
          },
          "explanation": ""
        },
        {
          "id": "q-860f774b60",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-4.docx",
          "order": 124,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 1,
          "prompt": "假设用于通信的电文仅由8个字母组成，字母在电文中出现的频率分别为0.07，0.19，0.02，0.06，0.32，0.03，0.21，0.10。\n① 试为这8个字母设计哈夫曼编码。\n② 试设计另一种由二进制表示的等长编码方案。\n③ 对于上述实例，比较两种方案的优缺点。",
          "options": [],
          "answer": {
            "text": "方案1的带权路径长度 WPL=2.61；方案2的带权路径长度 WPL=3。结论：哈夫曼编码优于等长二进制编码。",
            "images": [
              {
                "src": "assets/answers/data-structure/image1.png",
                "alt": "哈夫曼树"
              },
              {
                "src": "assets/answers/data-structure/image2.png",
                "alt": "哈夫曼编码示意图"
              }
            ]
          },
          "explanation": ""
        },
        {
          "id": "q-data-structure-directed-graph",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-4.docx",
          "order": 124.5,
          "originalNumber": "2",
          "options": [],
          "explanation": "",
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "prompt": "已知下图所示的有向图，请给出：\n① 每个顶点的入度和出度；\n② 邻接矩阵；\n③ 邻接表；\n④ 逆邻接表。",
          "images": [
            {
              "src": "assets/answers/data-structure/image3.png",
              "alt": "有向图题干"
            }
          ],
          "answer": {
            "images": [
              {
                "src": "assets/answers/data-structure/image4.png",
                "alt": "有向图入度出度、邻接矩阵、邻接表和逆邻接表答案"
              }
            ]
          }
        },
        {
          "id": "q-36b481b98c",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-4.docx",
          "order": 125,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 2,
          "prompt": "已知下图所示的无向网，请给出：\n① 邻接矩阵；\n② 邻接表；\n③ 最小生成树。",
          "options": [],
          "answer": {
            "text": "已提取到邻接矩阵图，邻接表和最小生成树答案待后续补全。",
            "images": [
              {
                "src": "assets/answers/data-structure/image6.png",
                "alt": "无向网邻接矩阵答案"
              }
            ]
          },
          "explanation": "",
          "images": [
            {
              "src": "assets/answers/data-structure/image5.png",
              "alt": "无向网题干"
            }
          ]
        },
        {
          "id": "q-7ceff28ab9",
          "subject": "数据结构",
          "source": "数据结构与算法(java)-- 复习题-4.docx",
          "order": 126,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 3,
          "prompt": "已知带权连通图G=(V,E) 的邻接表如图所示，请画出该图的逻辑结构，并分别写出从顶点1出发的深度优先遍历和广度优先遍历序列，并画出该图从顶点0出发的一棵最小生成树。",
          "options": [],
          "answer": {
            "text": "从顶点1出发的深度优先遍历序列为：1、0、2、3、4。从顶点1出发的广度优先遍历序列为：1、0、2、4、3。",
            "images": [
              {
                "src": "assets/answers/data-structure/image9.png",
                "alt": "带权连通图逻辑结构答案"
              },
              {
                "src": "assets/answers/data-structure/image10.png",
                "alt": "从顶点0出发的最小生成树答案"
              }
            ]
          },
          "explanation": "",
          "images": [
            {
              "src": "assets/answers/data-structure/image8.png",
              "alt": "带权连通图邻接表题干"
            }
          ]
        }
      ]
    },
    {
      "id": "subject-89a7e03e",
      "name": "软工",
      "sources": [
        "2025-2026第二学期软件工程测试.txt",
        "选择题.txt"
      ],
      "counts": {
        "single": 60,
        "multiple": 0,
        "blank": 10,
        "judge": 10,
        "short": 7,
        "comprehensive": 3,
        "programming": 0
      },
      "total": 90,
      "questions": [
        {
          "id": "q-0190d55105",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 1,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 1,
          "prompt": "活动图中可能出现的终止标记的数量是(        )。",
          "options": [
            {
              "key": "A",
              "text": "0个"
            },
            {
              "key": "B",
              "text": "0或1个"
            },
            {
              "key": "C",
              "text": "0到多个"
            },
            {
              "key": "D",
              "text": "1个"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 0到多个"
          },
          "explanation": ""
        },
        {
          "id": "q-4446fad68b",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 2,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 2,
          "prompt": "软件工程中描述生命周期的瀑布模型一般包括计划、需求分析、设计、编码、(        )和维护等几个阶段。",
          "options": [
            {
              "key": "A",
              "text": "测试"
            },
            {
              "key": "B",
              "text": "版本更新"
            },
            {
              "key": "C",
              "text": "可行性分析"
            },
            {
              "key": "D",
              "text": "产品发布"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 测试"
          },
          "explanation": ""
        },
        {
          "id": "q-8dfb9ff42f",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 3,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 3,
          "prompt": "下列对类和接口的描述不正确的是(        )。",
          "options": [
            {
              "key": "A",
              "text": "当使用子类去替换一处父类时，设计良好的软件应当可以正确实现功能"
            },
            {
              "key": "B",
              "text": "当一个类拥有另外一个类的全部属性和方法时，它们之间是实现关系"
            },
            {
              "key": "C",
              "text": "接口的方法名必须是公开(public)的"
            },
            {
              "key": "D",
              "text": "一个类可以实现多个接口"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 当一个类拥有另外一个类的全部属性和方法时，它们之间是实现关系"
          },
          "explanation": ""
        },
        {
          "id": "q-8238e5939f",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 4,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 4,
          "prompt": "下列关于链的叙述中，正确的一项是(        )。",
          "options": [
            {
              "key": "A",
              "text": "链用来表示对象和类之间的关系"
            },
            {
              "key": "B",
              "text": "链没有多重性"
            },
            {
              "key": "C",
              "text": "链就是关联关系"
            },
            {
              "key": "D",
              "text": "链使用一根虚线段来表示"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 链没有多重性"
          },
          "explanation": ""
        },
        {
          "id": "q-63cf607640",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 5,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 5,
          "prompt": "在下列选项中，(        )不属于软件工程学科所要研究的基本内容。",
          "options": [
            {
              "key": "A",
              "text": "软件工程方法"
            },
            {
              "key": "B",
              "text": "软件工程过程"
            },
            {
              "key": "C",
              "text": "软件工程原理"
            },
            {
              "key": "D",
              "text": "软件工程材料"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 软件工程材料"
          },
          "explanation": ""
        },
        {
          "id": "q-a0e9584db7",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 6,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 6,
          "prompt": "软件开发的瀑布模型一般都将开发过程划分为分析、设计、编码和测试等阶段，一般认为可能占用人员最多的阶段是(        )。",
          "options": [
            {
              "key": "A",
              "text": "分析阶段"
            },
            {
              "key": "B",
              "text": "测试阶段"
            },
            {
              "key": "C",
              "text": "编码阶段"
            },
            {
              "key": "D",
              "text": "设计阶段"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 编码阶段"
          },
          "explanation": ""
        },
        {
          "id": "q-eba867fe78",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 7,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 7,
          "prompt": "软件工程的三要素是(        )。",
          "options": [
            {
              "key": "A",
              "text": "方法、对象和类"
            },
            {
              "key": "B",
              "text": "过程、模型和方法"
            },
            {
              "key": "C",
              "text": "技术、方法和工具"
            },
            {
              "key": "D",
              "text": "方法、工具和过程"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 方法、工具和过程"
          },
          "explanation": ""
        },
        {
          "id": "q-75f318df3f",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 8,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 8,
          "prompt": "以下符号哪个是在顺序图中表示返回消息的符号(        )。",
          "options": [
            {
              "key": "A",
              "text": "A"
            },
            {
              "key": "B",
              "text": "B"
            },
            {
              "key": "C",
              "text": "C"
            },
            {
              "key": "D",
              "text": "D"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. B"
          },
          "explanation": "",
          "images": [
            {
              "src": "assets/answers/soft/soft-seq-return.png",
              "alt": "顺序图返回消息符号选项"
            }
          ]
        },
        {
          "id": "q-74035686ad",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 9,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 9,
          "prompt": "我们可以使用UML中的(        )来描述图书馆与书的关系。",
          "options": [
            {
              "key": "A",
              "text": "实现关系"
            },
            {
              "key": "B",
              "text": "关联关系"
            },
            {
              "key": "C",
              "text": "依赖关系"
            },
            {
              "key": "D",
              "text": "泛化关系"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 关联关系"
          },
          "explanation": ""
        },
        {
          "id": "q-893e03a6ca",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 10,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 10,
          "prompt": "假设类A的一个操作的其中一个参数是类B的一个对象，且这两个类之间不存在其他关系，那么类A和类B之间构成(        )。",
          "options": [
            {
              "key": "A",
              "text": "泛化关系"
            },
            {
              "key": "B",
              "text": "关联关系"
            },
            {
              "key": "C",
              "text": "依赖关系"
            },
            {
              "key": "D",
              "text": "实现关系"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 依赖关系"
          },
          "explanation": ""
        },
        {
          "id": "q-43a3899128",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 11,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 11,
          "prompt": "下列关于用例图的描述，错误的是(        )。",
          "options": [
            {
              "key": "A",
              "text": "用例图表示系统的行为"
            },
            {
              "key": "B",
              "text": "参与者在用例图中使用小人表示"
            },
            {
              "key": "C",
              "text": "一般使用从用例指向参与者的箭头表示关联关系"
            },
            {
              "key": "D",
              "text": "用例在用例图中使用椭圆表示"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 一般使用从用例指向参与者的箭头表示关联关系"
          },
          "explanation": ""
        },
        {
          "id": "q-ade7415197",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 12,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 12,
          "prompt": "顺序图的组成不包括(        )。",
          "options": [
            {
              "key": "A",
              "text": "生命线"
            },
            {
              "key": "B",
              "text": "对象"
            },
            {
              "key": "C",
              "text": "分叉节点"
            },
            {
              "key": "D",
              "text": "消息"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 分叉节点"
          },
          "explanation": ""
        },
        {
          "id": "q-48740d2598",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 13,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 13,
          "prompt": "以下对于喷泉模型的说法正确的是(        )。",
          "options": [
            {
              "key": "A",
              "text": "不需要大量的开发人员"
            },
            {
              "key": "B",
              "text": "开发人员可以同步开发"
            },
            {
              "key": "C",
              "text": "需要分析结束后才开始设计"
            },
            {
              "key": "D",
              "text": "审核简单"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 开发人员可以同步开发"
          },
          "explanation": ""
        },
        {
          "id": "q-25c0a48bc1",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 14,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 14,
          "prompt": "在进行某网上商店的用例图绘制时，(        )是一个不合适的用例。",
          "options": [
            {
              "key": "A",
              "text": "管理订单"
            },
            {
              "key": "B",
              "text": "购买商品"
            },
            {
              "key": "C",
              "text": "打开页面"
            },
            {
              "key": "D",
              "text": "搜索商品"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 打开页面"
          },
          "explanation": ""
        },
        {
          "id": "q-34d2038291",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 15,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 15,
          "prompt": "包含风险分析的软件工程模型是(        )。",
          "options": [
            {
              "key": "A",
              "text": "喷泉模型"
            },
            {
              "key": "B",
              "text": "螺旋模型"
            },
            {
              "key": "C",
              "text": "增量模型"
            },
            {
              "key": "D",
              "text": "瀑布模型"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 螺旋模型"
          },
          "explanation": ""
        },
        {
          "id": "q-b123474ecf",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 16,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 16,
          "prompt": "UML主要应用于(        )。",
          "options": [
            {
              "key": "A",
              "text": "基于对象的面向对象的方法"
            },
            {
              "key": "B",
              "text": "基于数据的数据流开发方法"
            },
            {
              "key": "C",
              "text": "基于螺旋模型的结构化开发方法"
            },
            {
              "key": "D",
              "text": "基于需求动态定义的原型化方法"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 基于对象的面向对象的方法"
          },
          "explanation": ""
        },
        {
          "id": "q-e29869f6cd",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 17,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 17,
          "prompt": "包含关系是在(        )的基础上通过添加构造型实现的。",
          "options": [
            {
              "key": "A",
              "text": "关联关系"
            },
            {
              "key": "B",
              "text": "依赖关系"
            },
            {
              "key": "C",
              "text": "泛化关系"
            },
            {
              "key": "D",
              "text": "扩展关系"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 依赖关系"
          },
          "explanation": ""
        },
        {
          "id": "q-eb7bbe93ec",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 18,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 18,
          "prompt": "白盒测试技术依据的是(        )。",
          "options": [
            {
              "key": "A",
              "text": "软件行为的描述"
            },
            {
              "key": "B",
              "text": "程序的物理结构"
            },
            {
              "key": "C",
              "text": "程序的逻辑结构"
            },
            {
              "key": "D",
              "text": "软件功能的描述"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 程序的逻辑结构"
          },
          "explanation": ""
        },
        {
          "id": "q-ad0fa54866",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 19,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 19,
          "prompt": "螺旋模型综合了(        )的优点，并增加了风险分析。",
          "options": [
            {
              "key": "A",
              "text": "增量模型和喷泉模型"
            },
            {
              "key": "B",
              "text": "快速原型模型和喷泉模型"
            },
            {
              "key": "C",
              "text": "瀑布模型和喷泉模型"
            },
            {
              "key": "D",
              "text": "瀑布模型和快速原型模型"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 瀑布模型和快速原型模型"
          },
          "explanation": ""
        },
        {
          "id": "q-516a9b6e07",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 20,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 20,
          "prompt": "软件危机的主要原因是(        )。",
          "options": [
            {
              "key": "A",
              "text": "软件本身的特点及开发方法不满足"
            },
            {
              "key": "B",
              "text": "软件工具落后"
            },
            {
              "key": "C",
              "text": "实行严格的产品控制"
            },
            {
              "key": "D",
              "text": "软件生产能力不足"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 软件本身的特点及开发方法不满足"
          },
          "explanation": ""
        },
        {
          "id": "q-55ea7263a8",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 48,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 1,
          "prompt": "下列说法中正确的是(    )",
          "options": [
            {
              "key": "A",
              "text": "20世纪50年代提出了软件工程的概念"
            },
            {
              "key": "B",
              "text": "20世纪60年代提出了软件工程的概念"
            },
            {
              "key": "C",
              "text": "20世纪70年代出现了客户机/服务器技术"
            },
            {
              "key": "D",
              "text": "在20世纪80年代软件工程学科达到成熟"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 20世纪60年代提出了软件工程的概念"
          },
          "explanation": ""
        },
        {
          "id": "q-72afeb6a9c",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 49,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 2,
          "prompt": "增量模型本质上是一种（    ）。",
          "options": [
            {
              "key": "A",
              "text": "线性顺序模型"
            },
            {
              "key": "B",
              "text": "整体开发模型"
            },
            {
              "key": "C",
              "text": "非整体开发模型"
            },
            {
              "key": "D",
              "text": "螺旋模型"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 非整体开发模型"
          },
          "explanation": ""
        },
        {
          "id": "q-04a98d790a",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 50,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 3,
          "prompt": "软件过程是（    ）。",
          "options": [
            {
              "key": "A",
              "text": "特定的开发模型"
            },
            {
              "key": "B",
              "text": "一种软件求解的计算逻辑"
            },
            {
              "key": "C",
              "text": "软件开发活动的集合"
            },
            {
              "key": "D",
              "text": "软件生命周期模型"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 软件开发活动的集合"
          },
          "explanation": ""
        },
        {
          "id": "q-f970776218",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 51,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 4,
          "prompt": "软件生命周期模型不包括（    ）。",
          "options": [
            {
              "key": "A",
              "text": "瀑布模型"
            },
            {
              "key": "B",
              "text": "用例模型"
            },
            {
              "key": "C",
              "text": "增量模型"
            },
            {
              "key": "D",
              "text": "螺旋模型"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 用例模型"
          },
          "explanation": ""
        },
        {
          "id": "q-431639ca54",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 52,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 5,
          "prompt": "在UML中表示一般事物与特殊事物之间的关系是(    )。",
          "options": [
            {
              "key": "A",
              "text": "关联关系"
            },
            {
              "key": "B",
              "text": "泛化关系"
            },
            {
              "key": "C",
              "text": "依赖关系"
            },
            {
              "key": "D",
              "text": "实现关系"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 泛化关系"
          },
          "explanation": ""
        },
        {
          "id": "q-360cd4d359",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 53,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 6,
          "prompt": "UML使用(    )来描述接口和实现接口的类之间的关系。",
          "options": [
            {
              "key": "A",
              "text": "关联关系"
            },
            {
              "key": "B",
              "text": "泛化关系"
            },
            {
              "key": "C",
              "text": "依赖关系"
            },
            {
              "key": "D",
              "text": "实现关系"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 实现关系"
          },
          "explanation": ""
        },
        {
          "id": "q-13c449eb38",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 54,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 7,
          "prompt": "下列UML图中不属于结构图的一项是(    )。\n对象图",
          "options": [
            {
              "key": "A",
              "text": "类图"
            },
            {
              "key": "B",
              "text": "顺序图"
            },
            {
              "key": "C",
              "text": "组件图"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 顺序图"
          },
          "explanation": ""
        },
        {
          "id": "q-aa3d0f818f",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 55,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 8,
          "prompt": "以下符号哪一个是数据流图中表示数据变换的符号(    )。",
          "options": [
            {
              "key": "A",
              "text": "A"
            },
            {
              "key": "B",
              "text": "B"
            },
            {
              "key": "C",
              "text": "C"
            },
            {
              "key": "D",
              "text": "D"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. A"
          },
          "explanation": ""
        },
        {
          "id": "q-6b0f65e387",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 56,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 9,
          "prompt": "在“4+1”架构中，(    )主要用来描述软件的各个模块的组织方式。",
          "options": [
            {
              "key": "A",
              "text": "逻辑视图"
            },
            {
              "key": "B",
              "text": "进程视图"
            },
            {
              "key": "C",
              "text": "开发视图"
            },
            {
              "key": "D",
              "text": "物理视图"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 开发视图"
          },
          "explanation": ""
        },
        {
          "id": "q-6d80d12d0c",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 57,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 10,
          "prompt": "下面不是用例图组成要素的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "用例"
            },
            {
              "key": "B",
              "text": "系统边界"
            },
            {
              "key": "C",
              "text": "泳道"
            },
            {
              "key": "D",
              "text": "参与者"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 泳道"
          },
          "explanation": ""
        },
        {
          "id": "q-9fb238271e",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 58,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 11,
          "prompt": "下列说法中，不正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "用例和参与者之间的对应关系是关联关系，它表示参与者使用了系统的用例"
            },
            {
              "key": "B",
              "text": "参与者指的是人，不能是子系统和时间等概念"
            },
            {
              "key": "C",
              "text": "在扩展关系中，基础用例提供了一个或多个插入点，扩展用例在这些插入点中提供了另外的行为"
            },
            {
              "key": "D",
              "text": "特殊需求指的是一个用例的非功能需求和设计约束"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 参与者指的是人，不能是子系统和时间等概念"
          },
          "explanation": ""
        },
        {
          "id": "q-b16fe2e8a8",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 59,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 12,
          "prompt": "对于ATM系统的“取款”用例（客户通过插入银行卡并输入正确的密码从ATM机中成功取款的过程），(    )应该作为该用例的参与者。",
          "options": [
            {
              "key": "A",
              "text": "ATM机"
            },
            {
              "key": "B",
              "text": "银行工作人员"
            },
            {
              "key": "C",
              "text": "取款客户"
            },
            {
              "key": "D",
              "text": "取款"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 取款客户"
          },
          "explanation": ""
        },
        {
          "id": "q-2c827f6026",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 60,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 13,
          "prompt": "下列UML关系中用例之间不会出现的一项是(    )。",
          "options": [
            {
              "key": "A",
              "text": "关联关系"
            },
            {
              "key": "B",
              "text": "扩展关系"
            },
            {
              "key": "C",
              "text": "包含关系"
            },
            {
              "key": "D",
              "text": "泛化关系"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 关联关系"
          },
          "explanation": ""
        },
        {
          "id": "q-87e539b683",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 61,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 14,
          "prompt": "下列关于类图的说法中正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "类图是由类、组件、包等模型元素以及它们间的关系构成的"
            },
            {
              "key": "B",
              "text": "类图的目的在于描述系统的运行方式，而不是系统如何构成"
            },
            {
              "key": "C",
              "text": "类图通过系统中的类和类间关系描述了系统的静态特性"
            },
            {
              "key": "D",
              "text": "类图和数据模型有许多相似之处，区别是数据模型不仅描述了内部信息的结构，也包含了系统的内部行为"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 类图通过系统中的类和类间关系描述了系统的静态特性"
          },
          "explanation": ""
        },
        {
          "id": "q-0613092739",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 62,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 15,
          "prompt": "当类的属性与操作添加了(    )限定符后表示该属性或操作只对本类可见，不能被其他类访问。",
          "options": [
            {
              "key": "A",
              "text": "public"
            },
            {
              "key": "B",
              "text": "private"
            },
            {
              "key": "C",
              "text": "protected"
            },
            {
              "key": "D",
              "text": "package"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. private"
          },
          "explanation": ""
        },
        {
          "id": "q-0d454f4eb9",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 63,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 16,
          "prompt": "汽车（Car）由轮子、发动机、油箱、座椅、方向盘等组成，那么Car类和其他类（Wheel、Engin、Tank、Chair、SteeringWheel）之间的关系是(    )。",
          "options": [
            {
              "key": "A",
              "text": "关联关系"
            },
            {
              "key": "B",
              "text": "依赖关系"
            },
            {
              "key": "C",
              "text": "实现关系"
            },
            {
              "key": "D",
              "text": "泛化关系"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 关联关系"
          },
          "explanation": ""
        },
        {
          "id": "q-8421f55fb4",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 64,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 17,
          "prompt": "在下列选项中不属于类图的元素的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "类"
            },
            {
              "key": "B",
              "text": "用例"
            },
            {
              "key": "C",
              "text": "接口"
            },
            {
              "key": "D",
              "text": "关联类"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 用例"
          },
          "explanation": ""
        },
        {
          "id": "q-58aed17c8b",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 65,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 18,
          "prompt": "在UML的顺序图中将交互关系表现成一幅二维图，其中纵向是(    )，横向是(    )。",
          "options": [
            {
              "key": "A",
              "text": "时间，对象角色"
            },
            {
              "key": "B",
              "text": "交互，泛化"
            },
            {
              "key": "C",
              "text": "时间，消息"
            },
            {
              "key": "D",
              "text": "交互，消息"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 时间，对象角色"
          },
          "explanation": ""
        },
        {
          "id": "q-e360663075",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 66,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 19,
          "prompt": "关于状态机图的说法，不正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "状态机图通过建立类对象的生命周期模型来描述对象随时间变化的动态行为"
            },
            {
              "key": "B",
              "text": "状态机图用于对系统的静态方面建模"
            },
            {
              "key": "C",
              "text": "状态机图用于模型元素的实例（对象、交互等）的行为"
            },
            {
              "key": "D",
              "text": "状态机图适用于描述状态和动作的顺序，不仅可以展现一个对象拥有的状态，还可以说明事件如何随着事件的推移来影响这些状态"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 状态机图用于对系统的静态方面建模"
          },
          "explanation": ""
        },
        {
          "id": "q-d66a87136b",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 67,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 20,
          "prompt": "在活动图中用于对元素按照负责对象分组的元素是(    )。",
          "options": [
            {
              "key": "A",
              "text": "判断节点"
            },
            {
              "key": "B",
              "text": "控制流"
            },
            {
              "key": "C",
              "text": "分叉节点"
            },
            {
              "key": "D",
              "text": "泳道"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 泳道"
          },
          "explanation": ""
        },
        {
          "id": "q-c5c21a6f70",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 68,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 21,
          "prompt": "UML的全称是(    )。",
          "options": [
            {
              "key": "A",
              "text": "Unify Modeling Language"
            },
            {
              "key": "B",
              "text": "Unified Modeling Language"
            },
            {
              "key": "C",
              "text": "Unified Making Language"
            },
            {
              "key": "D",
              "text": "Unified Modem Language"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Unified Modeling Language"
          },
          "explanation": ""
        },
        {
          "id": "q-110e74a710",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 69,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 22,
          "prompt": "UML中有四种交互图, 其中强调控制流时间顺序的是（）。",
          "options": [
            {
              "key": "A",
              "text": "顺序图"
            },
            {
              "key": "B",
              "text": "通信图"
            },
            {
              "key": "C",
              "text": "定时图"
            },
            {
              "key": "D",
              "text": "交互概述图"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 顺序图"
          },
          "explanation": ""
        },
        {
          "id": "q-3cf49dd6c6",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 70,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 23,
          "prompt": "假设选修课程数目的输入范围为1-4，则根据黑盒测试中的等价类划分技术，下列划分正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "2个有效等价类，2个无效等价类"
            },
            {
              "key": "B",
              "text": "1个有效等价类，2个无效等价类"
            },
            {
              "key": "C",
              "text": "2个有效等价类，1个无效等价类"
            },
            {
              "key": "D",
              "text": "1个有效等价类，1个无效等价类"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 1个有效等价类，2个无效等价类"
          },
          "explanation": ""
        },
        {
          "id": "q-aa2e49bb95",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 71,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 24,
          "prompt": "以下图形哪一个是PAD图中表示选择性的结构（）。",
          "options": [
            {
              "key": "A",
              "text": "A"
            },
            {
              "key": "B",
              "text": "B"
            },
            {
              "key": "C",
              "text": "C"
            },
            {
              "key": "D",
              "text": "D"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. B"
          },
          "explanation": ""
        },
        {
          "id": "q-83b7d9f925",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 72,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 25,
          "prompt": "面向对象分析的首要工作是建立（）。",
          "options": [
            {
              "key": "A",
              "text": "系统的动态模型"
            },
            {
              "key": "B",
              "text": "系统的功能模型"
            },
            {
              "key": "C",
              "text": "基本的E-R图"
            },
            {
              "key": "D",
              "text": "问题的对象模型"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 问题的对象模型"
          },
          "explanation": ""
        },
        {
          "id": "q-500d25ab18",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 73,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 26,
          "prompt": "顺序图是(    )的：(    )表示时间，(    )表示不同的对象或参与者。",
          "options": [
            {
              "key": "A",
              "text": "二维，垂直方向，水平方向"
            },
            {
              "key": "B",
              "text": "一维，水平方向，垂直方向"
            },
            {
              "key": "C",
              "text": "二维，水平方向，垂直方向"
            },
            {
              "key": "D",
              "text": "一维，垂直方向，水平方向"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 二维，垂直方向，水平方向"
          },
          "explanation": ""
        },
        {
          "id": "q-1add97fa87",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 74,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 27,
          "prompt": "题图为一个飞机票预定系统的数据流图,图中5表示的基本术语是(    )。",
          "options": [
            {
              "key": "A",
              "text": "外部实体"
            },
            {
              "key": "B",
              "text": "数据存储"
            },
            {
              "key": "C",
              "text": "数据流"
            },
            {
              "key": "D",
              "text": "加工"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 外部实体"
          },
          "explanation": ""
        },
        {
          "id": "q-1e87456a44",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 75,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 28,
          "prompt": "假设某网站发帖数目的输入范围为0—20,则根据黑盒测试中的等价类划分技术,下列划分正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "可划分为2个有效等价类,2个无效等价类"
            },
            {
              "key": "B",
              "text": "可划分为1个有效等价类,2个无效等价类"
            },
            {
              "key": "C",
              "text": "可划分为2个有效等价类,1个无效等价类"
            },
            {
              "key": "D",
              "text": "可划分为1个有效等价类,1个无效等价类"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 可划分为1个有效等价类,2个无效等价类"
          },
          "explanation": ""
        },
        {
          "id": "q-c9493f8fe2",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 76,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 29,
          "prompt": "在面向对象的动态模型中，每张状态图表示（）的动态行为。",
          "options": [
            {
              "key": "A",
              "text": "某一个类"
            },
            {
              "key": "B",
              "text": "有关联的若干个类"
            },
            {
              "key": "C",
              "text": "一系列事件"
            },
            {
              "key": "D",
              "text": "一系列状态"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 某一个类"
          },
          "explanation": ""
        },
        {
          "id": "q-77a1c6cfe4",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 77,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 30,
          "prompt": "黑盒测试技术,又称为(    )。",
          "options": [
            {
              "key": "A",
              "text": "路径测试技术"
            },
            {
              "key": "B",
              "text": "系统测试技术"
            },
            {
              "key": "C",
              "text": "功能测试技术"
            },
            {
              "key": "D",
              "text": "结构测试技术"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 功能测试技术"
          },
          "explanation": ""
        },
        {
          "id": "q-3d1137d848",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 78,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 31,
          "prompt": "对象模型的描述工具是（）。",
          "options": [
            {
              "key": "A",
              "text": "状态图"
            },
            {
              "key": "B",
              "text": "数据流图"
            },
            {
              "key": "C",
              "text": "结构图"
            },
            {
              "key": "D",
              "text": "类图"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 类图"
          },
          "explanation": ""
        },
        {
          "id": "q-524801deef",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 79,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 32,
          "prompt": "在面向数据流的软件设计方法中，一般将信息流分为（）。",
          "options": [
            {
              "key": "A",
              "text": "变换流和事务流"
            },
            {
              "key": "B",
              "text": "数据流和控制流"
            },
            {
              "key": "C",
              "text": "变换流和控制流"
            },
            {
              "key": "D",
              "text": "事务流和控制流"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 变换流和事务流"
          },
          "explanation": ""
        },
        {
          "id": "q-b460cc9c4a",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 80,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 33,
          "prompt": "在UML类图中,聚合关系的图形表示符号是以下哪一种(    )。",
          "options": [
            {
              "key": "A",
              "text": "实心菱形"
            },
            {
              "key": "B",
              "text": "空心菱形"
            },
            {
              "key": "C",
              "text": "空心三角形"
            },
            {
              "key": "D",
              "text": "实心三角形"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 空心菱形"
          },
          "explanation": ""
        },
        {
          "id": "q-44598c15e2",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 81,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 34,
          "prompt": "UML用例图中用例的标准表示符号是什么(    )。",
          "options": [
            {
              "key": "A",
              "text": "矩形"
            },
            {
              "key": "B",
              "text": "椭圆"
            },
            {
              "key": "C",
              "text": "小人图标"
            },
            {
              "key": "D",
              "text": "菱形"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 椭圆"
          },
          "explanation": ""
        },
        {
          "id": "q-9161208a0a",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 82,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 35,
          "prompt": "在UML类图中,接口的矩形表示法需要在顶部显式标注以下哪种构造型()。",
          "options": [
            {
              "key": "A",
              "text": "<<class>>"
            },
            {
              "key": "B",
              "text": "<<interface>>"
            },
            {
              "key": "C",
              "text": "<<abstract>>"
            },
            {
              "key": "D",
              "text": "<<implement>>"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. <<interface>>"
          },
          "explanation": ""
        },
        {
          "id": "q-cbb118a1e5",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 83,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 36,
          "prompt": "在敏捷开发中，系统交付的周期称之为（  ）。",
          "options": [
            {
              "key": "A",
              "text": "需求"
            },
            {
              "key": "B",
              "text": "设计"
            },
            {
              "key": "C",
              "text": "冲刺（sprint）"
            },
            {
              "key": "D",
              "text": "测试"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 冲刺（sprint）"
          },
          "explanation": ""
        },
        {
          "id": "q-533d97f469",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 84,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 37,
          "prompt": "如图所示的两个类的关联关系是（      ）。",
          "options": [
            {
              "key": "A",
              "text": "泛化"
            },
            {
              "key": "B",
              "text": "聚合"
            },
            {
              "key": "C",
              "text": "细化"
            },
            {
              "key": "D",
              "text": "实现"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 聚合"
          },
          "explanation": ""
        },
        {
          "id": "q-f7db07689f",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 85,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 38,
          "prompt": "已知Shape类的类图如图所示,则方法个数有(      )。",
          "options": [
            {
              "key": "A",
              "text": "1个"
            },
            {
              "key": "B",
              "text": "2个"
            },
            {
              "key": "C",
              "text": "3个"
            },
            {
              "key": "D",
              "text": "4个"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 3个"
          },
          "explanation": ""
        },
        {
          "id": "q-6ab7264abd",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 86,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 39,
          "prompt": "关于统一建模语言UML说法正确的是(    )。",
          "options": [
            {
              "key": "A",
              "text": "UML是一种可视化的程序设计语言"
            },
            {
              "key": "B",
              "text": "UML只在需求分析阶段有重要作用"
            },
            {
              "key": "C",
              "text": "UML是工具或知识库的规格说明"
            },
            {
              "key": "D",
              "text": "UML以面向对象的方式来描述系统"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. UML以面向对象的方式来描述系统"
          },
          "explanation": ""
        },
        {
          "id": "q-022426b14f",
          "subject": "软工",
          "source": "选择题.txt",
          "order": 87,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 40,
          "prompt": "下列工具中,常用在需求分析阶段的是(      )。",
          "options": [
            {
              "key": "A",
              "text": "HIPO图"
            },
            {
              "key": "B",
              "text": "N-S图"
            },
            {
              "key": "C",
              "text": "DFD图"
            },
            {
              "key": "D",
              "text": "PAD图"
            },
            {
              "key": "B",
              "text": "2、D \t3、\tC \t4、A \t5、C \t6、C \t7、\tB \t8、A \t9、D \t10、C"
            },
            {
              "key": "B",
              "text": "12、B\t13、A\t14、D\t15、B\t16、A\t17、C\t18、D\t19、A\t20、C"
            },
            {
              "key": "B",
              "text": "22、C\t23、A\t24、B\t25、C\t26、B\t27、B\t28、A\t29、B\t30、B"
            },
            {
              "key": "B",
              "text": "32、A\t33、B\t34、D\t35、B\t36、D\t37、B\t38、A\t39、C\t40、B"
            },
            {
              "key": "C",
              "text": "42、B\t43、D\t44、A\t45、A\t46、A\t47、B\t48、A\t49、C\t50、D"
            },
            {
              "key": "A",
              "text": "52、B\t53、B\t54、B\t55、C\t56、B\t57、B\t58、C\t59、D\t60、C"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 42、B\t43、D\t44、A\t45、A\t46、A\t47、B\t48、A\t49、C\t50、D"
          },
          "explanation": ""
        },
        {
          "id": "q-f1935420a5",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 21,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 21,
          "prompt": "顺序图由四部分组成:_______、生命线、激活期与消息。",
          "options": [],
          "answer": {
            "blanks": [
              "参与者"
            ],
            "text": "参与者"
          },
          "explanation": ""
        },
        {
          "id": "q-e06d3a5364",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 22,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 22,
          "prompt": "对象图的组成元素包括对象和__________。",
          "options": [],
          "answer": {
            "blanks": [
              "链"
            ],
            "text": "链"
          },
          "explanation": ""
        },
        {
          "id": "q-445f62a4c9",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 23,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 23,
          "prompt": "描述对象从一种状态切换至另一种状态的UML图是______。",
          "options": [],
          "answer": {
            "blanks": [
              "状态图"
            ],
            "text": "状态图"
          },
          "explanation": ""
        },
        {
          "id": "q-9902dead54",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 24,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 24,
          "prompt": "在软件工程中，面向对象方法的具体实施步骤包括______、面向对象设计、面向对象实现和______。",
          "options": [],
          "answer": {
            "blanks": [
              "面向对象分析",
              "面向对象测试"
            ],
            "text": "面向对象分析；面向对象测试"
          },
          "explanation": ""
        },
        {
          "id": "q-a200914e38",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 25,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 25,
          "prompt": "把输入划分为有效和无效组别来设计用例的方法叫______。",
          "options": [],
          "answer": {
            "blanks": [
              "等价类划分法"
            ],
            "text": "等价类划分法"
          },
          "explanation": ""
        },
        {
          "id": "q-c80a16673b",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 26,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 26,
          "prompt": "通过执行对象的操作改变对象的属性，但它必须通过________的传递。",
          "options": [],
          "answer": {
            "blanks": [
              "消息"
            ],
            "text": "消息"
          },
          "explanation": ""
        },
        {
          "id": "q-f7aecda443",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 27,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 27,
          "prompt": "依据代码内部逻辑设计用例的测试类型是______测试。",
          "options": [],
          "answer": {
            "blanks": [
              "白盒"
            ],
            "text": "白盒"
          },
          "explanation": ""
        },
        {
          "id": "q-71ff7554f9",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 28,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 28,
          "prompt": "结构化分析方法常用的两种工具是______和数据字典。",
          "options": [],
          "answer": {
            "blanks": [
              "数据流图"
            ],
            "text": "数据流图"
          },
          "explanation": ""
        },
        {
          "id": "q-4925c57baa",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 29,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 29,
          "prompt": "活动图中泳道用来标识活动的______。",
          "options": [],
          "answer": {
            "blanks": [
              "执行者"
            ],
            "text": "执行者"
          },
          "explanation": ""
        },
        {
          "id": "q-0e1841f025",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 30,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 30,
          "prompt": "在可行性研究中，______是最关键的因素。",
          "options": [],
          "answer": {
            "blanks": [
              "技术可行性"
            ],
            "text": "技术可行性"
          },
          "explanation": ""
        },
        {
          "id": "q-69bcc5ba82",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 31,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 31,
          "prompt": "用例的包含关系与扩展关系在表示法上相似，都是将虚线箭头从基用例指向包含用例(扩展用例)。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-c2329c20de",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 32,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 32,
          "prompt": "在UML中，当接口使用小圆圈表示时，该接口与其他类的实现关系可以被简化为一条实线段。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-73301907e6",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 33,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 33,
          "prompt": "软件的开发工作中，为了保证工作的进度，开发工作与测试工作应交给同一部分人完成。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-8284db45c8",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 34,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 34,
          "prompt": "软件危机的主要表现是软件需求增加，软件价格上升。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-2b99760e1a",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 35,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 35,
          "prompt": "参与者位于系统边界外，并不是系统的一部分。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-365af4810c",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 36,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 36,
          "prompt": "UML用例图中的扩展关系在无扩展时基础用例依然完整。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-d537f947f4",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 37,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 37,
          "prompt": "软件就是程序，编写软件就是编写程序。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-eb8fb6314b",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 38,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 38,
          "prompt": "黑盒测试只检查程序功能是否按照需求规格说明书的规定正常使用，程序是否能适当地接收输入数据而产生正确的输出信息，而不考虑模块的内部执行与程序结构。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-e7afb858fb",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 39,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 39,
          "prompt": "类图可被看作是对象图的实例。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-0637684178",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 40,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 40,
          "prompt": "在绘制用例图时，其中用例的粒度越细越好。(        )\nA\n对\nB\n错",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-027166bd54",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 41,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 41,
          "prompt": "什么是顺序图?顺序图有哪些组成部分?",
          "options": [],
          "answer": {
            "text": "顺序图是按时间顺序显示对象交互的图。它显示参与交互的对象和所交换信息的先后顺序，用来表示用例中的行为，并将这些行为建模成信息交换。顺序图的主要组成元素包括对象及生命线、激活和消息。"
          },
          "explanation": ""
        },
        {
          "id": "q-c95146bf7c",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 42,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 42,
          "prompt": "简述传统软件生命周期的六个阶段。",
          "options": [],
          "answer": {
            "text": "传统软件生命周期的六个阶段是：1）可行性研究；2）需求分析；3）软件设计；4）编码；5）软件测试；6）软件维护。"
          },
          "explanation": ""
        },
        {
          "id": "q-d704c60525",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 43,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 43,
          "prompt": "请简述软件工程的基本原则。",
          "options": [],
          "answer": {
            "text": "软件工程的基本原则包括：1）用分阶段的生命周期计划进行严格的管理；2）坚持进行阶段评审；3）实行严格的产品控制；4）采用现代程序设计技术；5）软件工程结果应能清楚地审查；6）开发小组的人员应该少而精；7）承认不断改进软件工程实践的必要性。"
          },
          "explanation": ""
        },
        {
          "id": "q-e60e535b85",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 44,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 44,
          "prompt": "与计算机硬件相比，计算机软件有哪些特点?",
          "options": [],
          "answer": {
            "text": "与计算机硬件相比，计算机软件的特点包括：1）具有抽象性；2）无明显的制造过程；3）存在退化问题；4）对计算机系统有着不同程度的依赖性；5）尚未完全摆脱人工的开发方式；6）软件本身是复杂的；7）成本相当昂贵；8）相当多的软件工作涉及社会因素。"
          },
          "explanation": ""
        },
        {
          "id": "q-soft-extra-uml-diagrams",
          "subject": "软工",
          "source": "用户补充题",
          "order": 48,
          "originalNumber": "补1",
          "options": [],
          "explanation": "",
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "prompt": "UML中有哪些图？",
          "answer": {
            "text": "UML常见图包括：用例图、类图、对象图、包图、顺序图、协作图、状态图、活动图、组件图和部署图。"
          }
        },
        {
          "id": "q-soft-extra-er-diagram",
          "subject": "软工",
          "source": "用户补充题",
          "order": 49,
          "originalNumber": "补2",
          "options": [],
          "explanation": "",
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "prompt": "请阐述E-R图的概念及组成要素，并从数量角度对实体和实体的关系进行分类。",
          "answer": {
            "text": "E-R图用于描述现实世界中实体、属性以及实体之间的联系。组成要素包括：实体（通常用矩形表示）、属性（通常用椭圆表示）、联系（通常用菱形并通过连线表示）。从数量角度看，实体之间的联系可分为一对一（1:1）、一对多（1:n）和多对多（m:n）。"
          }
        },
        {
          "id": "q-soft-extra-class-relations",
          "subject": "软工",
          "source": "用户补充题",
          "order": 50,
          "originalNumber": "补3",
          "options": [],
          "explanation": "",
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "prompt": "简述类和类之间的关系，说明它们分别用来描述什么情况。",
          "answer": {
            "text": "类之间常见关系包括：关联关系、依赖关系、泛化关系和实现关系。关联关系描述对象之间较稳定的结构联系；依赖关系描述一个类临时使用另一个类，后者变化可能影响前者；泛化关系描述一般类与特殊类之间的继承关系；实现关系描述类对接口或规格的实现。"
          }
        },
        {
          "id": "q-f3aef3707a",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 45,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 45,
          "prompt": "根据以下需求描述绘制类图。\n在“远程网络教学系统”系统中参与者为学生、教师和系统管理员:\n(1)学生包括登录名称、登录密码、学生编号、性别、年龄、班级、年级、邮箱等属性;\n(2)教师包括登录名称、登录密码、姓名、性别、教授课程、电话号码和邮箱等属性;\n(3)系统管理员包括用户名系统管理员登录名称、登录密码、邮箱、权限等级等属性。\n(4)把参与者学生、教师和系统管理员进行抽象，从而抽象出一个单独的人员类类，学生、教师和系统管理员分别是人员类的子类。",
          "options": [],
          "answer": {
            "images": [
              {
                "src": "assets/answers/soft-45.svg",
                "alt": "answer image 45"
              }
            ]
          },
          "explanation": ""
        },
        {
          "id": "q-fd6af6d365",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 46,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 46,
          "prompt": "某银行系统的取款用例执行顺序如下:\n工作人员输入取款单，输入后，银行系统请求银行数据库匹配用户，进行身份验证，验证通过后，数据库注销相应存款，返回注销完成信息，银行系统在存折上打印取款记录。请根据以上信息绘制顺序图。",
          "options": [],
          "answer": {
            "images": [
              {
                "src": "assets/answers/soft-46.svg",
                "alt": "answer image 46"
              }
            ]
          },
          "explanation": ""
        },
        {
          "id": "q-16eee07459",
          "subject": "软工",
          "source": "2025-2026第二学期软件工程测试.txt",
          "order": 47,
          "type": "comprehensive",
          "typeLabel": "综合题",
          "mode": "comprehensive",
          "originalNumber": 47,
          "prompt": "某学生选课系统的查询课程用例如下:学生首先进入选课系统，然后输入要查询的课程名，系统验证输入的课程名是否存在，若存在，则跳转到对应的显示课程信息的页面;若不存在，则给出提示信息，返回选课页面。请根据以上描述绘制活动图。",
          "options": [],
          "answer": {
            "images": [
              {
                "src": "assets/answers/soft-47.svg",
                "alt": "answer image 47"
              }
            ]
          },
          "explanation": ""
        }
      ]
    },
    {
      "id": "subject-e75ea7ca",
      "name": "鸿蒙",
      "sources": [
        "复习测试卷.txt",
        "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt"
      ],
      "counts": {
        "single": 67,
        "multiple": 36,
        "blank": 35,
        "judge": 35,
        "short": 5,
        "comprehensive": 0,
        "programming": 1
      },
      "total": 179,
      "questions": [
        {
          "id": "q-36ad2bbaa1",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 1,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 1,
          "prompt": "下列选项中，组件导航默认采用的显示模式是（）",
          "options": [
            {
              "key": "A",
              "text": "固定模式"
            },
            {
              "key": "B",
              "text": "自适应模式"
            },
            {
              "key": "C",
              "text": "单栏模式"
            },
            {
              "key": "D",
              "text": "分栏模式"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 自适应模式"
          },
          "explanation": ""
        },
        {
          "id": "q-0c1d6541de",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 2,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 2,
          "prompt": "下列选项中，对鸿蒙系统的说法错误是（）",
          "options": [
            {
              "key": "A",
              "text": "安全和隐私保护"
            },
            {
              "key": "B",
              "text": "仅限于智能手机和平板电脑运行"
            },
            {
              "key": "C",
              "text": "多终端适配"
            },
            {
              "key": "D",
              "text": "统一开发平台"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 仅限于智能手机和平板电脑运行"
          },
          "explanation": "鸿蒙不仅仅局限于智能手机和平板电脑，还支持多种类型的智能设备。"
        },
        {
          "id": "q-ceb06e0c90",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 3,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 3,
          "prompt": "下列属性中，用于设置Text组件字号的是（）",
          "options": [
            {
              "key": "A",
              "text": "fontSize"
            },
            {
              "key": "B",
              "text": "color"
            },
            {
              "key": "C",
              "text": "fontWeight"
            },
            {
              "key": "D",
              "text": "fontFamily"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. fontSize"
          },
          "explanation": ""
        },
        {
          "id": "q-884165d180",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 4,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 4,
          "prompt": "下列选项中，对数组元素的访问方式正确的是（）",
          "options": [
            {
              "key": "A",
              "text": "fruits<0>"
            },
            {
              "key": "B",
              "text": "fruits[0]"
            },
            {
              "key": "C",
              "text": "fruits(0)"
            },
            {
              "key": "D",
              "text": "fruits{0}"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. fruits[0]"
          },
          "explanation": "使用方括号[]来访问数组中的元素，例如fruits[0]表示访问第一个元素。"
        },
        {
          "id": "q-c91b3a8a00",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 5,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 5,
          "prompt": "下列选项中，关于闭包的说法正确的是（）",
          "options": [
            {
              "key": "A",
              "text": "闭包会立即释放所有占用的内存"
            },
            {
              "key": "B",
              "text": "闭包使内层函数可以访问外层函数作用域中的变量和函数"
            },
            {
              "key": "C",
              "text": "外层函数可以直接访问内层函数的局部变量"
            },
            {
              "key": "D",
              "text": "闭包只能访问外部函数的局部变量"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 闭包使内层函数可以访问外层函数作用域中的变量和函数"
          },
          "explanation": "闭包允许内层函数访问其外层函数的作用域，包括变量和函数。"
        },
        {
          "id": "q-9624907eb5",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 6,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 6,
          "prompt": "在子类构造方法中，如果需要调用父类构造方法并传入参数，应该使用的是（）",
          "options": [
            {
              "key": "A",
              "text": "base()"
            },
            {
              "key": "B",
              "text": "parent()"
            },
            {
              "key": "C",
              "text": "father()"
            },
            {
              "key": "D",
              "text": "super()"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. super()"
          },
          "explanation": "调用父类构造方法的语法格式为super()。"
        },
        {
          "id": "q-a7ed213aaa",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 7,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 7,
          "prompt": "下列选项中，鸿蒙项目中默认提供的主模块目录是（）",
          "options": [
            {
              "key": "A",
              "text": "oh_modules"
            },
            {
              "key": "B",
              "text": "AppScope"
            },
            {
              "key": "C",
              "text": "entry"
            },
            {
              "key": "D",
              "text": "hvigor"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. entry"
          },
          "explanation": "entry目录用于存放应用模块文件，包括入口文件、代码和资源等，是默认的主模块目录。"
        },
        {
          "id": "q-14b8f67acc",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 8,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 8,
          "prompt": "在ArkUI中设置组件宽度时，默认使用的单位是（）",
          "options": [
            {
              "key": "A",
              "text": "mm"
            },
            {
              "key": "B",
              "text": "vp"
            },
            {
              "key": "C",
              "text": "px"
            },
            {
              "key": "D",
              "text": "dp"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. vp"
          },
          "explanation": ""
        },
        {
          "id": "q-97d3da6601",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 9,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 9,
          "prompt": "ArkTS中，类实现接口时必须？",
          "options": [
            {
              "key": "A",
              "text": "实现接口中所有的抽象方法"
            },
            {
              "key": "B",
              "text": "使用extends关键字"
            },
            {
              "key": "C",
              "text": "重写接口中的所有方法"
            },
            {
              "key": "D",
              "text": "包含接口中定义的所有属性"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 实现接口中所有的抽象方法"
          },
          "explanation": "ArkTS中类通过implements关键字实现接口，必须实现接口中所有的抽象方法；继承类使用extends关键字；接口中的默认方法可以不重写；接口不定义具体属性（只能定义抽象属性或常量）。"
        },
        {
          "id": "q-f5d20ce7b2",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 10,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 10,
          "prompt": "当使用router.back()方法时，若要返回到指定页面而不是前一页，应使用的属性是（）",
          "options": [
            {
              "key": "A",
              "text": "callback"
            },
            {
              "key": "B",
              "text": "url"
            },
            {
              "key": "C",
              "text": "mode"
            },
            {
              "key": "D",
              "text": "params"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. url"
          },
          "explanation": ""
        },
        {
          "id": "q-9ff3ba7555",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 11,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 11,
          "prompt": "如果一个接口继承了另一个接口，那么它会自动包含的有（）",
          "options": [
            {
              "key": "A",
              "text": "仅方法"
            },
            {
              "key": "B",
              "text": "属性和方法"
            },
            {
              "key": "C",
              "text": "仅属性"
            },
            {
              "key": "D",
              "text": "不包含任何属性和方法"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 属性和方法"
          },
          "explanation": "子接口会自动包含父接口中声明的属性和方法。"
        },
        {
          "id": "q-c8aa7140c5",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 12,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 12,
          "prompt": "在面向对象编程中，以下哪项说法‌不正确‌？（  ）",
          "options": [
            {
              "key": "A",
              "text": "接口定义了一组方法签名作为行为契约，但本身不能被直接实例化为对象"
            },
            {
              "key": "B",
              "text": "对象是类的具体实例，包含实际的状态（属性）和行为实现（方法），可直接用于业务逻辑执行‌"
            },
            {
              "key": "C",
              "text": "接口可以通过继承机制扩展其他接口，形成新的行为契约，且子接口可被直接实例化‌"
            },
            {
              "key": "D",
              "text": "一个类可以实现多个接口，但该类的对象必须同时满足所有接口的规范要求‌"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 接口可以通过继承机制扩展其他接口，形成新的行为契约，且子接口可被直接实例化‌"
          },
          "explanation": ""
        },
        {
          "id": "q-a4831532f8",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 13,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 13,
          "prompt": "下列选项中，用于调用在struct内定义的自定义构建方法的是（  ）",
          "options": [
            {
              "key": "A",
              "text": "customerBuilder()"
            },
            {
              "key": "B",
              "text": "@Builder function customBuilder() { }"
            },
            {
              "key": "C",
              "text": "@Builder customBuilder() { }"
            },
            {
              "key": "D",
              "text": "this.customBuilder()"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. this.customBuilder()"
          },
          "explanation": ""
        },
        {
          "id": "q-04c72ef8b4",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 14,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 14,
          "prompt": "当UIAbility被创建时调用，可以进行页面初始化操作的方法是（）",
          "options": [
            {
              "key": "A",
              "text": "onWindowStageCreate()"
            },
            {
              "key": "B",
              "text": "onCreate()"
            },
            {
              "key": "C",
              "text": "onDestroy()"
            },
            {
              "key": "D",
              "text": "onForeground()"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. onCreate()"
          },
          "explanation": ""
        },
        {
          "id": "q-13d8a79cbb",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 15,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 15,
          "prompt": "下列代码执行后，最终在控制台打印的结果为（）。\nfunction test(): string {\ntry {\nconsole.log(\"A\");\nthrow new Error(\"Intentional error\");\nreturn \"Try return\";\n} catch (e) {\nconsole.log(\"B\");\nreturn \"Catch return\";\n} finally {\nconsole.log(\"C\");\nreturn \"Finally return\";\n}\n}\nconsole.log(test());",
          "options": [
            {
              "key": "A",
              "text": "A B C Catch return"
            },
            {
              "key": "B",
              "text": "A C Finally return"
            },
            {
              "key": "C",
              "text": "A B C Try return"
            },
            {
              "key": "D",
              "text": "A B C Finally return"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. A B C Finally return"
          },
          "explanation": ""
        },
        {
          "id": "q-b0a3db419c",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 16,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 16,
          "prompt": "创建鸿蒙项目时，Bundle name通常使用的形式为（）",
          "options": [
            {
              "key": "A",
              "text": "反写域名的形式"
            },
            {
              "key": "B",
              "text": "数字序列"
            },
            {
              "key": "C",
              "text": "简单英文单词"
            },
            {
              "key": "D",
              "text": "随机字符组合"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 反写域名的形式"
          },
          "explanation": "Bundle name一般采用反写域名的形式设置，例如com.example.myapp。"
        },
        {
          "id": "q-c3e760a092",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 17,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 17,
          "prompt": "在Column组件的value参数的属性中，用于设置垂直方向上子组件之间间距的是（）",
          "options": [
            {
              "key": "A",
              "text": "gap"
            },
            {
              "key": "B",
              "text": "padding"
            },
            {
              "key": "C",
              "text": "space"
            },
            {
              "key": "D",
              "text": "margin"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. space"
          },
          "explanation": "space属性用于设置垂直方向上子组件之间的间距。"
        },
        {
          "id": "q-98513f3e8a",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 18,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 18,
          "prompt": "下列关于默认导出的说法中，正确的是()。",
          "options": [
            {
              "key": "A",
              "text": "一个文件中可以有多个默认导出"
            },
            {
              "key": "B",
              "text": "一个文件中只能有一个默认导出"
            },
            {
              "key": "C",
              "text": "默认导出不需要使用export关键字"
            },
            {
              "key": "D",
              "text": "默认导出需要指定名称"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 一个文件中只能有一个默认导出"
          },
          "explanation": "每个文件只能有一个默认导出，并且必须使用export default声明。"
        },
        {
          "id": "q-cde5342849",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 19,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 19,
          "prompt": "在路由表文件router_map.json中，用于指定子页名称的字段是（）",
          "options": [
            {
              "key": "A",
              "text": "name"
            },
            {
              "key": "B",
              "text": "buildFunction"
            },
            {
              "key": "C",
              "text": "routerMap"
            },
            {
              "key": "D",
              "text": "pageSourceFile"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. name"
          },
          "explanation": ""
        },
        {
          "id": "q-4c44c18162",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 20,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 20,
          "prompt": "在ArkUI中，用于扩展组件能力，支持复用私有属性和私有事件的装饰器是（）",
          "options": [
            {
              "key": "A",
              "text": "@Component"
            },
            {
              "key": "B",
              "text": "@Extend"
            },
            {
              "key": "C",
              "text": "@Styles"
            },
            {
              "key": "D",
              "text": "@Builder"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. @Extend"
          },
          "explanation": ""
        },
        {
          "id": "q-c572c54bb3",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 57,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 1,
          "prompt": "下列属性中，用于设置Scroll组件是否启用水平滚动的是（）",
          "options": [
            {
              "key": "A",
              "text": "bounce"
            },
            {
              "key": "B",
              "text": "horizontal"
            },
            {
              "key": "C",
              "text": "scrollable"
            },
            {
              "key": "D",
              "text": "vertical"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. horizontal"
          },
          "explanation": "horizontal属性用于设置是否启用水平滚动。"
        },
        {
          "id": "q-aa8ad1fad6",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 58,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 2,
          "prompt": "加载1000条数据时，下列哪种做法可能引发性能问题？（）",
          "options": [
            {
              "key": "A",
              "text": "在ListItem内部嵌套3层Column/Row"
            },
            {
              "key": "B",
              "text": "启用懒加载（lazyForEach）"
            },
            {
              "key": "C",
              "text": "使用ForEach绑定数据源"
            },
            {
              "key": "D",
              "text": "设置cachedCount=5"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 在ListItem内部嵌套3层Column/Row"
          },
          "explanation": ""
        },
        {
          "id": "q-828d1490a3",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 59,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 3,
          "prompt": "下列选项中，在构建UI时通常依赖的数据被称为（）",
          "options": [
            {
              "key": "A",
              "text": "状态"
            },
            {
              "key": "B",
              "text": "组件"
            },
            {
              "key": "C",
              "text": "生命周期"
            },
            {
              "key": "D",
              "text": "事件处理程序"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 状态"
          },
          "explanation": ""
        },
        {
          "id": "q-557ae73656",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 60,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 4,
          "prompt": "下面代码执行后，可能正确的顺序是（）\nconsole.log('1');\nasync function main() {\nconsole.log('2');\nawait task();\nconsole.log('4');\n}\nasync function task() {\nconsole.log('3');\n}\nmain();\nnew Promise<void>((resolve: Function) => {\nconsole.log('5');\nresolve();\n}).then(() => console.log('6'));\nconsole.log('7');",
          "options": [
            {
              "key": "A",
              "text": "1  2  3  5  7  4  6"
            },
            {
              "key": "B",
              "text": "1  5  2  3  7  6  4"
            },
            {
              "key": "C",
              "text": "1  2  3  5  4  6  7"
            },
            {
              "key": "D",
              "text": "1  2  3  4  5  6  7"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 1  2  3  5  7  4  6"
          },
          "explanation": ""
        },
        {
          "id": "q-d90c9dc4f2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 61,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 5,
          "prompt": "应该在哪个生命周期函数中释放组件占用的资源？（）",
          "options": [
            {
              "key": "A",
              "text": "onDestroy"
            },
            {
              "key": "B",
              "text": "aboutToRecycle"
            },
            {
              "key": "C",
              "text": "onPageHide"
            },
            {
              "key": "D",
              "text": "aboutToDisappear"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. aboutToDisappear"
          },
          "explanation": ""
        },
        {
          "id": "q-0b52e1e644",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 62,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 6,
          "prompt": "如果一个应用需要访问网络，需要申请的权限是（）",
          "options": [
            {
              "key": "A",
              "text": "ohos.permission.LOCATION"
            },
            {
              "key": "B",
              "text": "ohos.permission.READ_CONTACTS"
            },
            {
              "key": "C",
              "text": "ohos.permission.INTERNET"
            },
            {
              "key": "D",
              "text": "ohos.permission.CAMERA"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. ohos.permission.INTERNET"
          },
          "explanation": ""
        },
        {
          "id": "q-fcb92785fc",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 63,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 7,
          "prompt": "在ArkUI中，Grid组件主要用于的布局方式是（）",
          "options": [
            {
              "key": "A",
              "text": "网格布局"
            },
            {
              "key": "B",
              "text": "固定布局"
            },
            {
              "key": "C",
              "text": "弹性布局"
            },
            {
              "key": "D",
              "text": "表格布局"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 网格布局"
          },
          "explanation": "Grid组件是网格容器组件，用于创建网格布局。"
        },
        {
          "id": "q-f122519334",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 64,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 8,
          "prompt": "在面向对象编程中，以下哪项说法不正确？（）",
          "options": [
            {
              "key": "A",
              "text": "接口定义了一组方法签名作为行为契约，但本身不能被直接实例化为对象"
            },
            {
              "key": "B",
              "text": "一个类可以实现多个接口，但该类的对象必须同时满足所有接口的规范要求"
            },
            {
              "key": "C",
              "text": "接口可以通过继承机制扩展其他接口，形成新的行为契约，且子接口可被直接实例化"
            },
            {
              "key": "D",
              "text": "对象是类的具体实例，包含实际的状态（属性）和行为实现（方法），可直接用于业务逻辑执行"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 接口可以通过继承机制扩展其他接口，形成新的行为契约，且子接口可被直接实例化"
          },
          "explanation": ""
        },
        {
          "id": "q-e7f57bd486",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 65,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 9,
          "prompt": "在ArkUI中，用于决定是否渲染某个组件的条件渲染语句不包括的是（）",
          "options": [
            {
              "key": "A",
              "text": "if...else语句"
            },
            {
              "key": "B",
              "text": "if...else if...else语句"
            },
            {
              "key": "C",
              "text": "while语句"
            },
            {
              "key": "D",
              "text": "if语句"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. while语句"
          },
          "explanation": ""
        },
        {
          "id": "q-f98b8f0da6",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 66,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 10,
          "prompt": "关于Flex组件属性配置说法错误的是（）",
          "options": [
            {
              "key": "A",
              "text": "justifyContent属性用于设置Flex容器中子组件在主轴方向上的对齐方式"
            },
            {
              "key": "B",
              "text": "wrap属性用于设置Flex容器中子组件的换行方式"
            },
            {
              "key": "C",
              "text": "alignItems属性用于设置Flex容器中子组件在交叉轴方向上的对齐方式"
            },
            {
              "key": "D",
              "text": "direction属性用于设置Flex容器中子组件的排列方式，即交叉轴的方向"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. direction属性用于设置Flex容器中子组件的排列方式，即交叉轴的方向"
          },
          "explanation": ""
        },
        {
          "id": "q-36372c282d",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 67,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 11,
          "prompt": "下列代码执行后，最终在控制台打印的结果为（）。\nfunction test(): string {\ntry {\nconsole.log(\"A\");\nthrow new Error(\"Intentional error\");\nreturn \"Try return\";\n} catch (e) {\nconsole.log(\"B\");\nreturn \"Catch return\";\n} finally {\nconsole.log(\"C\");\nreturn \"Finally return\";\n}\n}\nconsole.log(test());",
          "options": [
            {
              "key": "A",
              "text": "A B C Try return"
            },
            {
              "key": "B",
              "text": "A B C Finally return"
            },
            {
              "key": "C",
              "text": "A B C Catch return"
            },
            {
              "key": "D",
              "text": "A C Finally return"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. A B C Finally return"
          },
          "explanation": ""
        },
        {
          "id": "q-8dad4d5304",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 68,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 12,
          "prompt": "UIAbility从前台转到后台时触发的方法是（）",
          "options": [
            {
              "key": "A",
              "text": "onBackground()"
            },
            {
              "key": "B",
              "text": "onWindowStageDestroy()"
            },
            {
              "key": "C",
              "text": "onDestroy()"
            },
            {
              "key": "D",
              "text": "onForeground()"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. onBackground()"
          },
          "explanation": ""
        },
        {
          "id": "q-f49ae2f104",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 69,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 13,
          "prompt": "在ArkUI中设置组件宽度时，默认使用的单位是（）",
          "options": [
            {
              "key": "A",
              "text": "dp"
            },
            {
              "key": "B",
              "text": "vp"
            },
            {
              "key": "C",
              "text": "mm"
            },
            {
              "key": "D",
              "text": "px"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. vp"
          },
          "explanation": ""
        },
        {
          "id": "q-06856b4025",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 70,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 14,
          "prompt": "以下哪种组件嵌套关系是正确的？（）",
          "options": [
            {
              "key": "A",
              "text": "ImageSpan ＞ Text ＞ Span"
            },
            {
              "key": "B",
              "text": "Text ＞ Span ＞ ImageSpan"
            },
            {
              "key": "C",
              "text": "ContainerSpan ＞ Span ＞ Text"
            },
            {
              "key": "D",
              "text": "Span ＞ Text＞ ContainerSpan"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. Text ＞ Span ＞ ImageSpan"
          },
          "explanation": ""
        },
        {
          "id": "q-cf44352dac",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 71,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 15,
          "prompt": "下列选项中，不属于鸿蒙模拟器对计算机的基本要求的是（）",
          "options": [
            {
              "key": "A",
              "text": "支持OpenGL 4.1及以上版本"
            },
            {
              "key": "B",
              "text": "至少16GB内存"
            },
            {
              "key": "C",
              "text": "安装了Android Studio"
            },
            {
              "key": "D",
              "text": "屏幕分辨率不低于1280x800像素"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 安装了Android Studio"
          },
          "explanation": "安装鸿蒙模拟器不需要Android Studio，但需要满足内存、图形处理能力和屏幕分辨率的要求。"
        },
        {
          "id": "q-e059de1528",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 72,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 16,
          "prompt": "在路由中，用于实现页面跳转并保留当前页的状态的方法是（）",
          "options": [
            {
              "key": "A",
              "text": "clear()"
            },
            {
              "key": "B",
              "text": "back()"
            },
            {
              "key": "C",
              "text": "replaceUrl()"
            },
            {
              "key": "D",
              "text": "pushUrl()"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. pushUrl()"
          },
          "explanation": ""
        },
        {
          "id": "q-4c12b7eff8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 73,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 17,
          "prompt": "在ArkUI中，List组件的主要作用是（）",
          "options": [
            {
              "key": "A",
              "text": "创建列表视图"
            },
            {
              "key": "B",
              "text": "显示图片"
            },
            {
              "key": "C",
              "text": "输入文本内容"
            },
            {
              "key": "D",
              "text": "调节设置值"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 创建列表视图"
          },
          "explanation": "List组件用于创建可以展示多个项目的列表视图。"
        },
        {
          "id": "q-645636b2f1",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 74,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 18,
          "prompt": "下列选项中，正确的箭头函数写法是（）",
          "options": [
            {
              "key": "B",
              "text": "let add = function(a:number, b:number) { return a + b; }"
            },
            {
              "key": "C",
              "text": "let add = (a:number, b:number) => return a + b;"
            },
            {
              "key": "D",
              "text": "let add = (a:number, b:number) => { return a + b; };"
            },
            {
              "key": "A",
              "text": "let add = function(a:number, b:number) => a + b;"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. let add = (a:number, b:number) => { return a + b; };"
          },
          "explanation": ""
        },
        {
          "id": "q-e0ab4a970c",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 75,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 19,
          "prompt": "在NavPathStack对象中，用于将指定子页压入栈中的方法是（）",
          "options": [
            {
              "key": "A",
              "text": "popToName()"
            },
            {
              "key": "B",
              "text": "pop()"
            },
            {
              "key": "C",
              "text": "replacePath()"
            },
            {
              "key": "D",
              "text": "pushPath()"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. pushPath()"
          },
          "explanation": ""
        },
        {
          "id": "q-e2d5234490",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 76,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 20,
          "prompt": "下列选项中，鸿蒙项目中默认提供的主模块目录是（）",
          "options": [
            {
              "key": "A",
              "text": "entry"
            },
            {
              "key": "B",
              "text": "oh_modules"
            },
            {
              "key": "C",
              "text": "AppScope"
            },
            {
              "key": "D",
              "text": "hvigor"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. entry"
          },
          "explanation": "entry目录用于存放应用模块文件，包括入口文件、代码和资源等，是默认的主模块目录。"
        },
        {
          "id": "q-3235a80c15",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 107,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 51,
          "prompt": "在Column组件的value参数的属性中，用于设置垂直方向上子组件之间间距的是（）",
          "options": [
            {
              "key": "A",
              "text": "space"
            },
            {
              "key": "B",
              "text": "margin"
            },
            {
              "key": "C",
              "text": "padding"
            },
            {
              "key": "D",
              "text": "gap"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. space"
          },
          "explanation": "space属性用于设置垂直方向上子组件之间的间距。"
        },
        {
          "id": "q-9affaaf008",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 108,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 52,
          "prompt": "在ArkTS中，定义泛型函数时，在函数名右侧指定泛型的符号是（）",
          "options": [
            {
              "key": "A",
              "text": "<>"
            },
            {
              "key": "B",
              "text": "()"
            },
            {
              "key": "C",
              "text": "{}"
            },
            {
              "key": "D",
              "text": "[]"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. <>"
          },
          "explanation": "定义泛型函数时，在函数名右侧添加<>符号来指定泛型。"
        },
        {
          "id": "q-1f148ca616",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 109,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 53,
          "prompt": "下列关于@Link装饰器的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "支持父子组件状态双向同步"
            },
            {
              "key": "B",
              "text": "只能在入口组件中使用"
            },
            {
              "key": "C",
              "text": "不支持设置初始值"
            },
            {
              "key": "D",
              "text": "用于装饰子组件中的状态变量"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 支持父子组件状态双向同步"
          },
          "explanation": ""
        },
        {
          "id": "q-7705ec7003",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 110,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 54,
          "prompt": "在ArkUI中，Scroll组件的主要作用是（）",
          "options": [
            {
              "key": "A",
              "text": "显示图片"
            },
            {
              "key": "B",
              "text": "创建滚动视图"
            },
            {
              "key": "C",
              "text": "调节设置值"
            },
            {
              "key": "D",
              "text": "输入文本内容"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 创建滚动视图"
          },
          "explanation": ""
        },
        {
          "id": "q-ee83b66af2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 111,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 55,
          "prompt": "在ArkUI中，Stack组件主要用于的布局方式是（）",
          "options": [
            {
              "key": "A",
              "text": "网格布局"
            },
            {
              "key": "B",
              "text": "堆叠布局"
            },
            {
              "key": "C",
              "text": "弹性布局"
            },
            {
              "key": "D",
              "text": "固定布局"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 堆叠布局"
          },
          "explanation": "Stack组件是堆叠容器组件，其子组件按照顺序依次入栈。"
        },
        {
          "id": "q-7b9da11460",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 112,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 56,
          "prompt": "在ArkUI中，用来定义一个方法使得该方法能够被组件调用以复用通用属性和事件的装饰器是（）",
          "options": [
            {
              "key": "A",
              "text": "@Styles"
            },
            {
              "key": "B",
              "text": "@BuilderParam"
            },
            {
              "key": "C",
              "text": "@Builder"
            },
            {
              "key": "D",
              "text": "@Extend"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. @Styles"
          },
          "explanation": ""
        },
        {
          "id": "q-4c4657cc53",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 113,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 57,
          "prompt": "下列属性中，用于设置Flex容器内子组件在主轴上的对齐方式的是（）",
          "options": [
            {
              "key": "A",
              "text": "alignItems"
            },
            {
              "key": "B",
              "text": "alignContent"
            },
            {
              "key": "C",
              "text": "justifyContent"
            },
            {
              "key": "D",
              "text": "flexWrap"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. justifyContent"
          },
          "explanation": ""
        },
        {
          "id": "q-ff3646dd72",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 114,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 58,
          "prompt": "下列选项中，属于华为应用市场推出的应用一站式服务平台的是（）",
          "options": [
            {
              "key": "A",
              "text": "AppGallery Connect(AGC)"
            },
            {
              "key": "B",
              "text": "DevEco Studio"
            },
            {
              "key": "C",
              "text": "ArkTS"
            },
            {
              "key": "D",
              "text": "ArkCompiler"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. AppGallery Connect(AGC)"
          },
          "explanation": "AppGallery Connect（AGC）是华为应用市场推出的应用一站式服务平台。"
        },
        {
          "id": "q-b5ba1c3157",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 115,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 59,
          "prompt": "鸿蒙ArkTS中，以下关于异常处理的描述错误的是？",
          "options": [
            {
              "key": "A",
              "text": "Exception是所有异常的父类"
            },
            {
              "key": "B",
              "text": "可以使用try-catch-finally语句捕获异常"
            },
            {
              "key": "C",
              "text": "finally块中的代码无论是否发生异常都会执行"
            },
            {
              "key": "D",
              "text": "throw语句可以抛出任意类型的对象"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. throw语句可以抛出任意类型的对象"
          },
          "explanation": "ArkTS中throw语句只能抛出Exception及其子类的实例，不能抛出任意类型对象。"
        },
        {
          "id": "q-87a64bbc77",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 116,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 60,
          "prompt": "在ArkUI中，用于实现导航页的组件是（）",
          "options": [
            {
              "key": "A",
              "text": "NavPathStack"
            },
            {
              "key": "B",
              "text": "Router"
            },
            {
              "key": "C",
              "text": "Navigation"
            },
            {
              "key": "D",
              "text": "NavDestination"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. Navigation"
          },
          "explanation": ""
        },
        {
          "id": "q-18b53c447b",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 117,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 61,
          "prompt": "在路由表文件router_map.json中，用于指定子页名称的字段是（）",
          "options": [
            {
              "key": "A",
              "text": "routerMap"
            },
            {
              "key": "B",
              "text": "buildFunction"
            },
            {
              "key": "C",
              "text": "name"
            },
            {
              "key": "D",
              "text": "pageSourceFile"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. name"
          },
          "explanation": ""
        },
        {
          "id": "q-990dce7ee5",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 118,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 62,
          "prompt": "下列选项中，正确的导入组件的方式是（）",
          "options": [
            {
              "key": "A",
              "text": "import MyComponent"
            },
            {
              "key": "B",
              "text": "import MyComponent='./MyComponent'"
            },
            {
              "key": "C",
              "text": "import './MyComponent' as MyComponent"
            },
            {
              "key": "D",
              "text": "import MyComponent from './MyComponent'"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. import MyComponent from './MyComponent'"
          },
          "explanation": ""
        },
        {
          "id": "q-87422c2ed7",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 119,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 63,
          "prompt": "在Navigation组件中，用于设置页面标题的属性是（）",
          "options": [
            {
              "key": "A",
              "text": "mode"
            },
            {
              "key": "B",
              "text": "title"
            },
            {
              "key": "C",
              "text": "menus"
            },
            {
              "key": "D",
              "text": "titleMode"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. title"
          },
          "explanation": ""
        },
        {
          "id": "q-ae4201c713",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 120,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 64,
          "prompt": "下列选项中，鸿蒙系统采用的设计架构的是（）",
          "options": [
            {
              "key": "A",
              "text": "分布式架构"
            },
            {
              "key": "B",
              "text": "集中式架构"
            },
            {
              "key": "C",
              "text": "模块化架构"
            },
            {
              "key": "D",
              "text": "层次架构"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. 分布式架构"
          },
          "explanation": "鸿蒙采用了分布式架构设计，以实现设备间的高效连接和通信。"
        },
        {
          "id": "q-c399528830",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 121,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 65,
          "prompt": "下列选项中，用于保存状态数据，并且状态数据变化会触发UI重新渲染的装饰器是（）",
          "options": [
            {
              "key": "A",
              "text": "@State"
            },
            {
              "key": "B",
              "text": "@Entry"
            },
            {
              "key": "C",
              "text": "@Preview"
            },
            {
              "key": "D",
              "text": "@Component"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. @State"
          },
          "explanation": ""
        },
        {
          "id": "q-dca330d0d7",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 148,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 92,
          "prompt": "在子类构造方法中，如果需要调用父类构造方法并传入参数，应该使用的是（）",
          "options": [
            {
              "key": "A",
              "text": "father()"
            },
            {
              "key": "B",
              "text": "super()"
            },
            {
              "key": "C",
              "text": "base()"
            },
            {
              "key": "D",
              "text": "parent()"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. super()"
          },
          "explanation": "调用父类构造方法的语法格式为super()。"
        },
        {
          "id": "q-c51ebfb945",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 149,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 93,
          "prompt": "当把一个字面量对象赋值给变量时，指定变量类型的方式为（）",
          "options": [
            {
              "key": "A",
              "text": "枚举"
            },
            {
              "key": "B",
              "text": "接口"
            },
            {
              "key": "C",
              "text": "数组"
            },
            {
              "key": "D",
              "text": "函数"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. 接口"
          },
          "explanation": "当把一个字面量对象赋值给变量时，可以通过接口定义变量的类型。"
        },
        {
          "id": "q-0032002f0b",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 150,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 94,
          "prompt": "下列选项中，对枚举的使用正确的是（）",
          "options": [
            {
              "key": "A",
              "text": "enum Color: {Red, Green, Blue}"
            },
            {
              "key": "B",
              "text": "enum Color (Red, Green, Blue)"
            },
            {
              "key": "C",
              "text": "enum Color {Red, Green, Blue}"
            },
            {
              "key": "D",
              "text": "enum Color = {Red, Green, Blue}"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. enum Color {Red, Green, Blue}"
          },
          "explanation": "正确的语法是使用enum关键字后跟枚举名和枚举常量列表。"
        },
        {
          "id": "q-39e0c8af5b",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 151,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 95,
          "prompt": "下列选项中，可以让子组件的状态与父组件的状态建立单向同步关系的装饰器是（）",
          "options": [
            {
              "key": "A",
              "text": "@Link"
            },
            {
              "key": "B",
              "text": "@State"
            },
            {
              "key": "C",
              "text": "@Provide"
            },
            {
              "key": "D",
              "text": "@Prop"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. @Prop"
          },
          "explanation": ""
        },
        {
          "id": "q-7fb0d3c7a2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 152,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 96,
          "prompt": "Image支持渐进式图片加载的属性是（）",
          "options": [
            {
              "key": "A",
              "text": "progressive"
            },
            {
              "key": "B",
              "text": "interlaced"
            },
            {
              "key": "C",
              "text": "gradual"
            },
            {
              "key": "D",
              "text": "ArkUI5.0不支持"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. ArkUI5.0不支持"
          },
          "explanation": ""
        },
        {
          "id": "q-44022f02ca",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 153,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 97,
          "prompt": "当使用router.back()方法时，若要返回到指定页面而不是前一页，应使用的属性是（）",
          "options": [
            {
              "key": "A",
              "text": "url"
            },
            {
              "key": "B",
              "text": "callback"
            },
            {
              "key": "C",
              "text": "params"
            },
            {
              "key": "D",
              "text": "mode"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. url"
          },
          "explanation": ""
        },
        {
          "id": "q-6efa712017",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 154,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 98,
          "prompt": "下列关于@Builder装饰器的说法中，正确的是（）",
          "options": [
            {
              "key": "A",
              "text": "必须定义在struct外"
            },
            {
              "key": "B",
              "text": "只能用于定义样式"
            },
            {
              "key": "C",
              "text": "可以被多个组件调用"
            },
            {
              "key": "D",
              "text": "不能传递参数"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. 可以被多个组件调用"
          },
          "explanation": ""
        },
        {
          "id": "q-b9446f3c94",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 155,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 99,
          "prompt": "当UIAbility被创建时调用，可以进行页面初始化操作的方法是（）",
          "options": [
            {
              "key": "A",
              "text": "onForeground()"
            },
            {
              "key": "B",
              "text": "onCreate()"
            },
            {
              "key": "C",
              "text": "onWindowStageCreate()"
            },
            {
              "key": "D",
              "text": "onDestroy()"
            }
          ],
          "answer": {
            "keys": [
              "B"
            ],
            "text": "B. onCreate()"
          },
          "explanation": ""
        },
        {
          "id": "q-a6e312e5b8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 156,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 100,
          "prompt": "在ArkUI中，循环渲染语句主要使用的函数是（）",
          "options": [
            {
              "key": "A",
              "text": "Map()"
            },
            {
              "key": "B",
              "text": "If()"
            },
            {
              "key": "C",
              "text": "ForEach()"
            },
            {
              "key": "D",
              "text": "List()"
            }
          ],
          "answer": {
            "keys": [
              "C"
            ],
            "text": "C. ForEach()"
          },
          "explanation": ""
        },
        {
          "id": "q-28b8f5f4bb",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 157,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 101,
          "prompt": "创建鸿蒙项目时，Bundle name通常使用的形式为（）",
          "options": [
            {
              "key": "A",
              "text": "随机字符组合"
            },
            {
              "key": "B",
              "text": "数字序列"
            },
            {
              "key": "C",
              "text": "简单英文单词"
            },
            {
              "key": "D",
              "text": "反写域名的形式"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. 反写域名的形式"
          },
          "explanation": "Bundle name一般采用反写域名的形式设置，例如com.example.myapp。"
        },
        {
          "id": "q-5da313abf0",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 158,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 102,
          "prompt": "以下关于鸿蒙状态管理的描述，正确的是？",
          "options": [
            {
              "key": "A",
              "text": "@Link装饰的变量需要父组件传递不可变数据"
            },
            {
              "key": "B",
              "text": "@Provide/@Consume是用于父子组件间的双向同步"
            },
            {
              "key": "C",
              "text": "@State装饰的变量只能在当前组件内部修改"
            },
            {
              "key": "D",
              "text": "@Prop装饰的变量是单向同步的父组件状态"
            }
          ],
          "answer": {
            "keys": [
              "D"
            ],
            "text": "D. @Prop装饰的变量是单向同步的父组件状态"
          },
          "explanation": "@Prop是单向同步父组件的状态，子组件修改不会影响父组件；@State可以在组件内部修改且影响UI；@Link是双向同步；@Provide/@Consume是跨层级的状态传递。"
        },
        {
          "id": "q-df7067214e",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 159,
          "type": "single",
          "typeLabel": "单选",
          "mode": "single",
          "originalNumber": 103,
          "prompt": "在ArkUI中，用于将一个自定义组件标记为页面入口组件的装饰器是（）",
          "options": [
            {
              "key": "A",
              "text": "@Entry"
            },
            {
              "key": "B",
              "text": "@State"
            },
            {
              "key": "C",
              "text": "@Component"
            },
            {
              "key": "D",
              "text": "@Preview"
            }
          ],
          "answer": {
            "keys": [
              "A"
            ],
            "text": "A. @Entry"
          },
          "explanation": "@Entry装饰器用于将自定义组件标记为页面的入口组件。"
        },
        {
          "id": "q-b63214abec",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 31,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 31,
          "prompt": "当把一个对象赋值给变量、参数或属性后，会发生的有（）",
          "options": [
            {
              "key": "A",
              "text": "对象被复制一份"
            },
            {
              "key": "B",
              "text": "值传递"
            },
            {
              "key": "C",
              "text": "引用传递"
            },
            {
              "key": "D",
              "text": "多个变量引用同一个对象"
            }
          ],
          "answer": {
            "keys": [
              "C",
              "D"
            ],
            "text": "C. 引用传递；D. 多个变量引用同一个对象"
          },
          "explanation": "当对象赋值给其他变量时，会发生引用传递，并且多个变量会引用同一个对象。"
        },
        {
          "id": "q-ad577ccb1a",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 32,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 32,
          "prompt": "下列选项中，Row组件的常用属性有（）",
          "options": [
            {
              "key": "A",
              "text": "alignItems"
            },
            {
              "key": "B",
              "text": "rowsTemplate"
            },
            {
              "key": "C",
              "text": "justifyContent"
            },
            {
              "key": "D",
              "text": "columnsTemplate"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C"
            ],
            "text": "A. alignItems；C. justifyContent"
          },
          "explanation": ""
        },
        {
          "id": "q-ec43a53be9",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 33,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 33,
          "prompt": "以下关于Column容器内子组件在水平方向上的对齐方式的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "HorizontalAlign.Center表示居中对齐"
            },
            {
              "key": "B",
              "text": "HorizontalAlign.End表示右对齐"
            },
            {
              "key": "C",
              "text": "HorizontalAlign.Stretch表示拉伸对齐"
            },
            {
              "key": "D",
              "text": "HorizontalAlign.Start表示左对齐"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. HorizontalAlign.Center表示居中对齐；B. HorizontalAlign.End表示右对齐；D. HorizontalAlign.Start表示左对齐"
          },
          "explanation": ""
        },
        {
          "id": "q-7ad1544378",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 34,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 34,
          "prompt": "以下关于Row容器内子组件在垂直方向上的对齐方式的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "VerticalAlign.Bottom表示底部对齐"
            },
            {
              "key": "B",
              "text": "VerticalAlign.Center表示居中对齐"
            },
            {
              "key": "C",
              "text": "VerticalAlign.Top表示顶部对齐"
            },
            {
              "key": "D",
              "text": "VerticalAlign.Stretch表示拉伸对齐"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. VerticalAlign.Bottom表示底部对齐；B. VerticalAlign.Center表示居中对齐；C. VerticalAlign.Top表示顶部对齐"
          },
          "explanation": ""
        },
        {
          "id": "q-384039d2fb",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 35,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 35,
          "prompt": "关于ArkUI中Button组件的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "disabled属性可以设置按钮是否禁用"
            },
            {
              "key": "B",
              "text": "type属性可以设置按钮样式（如capsule、circle）"
            },
            {
              "key": "C",
              "text": "Button组件可以嵌套其他组件（如Image）"
            },
            {
              "key": "D",
              "text": "onClick事件用于绑定点击回调函数"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. disabled属性可以设置按钮是否禁用；B. type属性可以设置按钮样式（如capsule、circle）；C. Button组件可以嵌套其他组件（如Image）；D. onClick事件用于绑定点击回调函数"
          },
          "explanation": "Button组件的type样式、onClick事件、嵌套能力、disabled状态均正确，ABCD均符合特性。"
        },
        {
          "id": "q-f8eb26878c",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 36,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 36,
          "prompt": "关于ArkUI中List组件的描述，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "List组件默认支持下拉刷新"
            },
            {
              "key": "B",
              "text": "可以通过ForEach循环渲染列表项"
            },
            {
              "key": "C",
              "text": "LazyForEach用于实现列表懒加载"
            },
            {
              "key": "D",
              "text": "onScroll事件可以监听列表滚动状态"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "C",
              "D"
            ],
            "text": "B. 可以通过ForEach循环渲染列表项；C. LazyForEach用于实现列表懒加载；D. onScroll事件可以监听列表滚动状态"
          },
          "explanation": "List组件默认不支持下拉刷新（需结合Refresh组件），故D错误；ForEach渲染、LazyForEach懒加载、onScroll监听正确，ABC正确。"
        },
        {
          "id": "q-745f04208e",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 37,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 37,
          "prompt": "下列选项中，属于鸿蒙特点的有（）",
          "options": [
            {
              "key": "A",
              "text": "流畅的用户体验"
            },
            {
              "key": "B",
              "text": "分布式架构"
            },
            {
              "key": "C",
              "text": "开放生态"
            },
            {
              "key": "D",
              "text": "较高的资源占用"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 流畅的用户体验；B. 分布式架构；C. 开放生态"
          },
          "explanation": ""
        },
        {
          "id": "q-c6050bd466",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 38,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 38,
          "prompt": "关于鸿蒙应用路由管理的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "router.back可以返回上一页"
            },
            {
              "key": "B",
              "text": "router.clear可以清空路由栈"
            },
            {
              "key": "C",
              "text": "可以通过router.pushUrl实现页面跳转"
            },
            {
              "key": "D",
              "text": "路由参数可以通过params传递"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. router.back可以返回上一页；B. router.clear可以清空路由栈；C. 可以通过router.pushUrl实现页面跳转；D. 路由参数可以通过params传递"
          },
          "explanation": "鸿蒙路由的pushUrl跳转、back返回、params传参、clear清栈均正确，ABCD均符合路由管理特性。"
        },
        {
          "id": "q-c78a4c2e77",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 39,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 39,
          "prompt": "当选择Empty Ability作为项目模板后，在填写信息界面需要指定的内容有（）",
          "options": [
            {
              "key": "A",
              "text": "Save location"
            },
            {
              "key": "B",
              "text": "Bundle name"
            },
            {
              "key": "C",
              "text": "Device type"
            },
            {
              "key": "D",
              "text": "Project name"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. Save location；B. Bundle name；C. Device type；D. Project name"
          },
          "explanation": ""
        },
        {
          "id": "q-56e80fea45",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 40,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 40,
          "prompt": "关于Grid组件支持的不同配置选项，下列描述中正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "columnsTemplate可以设置为'1fr 1fr 2fr'来定义3列"
            },
            {
              "key": "B",
              "text": "rowsGap用于设置行与行之间的间距，默认值为0"
            },
            {
              "key": "C",
              "text": "columnsGap默认值为10"
            },
            {
              "key": "D",
              "text": "rowsTemplate可以设置为'1fr 1fr 2fr'来定义3行"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. columnsTemplate可以设置为'1fr 1fr 2fr'来定义3列；B. rowsGap用于设置行与行之间的间距，默认值为0；D. rowsTemplate可以设置为'1fr 1fr 2fr'来定义3行"
          },
          "explanation": ""
        },
        {
          "id": "q-6f128f8589",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 87,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 31,
          "prompt": "下列选项中，Button组件支持的类型有（）",
          "options": [
            {
              "key": "A",
              "text": "ButtonType.Capsule"
            },
            {
              "key": "B",
              "text": "ButtonType.Normal"
            },
            {
              "key": "C",
              "text": "ButtonType.Square"
            },
            {
              "key": "D",
              "text": "ButtonType.Circle"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. ButtonType.Capsule；B. ButtonType.Normal；D. ButtonType.Circle"
          },
          "explanation": ""
        },
        {
          "id": "q-adce9e4ad8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 88,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 32,
          "prompt": "关于变量的作用域，下列说法正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "变量的作用域决定了变量的可见性和生命周期"
            },
            {
              "key": "B",
              "text": "块级作用域在大括号{}范围内"
            },
            {
              "key": "C",
              "text": "函数内部无法访问到外部的变量"
            },
            {
              "key": "D",
              "text": "在同一作用域内不能声明两个同名的变量"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. 变量的作用域决定了变量的可见性和生命周期；B. 块级作用域在大括号{}范围内；D. 在同一作用域内不能声明两个同名的变量"
          },
          "explanation": "在函数内部可以访问外部的变量。"
        },
        {
          "id": "q-9d0abd9a04",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 89,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 33,
          "prompt": "关于JavaScript、TypeScript和ArkTS的关系，下列说法正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "ArkTS扩展了TypeScript的功能"
            },
            {
              "key": "B",
              "text": "这3种语言都属于强类型语言"
            },
            {
              "key": "C",
              "text": "JavaScript是ECMAScript标准的一种实现"
            },
            {
              "key": "D",
              "text": "TypeScript是JavaScript的一个严格子集"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C"
            ],
            "text": "A. ArkTS扩展了TypeScript的功能；C. JavaScript是ECMAScript标准的一种实现"
          },
          "explanation": "JavaScript实现了ECMAScript标准；ArkTS在TypeScript基础上进行了扩展，增强了执行稳定性和性能。"
        },
        {
          "id": "q-b1d704d3c9",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 90,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 34,
          "prompt": "关于ArkUI中Input组件的描述，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "placeholder属性用于显示输入提示文本"
            },
            {
              "key": "B",
              "text": "type属性可以设置输入框类型（如text、password）"
            },
            {
              "key": "C",
              "text": "value属性可以双向绑定输入框内容"
            },
            {
              "key": "D",
              "text": "onChange事件可以监听输入内容的变化"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. placeholder属性用于显示输入提示文本；B. type属性可以设置输入框类型（如text、password）；C. value属性可以双向绑定输入框内容；D. onChange事件可以监听输入内容的变化"
          },
          "explanation": "Input组件的type、placeholder、onChange事件、双向绑定均正确，ABCD均符合特性。"
        },
        {
          "id": "q-4a0d907baa",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 91,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 35,
          "prompt": "以下关于ArkTS运算符和流程控制的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "for循环的初始化表达式可以声明多个变量"
            },
            {
              "key": "B",
              "text": "switch语句的case分支必须包含break"
            },
            {
              "key": "C",
              "text": "三元运算符的结果类型由第二个操作数决定"
            },
            {
              "key": "D",
              "text": "&&运算符具有短路求值特性"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "D"
            ],
            "text": "A. for循环的初始化表达式可以声明多个变量；D. &&运算符具有短路求值特性"
          },
          "explanation": "switch的case分支可以没有break（会穿透），三元运算符结果类型由两个操作数共同决定。"
        },
        {
          "id": "q-69bf7e9af9",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 92,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 36,
          "prompt": "关于ArkUI条件渲染和循环渲染的描述，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "条件渲染的条件变量必须是@State装饰的状态变量"
            },
            {
              "key": "B",
              "text": "LazyForEach比ForEach更适合大数据量渲染"
            },
            {
              "key": "C",
              "text": "ForEach的itemGenerator参数用于生成列表数据"
            },
            {
              "key": "D",
              "text": "if/else可以根据条件渲染不同组件"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "C",
              "D"
            ],
            "text": "B. LazyForEach比ForEach更适合大数据量渲染；C. ForEach的itemGenerator参数用于生成列表数据；D. if/else可以根据条件渲染不同组件"
          },
          "explanation": "条件渲染的条件变量可以是任意响应式变量（如@State、@Prop等），并非必须是@State。"
        },
        {
          "id": "q-c0d0b26d16",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 93,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 37,
          "prompt": "关于ArkTS函数和泛型的描述，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "箭头函数的this指向定义时的上下文"
            },
            {
              "key": "B",
              "text": "函数参数可以指定默认值"
            },
            {
              "key": "C",
              "text": "泛型类可以约束类型参数的范围"
            },
            {
              "key": "D",
              "text": "泛型方法的类型参数必须显式指定"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 箭头函数的this指向定义时的上下文；B. 函数参数可以指定默认值；C. 泛型类可以约束类型参数的范围"
          },
          "explanation": "泛型方法的类型参数可以通过类型推断省略。"
        },
        {
          "id": "q-adc8c35be8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 94,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 38,
          "prompt": "下列选项中，属于鸿蒙提供的开发技术的有（）",
          "options": [
            {
              "key": "A",
              "text": "Android SDK"
            },
            {
              "key": "B",
              "text": "ArkTS"
            },
            {
              "key": "C",
              "text": "ArkCompiler"
            },
            {
              "key": "D",
              "text": "DevEco Studio"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "C",
              "D"
            ],
            "text": "B. ArkTS；C. ArkCompiler；D. DevEco Studio"
          },
          "explanation": ""
        },
        {
          "id": "q-a894cd7ba8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 95,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 39,
          "prompt": "下列选项中，需要用到super关键字的有（）",
          "options": [
            {
              "key": "A",
              "text": "创建父类的对象"
            },
            {
              "key": "B",
              "text": "调用父类的普通方法"
            },
            {
              "key": "C",
              "text": "访问父类的属性"
            },
            {
              "key": "D",
              "text": "调用父类的构造方法"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "D"
            ],
            "text": "B. 调用父类的普通方法；D. 调用父类的构造方法"
          },
          "explanation": "super关键字用于调用父类的构造方法和非构造方法，但不直接用于访问父类的属性或创建父类对象。"
        },
        {
          "id": "q-582c9f7eed",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 96,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 40,
          "prompt": "关于ArkUI中Text组件的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "textAlign属性用于设置文本的对齐方式"
            },
            {
              "key": "B",
              "text": "maxLines属性可以限制文本的最大行数"
            },
            {
              "key": "C",
              "text": "可以通过fontSize属性设置字体大小"
            },
            {
              "key": "D",
              "text": "Text组件默认支持长按复制文本"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. textAlign属性用于设置文本的对齐方式；B. maxLines属性可以限制文本的最大行数；C. 可以通过fontSize属性设置字体大小"
          },
          "explanation": "Text组件默认不支持长按复制（需额外配置）。"
        },
        {
          "id": "q-e76ebc40b5",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 129,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 73,
          "prompt": "关于ArkUI中Button组件的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "onClick事件用于绑定点击回调函数"
            },
            {
              "key": "B",
              "text": "Button组件可以嵌套其他组件（如Image）"
            },
            {
              "key": "C",
              "text": "disabled属性可以设置按钮是否禁用"
            },
            {
              "key": "D",
              "text": "type属性可以设置按钮样式（如capsule、circle）"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. onClick事件用于绑定点击回调函数；B. Button组件可以嵌套其他组件（如Image）；C. disabled属性可以设置按钮是否禁用；D. type属性可以设置按钮样式（如capsule、circle）"
          },
          "explanation": "Button组件的type样式、onClick事件、嵌套能力、disabled状态均正确。"
        },
        {
          "id": "q-46cf0bd6ab",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 130,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 74,
          "prompt": "下列选项中，关于导入和导出的描述正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "在一个文件中，导入的代码必须写在其他代码的前面"
            },
            {
              "key": "B",
              "text": "导入使用的关键字是import"
            },
            {
              "key": "C",
              "text": "如果想要更改导入的名称，可以在名称后面加上“as新名称”"
            },
            {
              "key": "D",
              "text": "默认导出和命名导出的导入方式相同"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. 在一个文件中，导入的代码必须写在其他代码的前面；B. 导入使用的关键字是import；C. 如果想要更改导入的名称，可以在名称后面加上“as新名称”"
          },
          "explanation": "默认导出和命名导出导入格式不一致。"
        },
        {
          "id": "q-3815ca8be7",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 131,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 75,
          "prompt": "关于鸿蒙应用路由管理的说法，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "router.clear可以清空路由栈"
            },
            {
              "key": "B",
              "text": "可以通过router.pushUrl实现页面跳转"
            },
            {
              "key": "C",
              "text": "路由参数可以通过params传递"
            },
            {
              "key": "D",
              "text": "router.back可以返回上一页"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. router.clear可以清空路由栈；B. 可以通过router.pushUrl实现页面跳转；C. 路由参数可以通过params传递；D. router.back可以返回上一页"
          },
          "explanation": ""
        },
        {
          "id": "q-7b11f125d3",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 132,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 76,
          "prompt": "关于继承关系，下列说法是正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "继承层次不宜过深"
            },
            {
              "key": "B",
              "text": "继承只能单继承，不能多继承"
            },
            {
              "key": "C",
              "text": "使用继承可以减少重复代码"
            },
            {
              "key": "D",
              "text": "继承有助于代码复用"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C",
              "D"
            ],
            "text": "A. 继承层次不宜过深；C. 使用继承可以减少重复代码；D. 继承有助于代码复用"
          },
          "explanation": "继承确实有助于代码复用，并且建议继承层次不要过深以保持代码清晰，同时它可以减少重复代码。"
        },
        {
          "id": "q-57280c8d8d",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 133,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 77,
          "prompt": "下列选项中，属于ArkUI中的通用属性和事件的有（）",
          "options": [
            {
              "key": "A",
              "text": "width"
            },
            {
              "key": "B",
              "text": "border"
            },
            {
              "key": "C",
              "text": "backgroundColor"
            },
            {
              "key": "D",
              "text": "onClick"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C",
              "D"
            ],
            "text": "A. width；B. border；C. backgroundColor；D. onClick"
          },
          "explanation": ""
        },
        {
          "id": "q-da9255ac25",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 134,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 78,
          "prompt": "下列关于循环渲染语句的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "可以减少重复代码的编写"
            },
            {
              "key": "B",
              "text": "用于控制组件的显示和隐藏"
            },
            {
              "key": "C",
              "text": "能够根据数组元素动态创建组件"
            },
            {
              "key": "D",
              "text": "无法自定义键生成规则"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C"
            ],
            "text": "A. 可以减少重复代码的编写；C. 能够根据数组元素动态创建组件"
          },
          "explanation": "循环渲染不仅减少了重复代码，还允许根据数组内容动态创建组件，并且可以通过keyGenerator自定义键生成规则。"
        },
        {
          "id": "q-b7c9fc2cd9",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 135,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 79,
          "prompt": "下列选项中，TypeScript相对于JavaScript的优势有（）",
          "options": [
            {
              "key": "A",
              "text": "不支持接口和泛型"
            },
            {
              "key": "B",
              "text": "支持静态类型检查"
            },
            {
              "key": "C",
              "text": "只能在浏览器环境中运行"
            },
            {
              "key": "D",
              "text": "提供更严格的语法规则"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "D"
            ],
            "text": "B. 支持静态类型检查；D. 提供更严格的语法规则"
          },
          "explanation": "TypeScript支持静态类型检查和更严格的语法规则，并且它不仅仅限于浏览器环境。"
        },
        {
          "id": "q-3514e98017",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 136,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 80,
          "prompt": "关于装饰器的使用，下列说法正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "@Preview仅用于预览非入口组件"
            },
            {
              "key": "B",
              "text": "@Entry和@Component可以同时使用"
            },
            {
              "key": "C",
              "text": "装饰器可以写在同一行或单独一行"
            },
            {
              "key": "D",
              "text": "@State装饰器不需要设置初始值"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "C"
            ],
            "text": "A. @Preview仅用于预览非入口组件；B. @Entry和@Component可以同时使用；C. 装饰器可以写在同一行或单独一行"
          },
          "explanation": ""
        },
        {
          "id": "q-3e49b4fbe2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 137,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 81,
          "prompt": "下列关于条件渲染语句的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "不能嵌套使用"
            },
            {
              "key": "B",
              "text": "可以用来控制组件是否渲染"
            },
            {
              "key": "C",
              "text": "仅支持Image组件"
            },
            {
              "key": "D",
              "text": "可以根据用户交互更新渲染"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "D"
            ],
            "text": "B. 可以用来控制组件是否渲染；D. 可以根据用户交互更新渲染"
          },
          "explanation": ""
        },
        {
          "id": "q-a132cde8e8",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 168,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 112,
          "prompt": "下列选项中，Row组件的常用属性有（）",
          "options": [
            {
              "key": "A",
              "text": "rowsTemplate"
            },
            {
              "key": "B",
              "text": "columnsTemplate"
            },
            {
              "key": "C",
              "text": "alignItems"
            },
            {
              "key": "D",
              "text": "justifyContent"
            }
          ],
          "answer": {
            "keys": [
              "C",
              "D"
            ],
            "text": "C. alignItems；D. justifyContent"
          },
          "explanation": ""
        },
        {
          "id": "q-85b9deab10",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 169,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 113,
          "prompt": "以下关于Column容器内子组件在水平方向上的对齐方式的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "HorizontalAlign.End表示右对齐"
            },
            {
              "key": "B",
              "text": "HorizontalAlign.Stretch表示拉伸对齐"
            },
            {
              "key": "C",
              "text": "HorizontalAlign.Start表示左对齐"
            },
            {
              "key": "D",
              "text": "HorizontalAlign.Center表示居中对齐"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C",
              "D"
            ],
            "text": "A. HorizontalAlign.End表示右对齐；C. HorizontalAlign.Start表示左对齐；D. HorizontalAlign.Center表示居中对齐"
          },
          "explanation": ""
        },
        {
          "id": "q-9a2081f4bd",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 170,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 114,
          "prompt": "下列关于@Builder装饰器的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "不能传递参数"
            },
            {
              "key": "B",
              "text": "可作为方法被多次调用"
            },
            {
              "key": "C",
              "text": "能提高代码复用性"
            },
            {
              "key": "D",
              "text": "能封装复杂布局"
            }
          ],
          "answer": {
            "keys": [
              "B",
              "C",
              "D"
            ],
            "text": "B. 可作为方法被多次调用；C. 能提高代码复用性；D. 能封装复杂布局"
          },
          "explanation": ""
        },
        {
          "id": "q-f8a2f9ab46",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 171,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 115,
          "prompt": "关于ArkUI垂直布局（Column）的描述，正确的有哪些？",
          "options": [
            {
              "key": "A",
              "text": "Column的宽度默认与父组件一致"
            },
            {
              "key": "B",
              "text": "可以通过space属性设置子组件间距"
            },
            {
              "key": "C",
              "text": "justifyContent属性用于设置交叉轴对齐方式"
            },
            {
              "key": "D",
              "text": "子组件默认沿垂直方向排列"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. Column的宽度默认与父组件一致；B. 可以通过space属性设置子组件间距；D. 子组件默认沿垂直方向排列"
          },
          "explanation": "justifyContent设置主轴（垂直）对齐方式，alignItems设置交叉轴（水平）对齐，故C错误。"
        },
        {
          "id": "q-0d86a1a79e",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 172,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 116,
          "prompt": "关于自增和自减运算符（++和--），下列描述正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "后置自增（如 a++）会先使用a的当前值进行后续计算，然后才将a加1"
            },
            {
              "key": "B",
              "text": "前置自增（如++a）会先将a加1再使用a的新值进行后续计算"
            },
            {
              "key": "C",
              "text": "前置自减（如--a）与后置自减（如 a--）效果相同"
            },
            {
              "key": "D",
              "text": "自增和自减运算符每次只能加1和减1"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. 后置自增（如 a++）会先使用a的当前值进行后续计算，然后才将a加1；B. 前置自增（如++a）会先将a加1再使用a的新值进行后续计算；D. 自增和自减运算符每次只能加1和减1"
          },
          "explanation": "前置运算符先修改变量值再使用，而后置运算符先使用变量原值再修改。"
        },
        {
          "id": "q-58aee8710f",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 173,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 117,
          "prompt": "以下关于Row容器内子组件在垂直方向上的对齐方式的描述中，正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "VerticalAlign.Center表示居中对齐"
            },
            {
              "key": "B",
              "text": "VerticalAlign.Top表示顶部对齐"
            },
            {
              "key": "C",
              "text": "VerticalAlign.Stretch表示拉伸对齐"
            },
            {
              "key": "D",
              "text": "VerticalAlign.Bottom表示底部对齐"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "B",
              "D"
            ],
            "text": "A. VerticalAlign.Center表示居中对齐；B. VerticalAlign.Top表示顶部对齐；D. VerticalAlign.Bottom表示底部对齐"
          },
          "explanation": ""
        },
        {
          "id": "q-557e938c98",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 174,
          "type": "multiple",
          "typeLabel": "多选",
          "mode": "multiple",
          "originalNumber": 118,
          "prompt": "关于组件的导出和导入，下列描述正确的有（）",
          "options": [
            {
              "key": "A",
              "text": "可以通过添加default关键字实现默认导出"
            },
            {
              "key": "B",
              "text": "导出组件时必须使用import关键字"
            },
            {
              "key": "C",
              "text": "可以在一个文件中同时导出多个组件"
            },
            {
              "key": "D",
              "text": "使用import关键字可以对组件进行导入"
            }
          ],
          "answer": {
            "keys": [
              "A",
              "C",
              "D"
            ],
            "text": "A. 可以通过添加default关键字实现默认导出；C. 可以在一个文件中同时导出多个组件；D. 使用import关键字可以对组件进行导入"
          },
          "explanation": ""
        },
        {
          "id": "q-0f3dfb5f09",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 21,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 21,
          "prompt": "在定义函数时，如果没有返回值，可以用【】来表示。",
          "options": [],
          "answer": {
            "blanks": [
              "void"
            ],
            "text": "void"
          },
          "explanation": ""
        },
        {
          "id": "q-4a9dee6995",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 22,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 22,
          "prompt": "ArkUI中设置边框圆角半径的属性是【】。",
          "options": [],
          "answer": {
            "blanks": [
              "borderRadius 答案解析：borderRadius属性用于设置边框的圆角半径"
            ],
            "text": "borderRadius 答案解析：borderRadius属性用于设置边框的圆角半径"
          },
          "explanation": "borderRadius属性用于设置边框的圆角半径。"
        },
        {
          "id": "q-3e4f2b6735",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 23,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 23,
          "prompt": "在entry/src/main目录中，【】用于存放ArkTS源码文件。",
          "options": [],
          "answer": {
            "blanks": [
              "ets"
            ],
            "text": "ets"
          },
          "explanation": ""
        },
        {
          "id": "q-112217da32",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 24,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 24,
          "prompt": "将DevEco Studio界面设置为中文的过程中，在Settings对话框中输入【】来查找并启用中文插件。",
          "options": [],
          "answer": {
            "blanks": [
              "Chinese"
            ],
            "text": "Chinese"
          },
          "explanation": ""
        },
        {
          "id": "q-50c1a8ff9f",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 25,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 25,
          "prompt": "在类的大括号内定义【】方法，用于初始化类成员。",
          "options": [],
          "answer": {
            "blanks": [
              "constructor",
              "构造"
            ],
            "text": "constructor;构造"
          },
          "explanation": ""
        },
        {
          "id": "q-9f35c8a4b1",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 26,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 26,
          "prompt": "若要设置Flex容器内的子组件沿垂直方向排列，应将alue参数的direction属性设置为【】。",
          "options": [],
          "answer": {
            "blanks": [
              "FlexDirection.Column"
            ],
            "text": "FlexDirection.Column"
          },
          "explanation": ""
        },
        {
          "id": "q-4d2996d945",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 27,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 27,
          "prompt": "要从字符串\"Hello World!\"中提取出\"World\"，可以使用slice(【】, 11)。",
          "options": [],
          "answer": {
            "blanks": [
              "答案解析：从索引6开始到索引11（不包括11）提取得到\"World\""
            ],
            "text": "答案解析：从索引6开始到索引11（不包括11）提取得到\"World\""
          },
          "explanation": "从索引6开始到索引11（不包括11）提取得到\"World\"。"
        },
        {
          "id": "q-13e5abfe65",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 28,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 28,
          "prompt": "在ArkUI中，通过【】方法可以为组件的不同内部状态设置样式。",
          "options": [],
          "answer": {
            "blanks": [
              "stateStyles() 答案解析：stateStyles()方法用于为组件的不同内部状态设置样式"
            ],
            "text": "stateStyles() 答案解析：stateStyles()方法用于为组件的不同内部状态设置样式"
          },
          "explanation": "stateStyles()方法用于为组件的不同内部状态设置样式。"
        },
        {
          "id": "q-2195bcf4a7",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 29,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 29,
          "prompt": "为了简化重复的UI结构编写，可以使用【】装饰器来封装并复用该结构。",
          "options": [],
          "answer": {
            "blanks": [
              "@Builder 答案解析：@Builder可用于封装和复用UI布局代码"
            ],
            "text": "@Builder 答案解析：@Builder可用于封装和复用UI布局代码"
          },
          "explanation": "@Builder可用于封装和复用UI布局代码。"
        },
        {
          "id": "q-8b25f49ab9",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 30,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 30,
          "prompt": "类通过【】关键字实现接口。",
          "options": [],
          "answer": {
            "blanks": [
              "implements"
            ],
            "text": "implements"
          },
          "explanation": ""
        },
        {
          "id": "q-36ef57e432",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 77,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 21,
          "prompt": "Image组件的objectFit属性的取值【________】表示在保持宽高比的情况下进行缩小或者放大，使得图像完全显示在显示边界内。",
          "options": [],
          "answer": {
            "blanks": [
              "ImageFit.Contain"
            ],
            "text": "ImageFit.Contain"
          },
          "explanation": ""
        },
        {
          "id": "q-7a1f8b3174",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 78,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 22,
          "prompt": "【________】组件是堆叠容器组件，其子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。",
          "options": [],
          "answer": {
            "blanks": [
              "Stack"
            ],
            "text": "Stack"
          },
          "explanation": ""
        },
        {
          "id": "q-c3a289f952",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 79,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 23,
          "prompt": "为了简化重复的UI结构编写，可以使用【________】装饰器来封装并复用该结构。",
          "options": [],
          "answer": {
            "blanks": [
              "@Builder 答案解析：@Builder可用于封装和复用UI布局代码"
            ],
            "text": "@Builder 答案解析：@Builder可用于封装和复用UI布局代码"
          },
          "explanation": "@Builder可用于封装和复用UI布局代码。"
        },
        {
          "id": "q-78ef7ee983",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 80,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 24,
          "prompt": "在Slider组件中，通过【________】属性可以设置滑动条的滑块与滑轨显示样式。",
          "options": [],
          "answer": {
            "blanks": [
              "style"
            ],
            "text": "style"
          },
          "explanation": ""
        },
        {
          "id": "q-cf13509ec6",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 81,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 25,
          "prompt": "要从字符串\"Hello World!\"中提取出\"World\"，可以使用slice(【________】, 11)。",
          "options": [],
          "answer": {
            "blanks": [
              "答案解析：从索引6开始到索引11（不包括11）提取得到\"World\""
            ],
            "text": "答案解析：从索引6开始到索引11（不包括11）提取得到\"World\""
          },
          "explanation": "从索引6开始到索引11（不包括11）提取得到\"World\"。"
        },
        {
          "id": "q-094f506246",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 82,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 26,
          "prompt": "在ArkUI中，通过【________】方法可以为组件的不同内部状态设置样式。",
          "options": [],
          "answer": {
            "blanks": [
              "stateStyles() 答案解析：stateStyles()方法用于为组件的不同内部状态设置样式"
            ],
            "text": "stateStyles() 答案解析：stateStyles()方法用于为组件的不同内部状态设置样式"
          },
          "explanation": "stateStyles()方法用于为组件的不同内部状态设置样式。"
        },
        {
          "id": "q-16e7244634",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 83,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 27,
          "prompt": "调用一个数字类型变量num的toString()方法，可以将其转换为【________】类型。",
          "options": [],
          "answer": {
            "blanks": [
              "string"
            ],
            "text": "string"
          },
          "explanation": ""
        },
        {
          "id": "q-da779bb06a",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 84,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 28,
          "prompt": "在ArkUI中，循环渲染语句使用的函数是【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "F"
            ],
            "text": "F"
          },
          "explanation": ""
        },
        {
          "id": "q-d12b02b082",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 85,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 29,
          "prompt": "鸿蒙提供的【________】平台可以让开发者通过一套代码实现多个平台的应用开发",
          "options": [],
          "answer": {
            "blanks": [
              "统一开发"
            ],
            "text": "统一开发"
          },
          "explanation": ""
        },
        {
          "id": "q-0567f4caa2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 86,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 30,
          "prompt": "若要访问数组fruits中的第2个元素，应写作【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "fruits[1]"
            ],
            "text": "fruits[1]"
          },
          "explanation": ""
        },
        {
          "id": "q-9a706e89dd",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 122,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 66,
          "prompt": "若要设置一个圆形样式的按钮，应将type属性设置为【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "B"
            ],
            "text": "B"
          },
          "explanation": "将type属性设置为ButtonType.Circle可以创建一个圆形样式的按钮。"
        },
        {
          "id": "q-e2bd77e947",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 123,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 67,
          "prompt": "在定义函数时，如果没有返回值，可以用【________】来表示。",
          "options": [],
          "answer": {
            "blanks": [
              "void"
            ],
            "text": "void"
          },
          "explanation": ""
        },
        {
          "id": "q-9a3caa752c",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 124,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 68,
          "prompt": "若要实现复选框的双向数据绑定，应使用【________】属性进行设置。",
          "options": [],
          "answer": {
            "blanks": [
              "select 答案解析：对于复选框组件，应使用select属性进行双向数据绑定"
            ],
            "text": "select 答案解析：对于复选框组件，应使用select属性进行双向数据绑定"
          },
          "explanation": "对于复选框组件，应使用select属性进行双向数据绑定。"
        },
        {
          "id": "q-6457043ef2",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 125,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 69,
          "prompt": "在Grid组件中，只能放置【________】子组件。",
          "options": [],
          "answer": {
            "blanks": [
              "G"
            ],
            "text": "G"
          },
          "explanation": ""
        },
        {
          "id": "q-15623146cc",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 126,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 70,
          "prompt": "如果希望接口中的某些属性或方法不是强制性的，可以在它们后面加上【________】符号。",
          "options": [],
          "answer": {
            "blanks": [
              "？ 答案解析：如果想不强制实现接口中的某些属性或方法，可以在其名称后加上?表示它是可选的"
            ],
            "text": "？ 答案解析：如果想不强制实现接口中的某些属性或方法，可以在其名称后加上?表示它是可选的"
          },
          "explanation": "如果想不强制实现接口中的某些属性或方法，可以在其名称后加上?表示它是可选的。"
        },
        {
          "id": "q-799eab7c06",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 127,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 71,
          "prompt": "在类的大括号内定义【________】方法，用于初始化类成员。",
          "options": [],
          "answer": {
            "blanks": [
              "constructor"
            ],
            "text": "constructor"
          },
          "explanation": ""
        },
        {
          "id": "q-80836e3bff",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 128,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 72,
          "prompt": "ArkUI中设置边框圆角半径的属性是【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "borderRadius 答案解析：borderRadius属性用于设置边框的圆角半径"
            ],
            "text": "borderRadius 答案解析：borderRadius属性用于设置边框的圆角半径"
          },
          "explanation": "borderRadius属性用于设置边框的圆角半径。"
        },
        {
          "id": "q-fff2052f69",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 160,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 104,
          "prompt": "在Grid组件中，通过【________】属性可以设置列与列之间的间距。",
          "options": [],
          "answer": {
            "blanks": [
              "columnsGap 答案解析：columnsGap属性用于设置列与列之间的间距"
            ],
            "text": "columnsGap 答案解析：columnsGap属性用于设置列与列之间的间距"
          },
          "explanation": "columnsGap属性用于设置列与列之间的间距。"
        },
        {
          "id": "q-3baaba41e9",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 161,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 105,
          "prompt": "若要将Stack组件内的子组件设置为底部起始端对齐，应将alignContent属性设置为【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "A"
            ],
            "text": "A"
          },
          "explanation": "将alignContent属性设置为Alignment.BottomStart可以使子组件位于底部起始端对齐。"
        },
        {
          "id": "q-f5cc71db0a",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 162,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 106,
          "prompt": "Stage模型将一个基础的鸿蒙项目划分为多个模块，默认提供【________】模块。",
          "options": [],
          "answer": {
            "blanks": [
              "entry"
            ],
            "text": "entry"
          },
          "explanation": ""
        },
        {
          "id": "q-22c5b77bcd",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 163,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 107,
          "prompt": "若要根据条件score >= 60来决定值为“及格”或“不及格”，利用三元表达式可以写作【________】。",
          "options": [],
          "answer": {
            "blanks": [
              "score >= 60 ? '及格' : '不及格' 答案解析：使用三元运算符可以根据score的值决定输出的内容"
            ],
            "text": "score >= 60 ? '及格' : '不及格' 答案解析：使用三元运算符可以根据score的值决定输出的内容"
          },
          "explanation": "使用三元运算符可以根据score的值决定输出的内容。"
        },
        {
          "id": "q-e5922316ee",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 164,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 108,
          "prompt": "在Column组件中，主轴为【________】方向。",
          "options": [],
          "answer": {
            "blanks": [
              "垂直"
            ],
            "text": "垂直"
          },
          "explanation": ""
        },
        {
          "id": "q-29a651559a",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 165,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 109,
          "prompt": "在ArkUI中，通过【________】关键字声明的结构体被@Component装饰后代表一个自定义组件。",
          "options": [],
          "answer": {
            "blanks": [
              "struct 答案解析：使用struct关键字声明的结构体被装饰为自定义组件"
            ],
            "text": "struct 答案解析：使用struct关键字声明的结构体被装饰为自定义组件"
          },
          "explanation": "使用struct关键字声明的结构体被装饰为自定义组件。"
        },
        {
          "id": "q-1b5a0d1fdf",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 166,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 110,
          "prompt": "在创建鸿蒙项目时，【________】用于设置最低兼容的API版本。",
          "options": [],
          "answer": {
            "blanks": [
              "C"
            ],
            "text": "C"
          },
          "explanation": "Compatible SDK用于设置最低兼容的API版本。"
        },
        {
          "id": "q-8919532ee1",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 167,
          "type": "blank",
          "typeLabel": "填空题",
          "mode": "blank",
          "originalNumber": 111,
          "prompt": "DevEco Studio中的【________】表示预览器，用于预览当前打开的页面。",
          "options": [],
          "answer": {
            "blanks": [
              "Previewer 答案解析：Previewer表示预览器，用于预览当前打开的页面"
            ],
            "text": "Previewer 答案解析：Previewer表示预览器，用于预览当前打开的页面"
          },
          "explanation": "Previewer表示预览器，用于预览当前打开的页面。"
        },
        {
          "id": "q-b7c314d543",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 41,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 41,
          "prompt": "使用Flex组件时，默认情况下子组件不会换行。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "默认情况下，wrap属性值为FlexWrap.NoWrap，即不换行。"
        },
        {
          "id": "q-397281bdb5",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 42,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 42,
          "prompt": "ImageAnimator组件将iterations属性设置为0表示无限循环播放。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-e18962ffdd",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 43,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 43,
          "prompt": "构造方法可以有参数。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-472b11a083",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 44,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 44,
          "prompt": "使用闭包可以实现数据的封装，从而保护数据不被外部直接访问。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "通过闭包可以隐藏函数内部的变量，使其不能从外部直接访问，从而实现了数据的封装。"
        },
        {
          "id": "q-b8348f4b71",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 45,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 45,
          "prompt": "Slider组件的默认滑动方向是水平方向。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "Slider组件的direction属性默认值为Axis.Horizontal，即默认滑动方向为水平方向。"
        },
        {
          "id": "q-634d1b571f",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 46,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 46,
          "prompt": "函数可以在程序中被多次调用。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "函数设计的目的之一就是实现代码复用，可被多次调用。"
        },
        {
          "id": "q-4cdf1589b6",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 47,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 47,
          "prompt": "入口组件不需要添加@Preview即可预览。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "入口组件自动具有预览功能，无需额外添加@Preview。"
        },
        {
          "id": "q-6773d98509",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 48,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 48,
          "prompt": "条件渲染语句允许开发者基于特定条件来决定是否渲染组件。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-b286c015e7",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 49,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 49,
          "prompt": "在ArkUI中，所有的组件都必须包含事件处理程序。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "并非所有组件都需要事件处理程序，仅当需要响应用户交互时才需要。"
        },
        {
          "id": "q-47cccadf6d",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 50,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 50,
          "prompt": "List组件中的项目不能包含其他组件，只能显示纯文本。",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-ee07280377",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 97,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 41,
          "prompt": "在ArkTS中，所有变量都需要明确指定其类型，不能省略类型。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "如果通过赋值操作能够推断出变量的类型，则不需要显式指定类型。"
        },
        {
          "id": "q-20f0b549b3",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 98,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 42,
          "prompt": "Grid组件内应只放置GridItem子组件。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-15d1c4e527",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 99,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 43,
          "prompt": "Text组件默认的文本对齐方式是居中对齐。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-cea831a783",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 100,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 44,
          "prompt": "TextInput组件的onChange事件会在用户输入内容发生变化时触发。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-b8ee9c8e30",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 101,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 45,
          "prompt": "当通过类创建对象时，变量类型必须显式指定为类名。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "由于通过类创建对象时变量的类型可以被自动推断，因此可以省略类型声明。"
        },
        {
          "id": "q-fb4b567161",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 102,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 46,
          "prompt": "Row组件创建的容器内的子组件会按照代码中的顺序依次在水平方向上排列。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-527568260b",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 103,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 47,
          "prompt": "在DevEco Studio中创建鸿蒙项目时，Empty Ability模板是为Phone、Tablet等设备设计的基础模板。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-5f39c3c88d",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 104,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 48,
          "prompt": "注释在程序解析时会被忽略，不影响程序的实际运行。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "注释仅用于代码说明。"
        },
        {
          "id": "q-b39c73588b",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 105,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 49,
          "prompt": "泛型函数可以在调用时省略具体的类型参数，由ArkTS自动推断。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "调用泛型函数时的类型参数可以省略，由ArkTS自动推断类型。"
        },
        {
          "id": "q-db0bb22b24",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 106,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 50,
          "prompt": "使用接口有助于确保系统设计的清晰性和一致性。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-1769472b28",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 138,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 82,
          "prompt": "在ArkTS中，当执行浮点数相加时，可能会遇到精度问题。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-95d1828f62",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 139,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 83,
          "prompt": "如果开发者没有提供keyGenerator函数，则ForEach()函数将不会为数组元素生成任何键。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "若开发者没有提供keyGenerator函数，ForEach()函数会使用默认的键生成策略。"
        },
        {
          "id": "q-383ff887d1",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 140,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 84,
          "prompt": "Slider组件的默认滑动方向是水平方向。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "Slider组件的direction属性默认值为Axis.Horizontal，即默认滑动方向为水平方向。"
        },
        {
          "id": "q-33841399f1",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 141,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 85,
          "prompt": "HAR中的代码和资源在被多个使用方引用时，每个使用方的编译产物中只会存在一份副本。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "当一个HAR被多个使用方引用时，在它们各自的编译产物中都会存在一份副本。"
        },
        {
          "id": "q-59a2a8d809",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 142,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 86,
          "prompt": "switch语句中的每个case后面不需要加break语句，因为程序会自动跳出当前case。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "如果不手动添加break，程序将继续执行后续的case代码，直到遇到break或switch结束。"
        },
        {
          "id": "q-d4f6ce596f",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 143,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 87,
          "prompt": "箭头函数没有自己的this绑定。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-a1f0aaa064",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 144,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 88,
          "prompt": "在ArkTS中，a = b = c = 5;这样的多重赋值语句是可用的。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "在ArkTS中可以从右到左依次进行赋值操作。"
        },
        {
          "id": "q-421ab6f64d",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 145,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 89,
          "prompt": "为了使用尾随闭包，需要确保组件内有且仅有一个使用@BuilderParam装饰的属性。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-2022d4830e",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 146,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 90,
          "prompt": "ArkTS中可以使用 any 类型来表示任意类型。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-a2ffcb9e60",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 147,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 91,
          "prompt": "类的字段不必须显式声明类型。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-5172726cdc",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 175,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 119,
          "prompt": "ArkTS不允许在一行中同时声明多个变量并赋值。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "多个变量声明可以在一行中完成，各变量之间用逗号分隔。"
        },
        {
          "id": "q-ac226636a3",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 176,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 120,
          "prompt": "在Flex布局中，通过value参数的alignItems属性可以设置子组件在交叉轴上的对齐方式。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": ""
        },
        {
          "id": "q-755e8693e6",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 177,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 121,
          "prompt": "使用import关键字导入组件时，不需要知道组件的具体路径。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": ""
        },
        {
          "id": "q-793b42cdba",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 178,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 122,
          "prompt": "如果父类有一个方法而子类没有定义该方法，则调用该方法时会出错。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": false,
            "text": "错"
          },
          "explanation": "如果子类没有重写父类的方法，那么将直接使用父类中定义的方法。"
        },
        {
          "id": "q-51be675ce1",
          "subject": "鸿蒙",
          "source": "鸿蒙ArkTS&ArkUI测试题（含答案）_去重版.txt",
          "order": 179,
          "type": "judge",
          "typeLabel": "判断题",
          "mode": "judge",
          "originalNumber": 123,
          "prompt": "使用闭包可以实现数据的封装，从而保护数据不被外部直接访问。（）",
          "options": [
            {
              "key": "A",
              "text": "对"
            },
            {
              "key": "B",
              "text": "错"
            }
          ],
          "answer": {
            "judge": true,
            "text": "对"
          },
          "explanation": "通过闭包可以隐藏函数内部的变量，使其不能从外部直接访问，从而实现了数据的封装。"
        },
        {
          "id": "q-2ec99cecee",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 51,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 51,
          "prompt": "解释组件导出和导入的作用及其基本步骤。",
          "options": [],
          "answer": {
            "text": "组件导出和导入允许开发者将常用的UI组件封装起来并在不同的文件或模块间共享，提高了代码的复用性和维护性。基本步骤包括：首先，在组件定义时使用export关键字将其导出；然后，在需要使用该组件的地方使用import语句导入。这使得大型项目中的组件管理更加模块化和清晰"
          },
          "explanation": ""
        },
        {
          "id": "q-7f0dbbeb92",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 52,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 52,
          "prompt": "描述类的继承概念及其用途，以及如何在ArkTS中实现类的继承。",
          "options": [],
          "answer": {
            "text": "类的继承是指一个类继承另一个类的成员，并可以在不改变父类的前提下进行扩展。这可以避免代码重复并提高可重用性。在ArkTS中，可以通过extends关键字实现子类对父类的继承"
          },
          "explanation": ""
        },
        {
          "id": "q-247761eb3b",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 53,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 53,
          "prompt": "请简述HAR和HSP的区别。",
          "options": [],
          "answer": {
            "text": "HA"
          },
          "explanation": ""
        },
        {
          "id": "q-6201ced990",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 54,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 54,
          "prompt": "请简述组件的概念和作用。",
          "options": [],
          "answer": {
            "text": "组件是独立的代码块，具有特定的功能和样式，并且可以在页面中独立使用和重复使用。在ArkUI中，组件用于构建用户界面的不同部分"
          },
          "explanation": ""
        },
        {
          "id": "q-caacebd8ca",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 55,
          "type": "short",
          "typeLabel": "简答题",
          "mode": "short",
          "originalNumber": 55,
          "prompt": "简述什么是静态成员，以及如何定义和访问静态成员。",
          "options": [],
          "answer": {
            "text": "静态成员是不需要创建对象就可以直接通过类访问的成员。使用static关键字定义静态成员。访问静态成员的语法为“类名.静态成员名”"
          },
          "explanation": ""
        },
        {
          "id": "q-bdb38b31e8",
          "subject": "鸿蒙",
          "source": "复习测试卷.txt",
          "order": 56,
          "type": "programming",
          "typeLabel": "编程题",
          "mode": "programming",
          "originalNumber": 56,
          "prompt": "根据本学期所学的知识，结合 ArkTS 组件、状态管理、事件处理等内容，实现一个简单的五子棋对战页面。\n软件要求\nDevEco Studio 版本：DevEco Studio 5.1.1 Release\nHarmonyOS SDK 版本：HarmonyOS 5.1.1 Release SDK\n硬件要求\n设备类型：模拟器\nHarmonyOS 系统：HarmonyOS 5.1.1 Release\n页面功能要求\n页面中需要实现一个简单的五子棋游戏界面。棋盘数据中：\n0 表示空位\n1 表示玩家\n2 表示 AI\n页面顶部显示游戏标题、当前回合信息和“重新开始”按钮。页面主体使用 Grid 组件绘制棋盘，玩家点击空白格子后落子，随后 AI 自动落子。每次玩家或 AI 落子后，都需要判断是否出现五子连珠。\n注意\n每小题答题部分请将核心代码及运行效果截图提交即可。\n截图中必须包含个性化信息，例如姓名、学号后三位或自定义标题，否则一律不给分。\n提交一份代码源码文件压缩包，项目文件名必须为：HarmonyOSTestXXX。（XXX 为个人学号末三位）\n(1) (简答题 2.8分)\n（1）创建项目并完成基础页面配置。\n步骤1：创建 HarmonyOS 项目，项目名称为 HarmonyOSTestXXX。（XXX 为个人学号末三位）\n步骤2：在pages\n目录下创建五子棋页面文件，命名为 GobangPageXXX.ets。\n步骤3：在 main_pages.json 中配置该页面，并设置应用启动时进入五子棋页面。\n步骤4：页面根容器使用 Column组件，设置页面宽度、高度和背景颜色。",
          "options": [],
          "answer": {
            "text": "(简答题 2.8分) （2）完成棋盘数据初始化。 步骤1：定义二维数组作为棋盘数据源，建议使用@State list: number[][]保存棋盘状态。 步骤2：设置棋盘行数和列数，例如 15 行 × 15 列，或 20 行 × 10 列。 步骤3：创建start()方法，用于初始化棋盘，将所有位置设置为0。 步骤4：点击“重新开始”按钮时，能够清空棋盘并重新开始游戏"
          },
          "explanation": ""
        }
      ]
    }
  ]
};
