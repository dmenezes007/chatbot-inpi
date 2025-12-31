# Script de Publicação Rápida - Chatbot INPI
# Execute este script para publicar o projeto no GitHub

Write-Host "🚀 Script de Publicação - Chatbot INPI" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se estamos no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Diretório correto detectado" -ForegroundColor Green
Write-Host ""

# Verificar se Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✓ Git instalado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado. Instale o Git antes de continuar." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Perguntar se deseja continuar
$continue = Read-Host "Deseja continuar com a publicação? (S/N)"
if ($continue -ne "S" -and $continue -ne "s") {
    Write-Host "Operação cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "📦 Etapa 1: Verificando status do Git..." -ForegroundColor Cyan

# Inicializar Git se necessário
if (-not (Test-Path ".git")) {
    Write-Host "Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Repositório Git inicializado" -ForegroundColor Green
} else {
    Write-Host "✓ Repositório Git já existe" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 Etapa 2: Adicionando arquivos..." -ForegroundColor Cyan
git add .
Write-Host "✓ Arquivos adicionados" -ForegroundColor Green

Write-Host ""
Write-Host "💾 Etapa 3: Fazendo commit..." -ForegroundColor Cyan
git commit -m "feat: initial commit - estrutura completa do projeto Chatbot INPI"
Write-Host "✓ Commit realizado" -ForegroundColor Green

Write-Host ""
Write-Host "🌿 Etapa 4: Configurando branch main..." -ForegroundColor Cyan
git branch -M main
Write-Host "✓ Branch configurada" -ForegroundColor Green

Write-Host ""
Write-Host "🔗 Etapa 5: Adicionando repositório remoto..." -ForegroundColor Cyan
$remoteUrl = "https://github.com/dmenezes007/chatbot-inpi.git"

# Remover remote existente se houver
try {
    git remote remove origin 2>$null
} catch {}

git remote add origin $remoteUrl
Write-Host "✓ Repositório remoto adicionado: $remoteUrl" -ForegroundColor Green

Write-Host ""
Write-Host "🚀 Etapa 6: Enviando para o GitHub..." -ForegroundColor Cyan
Write-Host "Você precisará autenticar com suas credenciais do GitHub" -ForegroundColor Yellow
Write-Host ""

try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ SUCESSO! Projeto publicado no GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Próximos passos:" -ForegroundColor Cyan
    Write-Host "   1. Acesse: https://github.com/dmenezes007/chatbot-inpi" -ForegroundColor White
    Write-Host "   2. Adicione uma descrição ao repositório" -ForegroundColor White
    Write-Host "   3. Adicione topics: chatbot, inpi, react, typescript, vite" -ForegroundColor White
    Write-Host "   4. Configure as Issues e Discussions" -ForegroundColor White
    Write-Host "   5. Considere fazer deploy no Vercel ou Netlify" -ForegroundColor White
    Write-Host ""
    Write-Host "📚 Consulte GITHUB_PUBLISH.md para mais informações" -ForegroundColor Cyan
} catch {
    Write-Host ""
    Write-Host "⚠️  Erro ao enviar para o GitHub" -ForegroundColor Yellow
    Write-Host "Possíveis causas:" -ForegroundColor Yellow
    Write-Host "   - Repositório não existe no GitHub" -ForegroundColor White
    Write-Host "   - Problemas de autenticação" -ForegroundColor White
    Write-Host "   - Sem acesso à internet" -ForegroundColor White
    Write-Host ""
    Write-Host "Consulte GITHUB_PUBLISH.md para troubleshooting" -ForegroundColor Cyan
    exit 1
}
