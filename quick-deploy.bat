@echo off
echo 🌺 Fuzzy Wire Flowers - Quick Deploy Script
echo ============================================
echo.

echo 📦 Installing gh-pages package...
npm install --save-dev gh-pages

echo.
echo 🔧 Updating package.json...
echo Please manually add these lines to your package.json:
echo   "homepage": "https://YOUR_USERNAME.github.io/fuzzy-wire-flowers"
echo   "predeploy": "npm run build"
echo   "deploy": "gh-pages -d build"

echo.
echo 🚀 Building and deploying...
npm run build
npm run deploy

echo.
echo ✅ Deployment complete!
echo Please check your GitHub repository settings to enable GitHub Pages.
echo.
pause
