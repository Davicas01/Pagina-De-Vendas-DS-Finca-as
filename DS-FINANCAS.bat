@echo off
chcp 65001 >nul
cls
echo.
echo ========================================
echo     🚀 DS FINANÇAS - CONTROLE TOTAL
echo ========================================
echo.
echo Escolha uma opção:
echo.
echo 1. 🚀 INICIAR SITE (Rápido)
echo 2. 🔧 RESOLVER PROBLEMAS (Se estiver com erro)
echo 3. 📊 DIAGNÓSTICO COMPLETO
echo 4. ℹ️  INSTRUÇÕES E AJUDA
echo 5. ❌ SAIR
echo.
set /p escolha="Digite sua opção (1-5): "

if "%escolha%"=="1" goto iniciar
if "%escolha%"=="2" goto resolver
if "%escolha%"=="3" goto diagnostico
if "%escolha%"=="4" goto ajuda
if "%escolha%"=="5" goto sair
goto menu

:iniciar
cls
echo.
echo ========================================
echo   🚀 INICIANDO DS FINANÇAS
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] 🔍 Verificando arquivos...
if not exist "package.json" (
    echo ❌ Projeto não configurado! Execute opção 2 primeiro.
    pause
    goto menu
)

if not exist "node_modules" (
    echo ❌ Dependências não instaladas! Execute opção 2 primeiro.
    pause
    goto menu
)

echo [2/4] 🛑 Parando processos antigos...
taskkill /f /im node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [3/4] 🧹 Limpando cache...
if exist ".next" rmdir /s /q ".next"

echo [4/4] 🚀 Iniciando servidor...
echo.
echo ==========================================
echo   🌐 ACESSE: http://localhost:3000
echo ==========================================
echo.
echo ⏸️  Para parar: Ctrl+C
echo.

set NODE_ENV=development
set NEXT_TELEMETRY_DISABLED=1
npm run dev

if errorlevel 1 (
    echo.
    echo ❌ Erro ao iniciar! Execute opção 2 para resolver.
    pause
)
goto menu

:resolver
cls
echo.
echo ========================================
echo   🔧 RESOLVENDO TODOS OS PROBLEMAS
echo ========================================
echo.

cd /d "%~dp0"

echo [1/6] 🛑 Matando processos...
taskkill /f /im node.exe 2>nul
taskkill /f /im npm.exe 2>nul
timeout /t 3 /nobreak >nul

echo [2/6] 🗑️  Removendo cache corrompido...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del "package-lock.json"

echo [3/6] 🧹 Limpando npm...
npm cache clean --force

echo [4/6] 📦 Instalando dependências...
npm install --no-optional --legacy-peer-deps --force

echo [5/6] ✅ Verificando instalação...
if exist "node_modules\next" (
    echo ✅ Instalação bem-sucedida!
) else (
    echo ❌ Erro! Tentando novamente...
    npm install --force
)

echo [6/6] 🎯 Pronto para usar!
echo.
echo ✅ Problema resolvido! Agora execute opção 1.
pause
goto menu

:diagnostico
cls
echo.
echo ========================================
echo   📊 DIAGNÓSTICO COMPLETO
echo ========================================
echo.

cd /d "%~dp0"

echo 🔍 ARQUIVOS ESSENCIAIS:
if exist "package.json" (echo ✅ package.json) else (echo ❌ package.json [CRÍTICO])
if exist "next.config.js" (echo ✅ next.config.js) else (echo ❌ next.config.js [CRÍTICO])
if exist "src\app\page.tsx" (echo ✅ page.tsx) else (echo ❌ page.tsx [CRÍTICO])
if exist "src\styles\globals.css" (echo ✅ globals.css) else (echo ❌ globals.css [CRÍTICO])

