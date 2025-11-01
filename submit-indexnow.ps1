# IndexNow URL Submission Script for V-Clean Enterprise
# Submits all documentation URLs to IndexNow for instant Bing indexing

$apiKey = "5d2c9dee7ace4423aa41ce43cefd82ff"
$host = "laughing-loop.github.io"
$keyLocation = "https://laughing-loop.github.io/vClean-Docs/5d2c9dee7ace4423aa41ce43cefd82ff.txt"

$urlList = @(
    "https://laughing-loop.github.io/vClean-Docs/",
    "https://laughing-loop.github.io/vClean-Docs/download",
    "https://laughing-loop.github.io/vClean-Docs/quick-start",
    "https://laughing-loop.github.io/vClean-Docs/features",
    "https://laughing-loop.github.io/vClean-Docs/faq",
    "https://laughing-loop.github.io/vClean-Docs/troubleshooting"
)

$body = @{
    host = $host
    key = $apiKey
    keyLocation = $keyLocation
    urlList = $urlList
} | ConvertTo-Json

Write-Host "Submitting URLs to IndexNow..." -ForegroundColor Cyan
Write-Host "API Key: $apiKey" -ForegroundColor Yellow
Write-Host "URLs: $($urlList.Count)" -ForegroundColor Yellow
Write-Host ""

try {
    $response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $body -ContentType "application/json; charset=utf-8"
    Write-Host "✅ SUCCESS! URLs submitted to IndexNow" -ForegroundColor Green
    Write-Host "Bing will index these URLs within 1-2 hours" -ForegroundColor Green
    Write-Host ""
    Write-Host "Submitted URLs:" -ForegroundColor Cyan
    foreach ($url in $urlList) {
        Write-Host "  - $url" -ForegroundColor White
    }
}
catch {
    Write-Host "❌ ERROR: Failed to submit URLs" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possible issues:" -ForegroundColor Yellow
    Write-Host "  1. API key file not deployed yet (wait 2-3 minutes)" -ForegroundColor Yellow
    Write-Host "  2. Check: https://laughing-loop.github.io/vClean-Docs/5d2c9dee7ace4423aa41ce43cefd82ff.txt" -ForegroundColor Yellow
    Write-Host "  3. Try again in a few minutes" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
