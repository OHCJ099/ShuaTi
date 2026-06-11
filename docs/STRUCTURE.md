# 项目结构

```text
.
├─ index.html / app.js / styles.css   # Web 刷题前端，也是桌面端入口
├─ data/                              # 程序可直接读取的题库
├─ assets/                            # 题目/答案图片资源
├─ android/                           # Android WebView 工程源码
├─ desktop/                           # Electron 桌面端入口
├─ scripts/                           # 题库转换、手工修正、Android 资源同步脚本
├─ Timu/                              # 原始题库文件
├─ release/                           # 当前可直接安装/运行的 APK 和 EXE
└─ docs/                              # 项目说明文档
```

说明：`node_modules`、Android 构建缓存、Electron 输出目录不入库，需要本地构建时重新生成。