echo.
echo 🔍 DEPENDÊNCIAS:
if exist "node_modules" (
    echo ✅ node_modules existe
    if exist "node_modules\next" (echo ✅ Next.js) else (echo ❌ Next.js)
    if exist "node_modules\react" (echo ✅ React) else (echo ❌ React)
    if exist "node_modules\tailwindcss" (echo ✅ Tailwind) else (echo ❌ Tailwind)
) else (
    echo ❌ node_modules não existe [EXECUTE OPÇÃO 2]
)

echo.
echo 🔍 SISTEMA:
tasklist /fi "imagename eq node.exe" 2>nul | find "node.exe" >nul
if errorlevel 1 (echo ✅ Porta livre) else (echo ⚠️  Node.js rodando)

netstat -an | find ":3000" >nul
if errorlevel 1 (echo ✅ Porta 3000 livre) else (echo ⚠️  Porta 3000 ocupada)

echo.
echo 🔍 VERSÕES:
node --version 2>nul || echo ❌ Node.js não encontrado
npm --version 2>nul || echo ❌ NPM não encontrado

echo.
echo ========================================
echo   📋 RECOMENDAÇÕES:
echo ========================================
echo.
if not exist "node_modules" (
    echo 🔧 Execute opção 2 para instalar dependências
) else (
    echo 🚀 Execute opção 1 para iniciar o site
)
echo.
pause
goto menu

:ajuda
cls
echo.
echo ========================================
echo   📖 INSTRUÇÕES E AJUDA
echo ========================================
echo.
echo 🎯 COMO USAR:
echo.
echo 1️⃣  PRIMEIRA VEZ:
echo    Execute opção 2 (Resolver Problemas)
echo    Depois execute opção 1 (Iniciar Site)
echo.
echo 2️⃣  USO NORMAL:
echo    Execute opção 1 (Iniciar Site)
echo    Acesse: http://localhost:3000
echo.
echo 3️⃣  COM PROBLEMAS:
echo    Execute opção 2 (Resolver Problemas)
echo    Aguarde terminar
echo    Execute opção 1 (Iniciar Site)
echo.
echo ========================================
echo   🛡️ INFORMAÇÕES DO PROJETO:
echo ========================================
echo.
echo 🎨 PROJETO: DS FINANÇAS
echo 🚀 FRAMEWORK: Next.js 14.2.15
echo ⚛️  REACT: 18.3.1
echo 🎨 ESTILO: Tailwind CSS 3.4.16
echo 💻 LINGUAGEM: TypeScript 5.7.2
echo 🎯 TEMA: Preto e Amarelo
echo 📱 RESPONSIVO: Sim
echo.
echo ========================================
echo   ⚡ RECURSOS INCLUSOS:
echo ========================================
echo.
echo ✅ Landing page moderna
echo ✅ Formulário de captura
echo ✅ Design responsivo
echo ✅ Animações suaves
echo ✅ Performance otimizada
echo ✅ Cache configurado
echo ✅ Fontes Google otimizadas
echo.
echo ========================================
echo   🆘 SOLUÇÃO DE PROBLEMAS:
echo ========================================
echo.
echo ❓ Site não carrega?
echo    → Execute opção 2
echo.
echo ❓ Erro de porta ocupada?
echo    → Feche outras aplicações Node.js
echo    → Execute opção 2
echo.
echo ❓ Styles não funcionam?
echo    → Execute opção 2
echo    → Aguarde instalação completa
echo.
echo ❓ Erro "Cannot find module"?
echo    → Execute opção 2
echo.
echo 💡 DICA: Sempre execute opção 2 se algo der errado!
echo.
pause
goto menu

:sair
cls
echo.
echo ========================================
echo   👋 OBRIGADO POR USAR DS FINANÇAS!
echo ========================================
echo.
echo 🎯 Lembre-se:
echo    • Opção 1: Iniciar site
echo    • Opção 2: Resolver problemas
echo    • http://localhost:3000
echo.
echo 🚀 Desenvolvimento by DSYNCO
echo.
pause
exit

:menu
goto :eof
