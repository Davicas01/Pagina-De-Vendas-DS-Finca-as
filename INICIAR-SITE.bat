@echo off
chcp 65001 >nul
cls
echo.
echo ========================================
echo    DS FINANÇAS - SITE DE VENDAS
echo ========================================
echo.
echo [INFO] Iniciando servidor de desenvolvimento...
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo [INFO] Instalando dependencias...
    npm install
)

echo [INFO] Limpando cache...
if exist ".next" rmdir /s /q ".next" 2>nul

echo [INFO] Iniciando Next.js...
echo [INFO] O site estará disponível em: http://localhost:3000
echo [INFO] Pressione Ctrl+C para parar o servidor
echo.

npm run dev

pause
