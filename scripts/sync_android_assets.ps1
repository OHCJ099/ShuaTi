$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$assetRoot = Join-Path $root "android\app\src\main\assets\shuati"
$dataRoot = Join-Path $assetRoot "data"
$appAssetsRoot = Join-Path $assetRoot "assets"

New-Item -ItemType Directory -Force -Path $assetRoot, $dataRoot, $appAssetsRoot | Out-Null

Copy-Item -Force (Join-Path $root "index.html") (Join-Path $assetRoot "index.html")
Copy-Item -Force (Join-Path $root "app.js") (Join-Path $assetRoot "app.js")
Copy-Item -Force (Join-Path $root "styles.css") (Join-Path $assetRoot "styles.css")
Copy-Item -Force (Join-Path $root "data\questions.js") (Join-Path $dataRoot "questions.js")
Copy-Item -Force -Recurse (Join-Path $root "assets\*") $appAssetsRoot

Write-Host "Android assets synced."
