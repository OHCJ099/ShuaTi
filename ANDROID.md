# Android 版说明

Android 版位于 `android/`，采用原生 Java Activity + WebView。题库、页面和逻辑都已离线打包到 `app/src/main/assets/shuati/`，不需要联网读取题库。

## 打开方式

1. 用 Android Studio 打开 `android/` 文件夹。
2. 等待 Gradle Sync 完成。
3. 运行 `app` 到模拟器或真机。

## 构建 APK

在本机安装 Android SDK 和 Gradle 后，可在 `android/` 目录执行：

```powershell
gradle assembleDebug
```

生成的 debug APK 通常位于：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 同步网页版资源到 Android

当题库或 Web 端界面更新后，在 `ShuaTi` 根目录执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync_android_assets.ps1
```

这会把 `index.html`、`app.js`、`styles.css` 和 `data/questions.js` 同步到 Android assets。
