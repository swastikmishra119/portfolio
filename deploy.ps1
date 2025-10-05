# Deploy script for GitHub Pages
Write-Host "Starting deployment..." -ForegroundColor Green

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Create a temporary directory
$tempDir = "temp-gh-pages"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

# Clone gh-pages branch to temp directory
Write-Host "Setting up gh-pages branch..." -ForegroundColor Yellow
git clone --branch gh-pages --single-branch https://github.com/swastikmishra119/portfolio.git $tempDir

if ($LASTEXITCODE -ne 0) {
    Write-Host "Creating new gh-pages branch..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $tempDir
    Set-Location $tempDir
    git init
    git checkout -b gh-pages
    Set-Location ..
}

# Copy dist files to temp directory
Write-Host "Copying build files..." -ForegroundColor Yellow
Set-Location $tempDir
Remove-Item * -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path ..\dist\* -Destination . -Recurse -Force

# Commit and push
Write-Host "Committing changes..." -ForegroundColor Yellow
git add -A
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin gh-pages --force

Set-Location ..
Remove-Item -Recurse -Force $tempDir

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site will be available at: https://swastikmishra119.github.io/portfolio/" -ForegroundColor Cyan
