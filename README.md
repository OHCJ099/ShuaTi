# ShuaTi 刷题练习台

一个离线刷题软件，包含 Web 前端、Android WebView 版和 Windows Electron 版。

## 直接下载

当前成品放在 `release/`：

- `release/ShuaTi-Windows.exe`：Windows 桌面版
- `release/ShuaTi-Android-debug.apk`：Android 安装包

## 主要功能

- 科目选择、题型选择
- 支持单选、多选、填空、判断、简答、综合、编程题
- 题目乱序、题型乱序
- 手机返回键返回上一页
- 每个科目练习进度本机保存
- 题干/答案图片展示
- 首页“快速加题”：本机新增题目、导入/导出 JSON、删除/清空自定义题

## 开发环境

- Node.js + npm
- JDK + Android SDK / Gradle
- Python 3（仅题库转换脚本需要）

安装依赖：

```powershell
npm install
pip install -r requirements.txt
```

## 本地运行桌面版

```powershell
npm run desktop
```

## 构建 Windows EXE

```powershell
npm run pack:win
```

输出位置：`dist-desktop/ShuaTi-Windows.exe`

## 构建 Android APK

先同步 Web 资源到 Android assets：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/sync_android_assets.ps1
```

然后构建：

```powershell
cd android
./gradlew assembleDebug
```

如果没有 `gradlew`，可使用本机 Gradle：

```powershell
gradle assembleDebug
```

输出位置：`android/app/build/outputs/apk/debug/app-debug.apk`

## 题库维护

- `Timu/subject/`：原始题库文件
- `data/questions.js`：程序实际读取的题库
- `scripts/convert_questions.py`：从原始题库生成程序题库
- `scripts/apply_manual_fixes.js`：手工修正分类、答案和图片题
- `scripts/import_soft_choice_docx.py`：导入软件工程选择题 docx

## 注意

`android/local.properties` 是本机 Android SDK 路径，不入库。首次构建可复制 `android/local.properties.example` 并改成自己的 SDK 路径。
