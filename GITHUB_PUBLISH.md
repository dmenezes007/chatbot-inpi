# 🚀 Guia de Publicação no GitHub

Este documento contém instruções passo a passo para publicar o projeto **Chatbot do INPI - Felinpi** no GitHub.

## ✅ Pré-requisitos

Certifique-se de ter:
- ✓ Git instalado no seu computador
- ✓ Conta no GitHub ([github.com](https://github.com))
- ✓ Repositório criado: `https://github.com/dmenezes007/chatbot-inpi`

## 📋 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
chatbot-inpi/
├── .github/
│   ├── workflows/
│   │   └── ci.yml                    # GitHub Actions CI/CD
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md             # Template para bugs
│   │   └── feature_request.md        # Template para features
│   ├── PULL_REQUEST_TEMPLATE.md      # Template para PRs
│   └── README.md                     # README da pasta .github
├── .vscode/
│   ├── extensions.json               # Extensões recomendadas
│   └── settings.json                 # Configurações do VS Code
├── public/                           # Arquivos estáticos
├── src/
│   ├── components/
│   │   └── App.tsx                   # Componente principal
│   ├── data/
│   │   └── formData.ts               # Dados do chatbot
│   ├── types/
│   │   └── index.ts                  # Definições TypeScript
│   ├── index.css                     # Estilos globais
│   └── main.tsx                      # Entry point
├── .env.example                      # Exemplo de variáveis de ambiente
├── .env.local                        # Variáveis locais (NÃO commitado)
├── .gitignore                        # Arquivos ignorados pelo Git
├── CHANGELOG.md                      # Histórico de mudanças
├── CODE_OF_CONDUCT.md               # Código de conduta
├── CONTRIBUTING.md                   # Guia de contribuição
├── index.html                        # HTML principal
├── LICENSE                           # Licença MIT
├── package.json                      # Dependências e scripts
├── README.md                         # Documentação principal
├── SECURITY.md                       # Política de segurança
├── tsconfig.json                     # Configuração TypeScript
└── vite.config.ts                    # Configuração Vite
```

## 🎯 Passos para Publicação

### 1. Inicializar Git (se ainda não foi feito)

Abra o PowerShell na pasta do projeto e execute:

```powershell
cd "C:\Users\Davison.DESKTOP-7GLJO2G\Documents\chatbot-inpi"
git init
```

### 2. Verificar arquivos a serem commitados

```powershell
git status
```

### 3. Adicionar todos os arquivos

```powershell
git add .
```

### 4. Fazer o primeiro commit

```powershell
git commit -m "feat: initial commit - estrutura completa do projeto Chatbot INPI"
```

### 5. Renomear branch para main (se necessário)

```powershell
git branch -M main
```

### 6. Adicionar o repositório remoto

```powershell
git remote add origin https://github.com/dmenezes007/chatbot-inpi.git
```

### 7. Enviar para o GitHub

```powershell
git push -u origin main
```

### 8. Verificar no GitHub

Acesse: https://github.com/dmenezes007/chatbot-inpi

## 🔐 Importante: Segurança

**NUNCA** commite o arquivo `.env.local`! Ele já está no `.gitignore`, mas verifique:

```powershell
# Verificar se .env.local está ignorado
git status
# Não deve aparecer .env.local na lista
```

## 📝 Configurações Recomendadas no GitHub

Após publicar, configure no GitHub:

### 1. Descrição do Repositório

```
Sistema de chatbot interativo para orientação e atendimento do INPI
```

### 2. Topics (Tags)

Adicione as seguintes tags no repositório:
- `chatbot`
- `inpi`
- `react`
- `typescript`
- `vite`
- `propriedade-industrial`
- `brasil`

### 3. About Section

- Website: (se tiver deploy)
- Topics: as tags acima
- Include in the home page: ✓

### 4. Habilitar Issues

- Settings → Features → Issues: ✓

### 5. Habilitar Discussions (opcional)

- Settings → Features → Discussions: ✓

### 6. Branch Protection (recomendado)

Para proteger a branch `main`:

1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Configurações recomendadas:
   - ✓ Require a pull request before merging
   - ✓ Require status checks to pass before merging
   - ✓ Require conversation resolution before merging

## 🚀 Deploy (Opcional)

### Opções de Deploy Gratuito:

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Conecte o repositório GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Configurar GitHub Pages para usar a pasta dist/
   ```

## 📊 GitHub Actions

O projeto já inclui CI/CD configurado em `.github/workflows/ci.yml` que:
- ✓ Roda em push e pull requests
- ✓ Testa build em Node.js 18 e 20
- ✓ Gera artifacts da build

## 🎉 Próximos Passos

Após a publicação:

1. ✓ Verifique se o README está sendo exibido corretamente
2. ✓ Teste o workflow do GitHub Actions
3. ✓ Adicione uma estrela ao seu próprio repositório ⭐
4. ✓ Compartilhe o link do projeto
5. ✓ Configure branch protection rules
6. ✓ Considere fazer deploy em Vercel ou Netlify

## 🆘 Troubleshooting

### Problema: "Permission denied (publickey)"

Você precisa configurar SSH ou usar HTTPS com token:

```powershell
# Usar HTTPS com token
git remote set-url origin https://github.com/dmenezes007/chatbot-inpi.git
```

### Problema: "Repository not found"

Verifique se:
1. O repositório existe em https://github.com/dmenezes007/chatbot-inpi
2. Você está autenticado corretamente
3. O nome do repositório está correto

### Problema: Arquivos grandes

Se houver erro de arquivos grandes:
```powershell
# Adicione ao .gitignore
echo "arquivo-grande.ext" >> .gitignore
git rm --cached arquivo-grande.ext
git commit -m "chore: remove arquivo grande"
```

## 📞 Suporte

Se encontrar problemas:
- Consulte: https://docs.github.com/pt
- Ou abra uma issue no repositório

---

**Boa sorte com a publicação! 🚀**

*Última atualização: 31/12/2025*
