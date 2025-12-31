# ✅ Checklist de Publicação - Chatbot INPI

Use este checklist para garantir que tudo está pronto para publicação.

## 📋 Antes da Publicação

### Estrutura do Projeto
- [x] Pastas organizadas (src/, components/, types/, data/)
- [x] Arquivos movidos para locais corretos
- [x] Imports corrigidos após reorganização
- [x] Build compila sem erros (`npm run build`)
- [x] Sem vulnerabilidades (`npm audit`)

### Documentação
- [x] README.md completo e profissional
- [x] LICENSE (MIT)
- [x] CONTRIBUTING.md
- [x] CODE_OF_CONDUCT.md
- [x] CHANGELOG.md
- [x] SECURITY.md
- [x] GITHUB_PUBLISH.md
- [x] PROJECT_SUMMARY.md

### Configurações
- [x] package.json com metadados completos
- [x] .gitignore configurado corretamente
- [x] .env.example criado
- [x] vite.config.ts configurado
- [x] tsconfig.json configurado
- [x] .env.local no .gitignore

### GitHub
- [x] .github/workflows/ci.yml (CI/CD)
- [x] .github/ISSUE_TEMPLATE/ criado
- [x] .github/PULL_REQUEST_TEMPLATE.md
- [x] .github/README.md

### VS Code
- [x] .vscode/extensions.json
- [x] .vscode/settings.json

---

## 🚀 Durante a Publicação

### Git Setup
- [ ] `git init` executado
- [ ] `git add .` executado
- [ ] Commit inicial feito
- [ ] Branch renomeada para `main`
- [ ] Remote origin adicionado

### Push para GitHub
- [ ] `git push -u origin main` executado
- [ ] Sem erros de autenticação
- [ ] Código visível no GitHub

---

## ⚙️ Após a Publicação

### Configuração do Repositório
- [ ] Descrição adicionada
- [ ] Topics/tags configurados:
  - [ ] chatbot
  - [ ] inpi
  - [ ] react
  - [ ] typescript
  - [ ] vite
  - [ ] propriedade-industrial
  - [ ] brasil
- [ ] Website URL adicionado (se aplicável)
- [ ] Issues habilitadas
- [ ] Discussions habilitadas (opcional)

### Proteção da Branch
- [ ] Branch protection rule criada para `main`
- [ ] Require PR before merging habilitado
- [ ] Require status checks habilitado

### README Verificação
- [ ] Imagens carregando corretamente
- [ ] Links funcionando
- [ ] Badges exibindo corretamente
- [ ] Formatação correta

### GitHub Actions
- [ ] Workflow executando
- [ ] Build passando
- [ ] Badge de status funcionando

---

## 🌐 Deploy (Opcional)

### Vercel
- [ ] Conta criada no Vercel
- [ ] Repositório conectado
- [ ] Build configurado
- [ ] Deploy bem-sucedido
- [ ] URL adicionada ao README

### Netlify
- [ ] Conta criada no Netlify
- [ ] Repositório conectado
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Deploy bem-sucedido

### GitHub Pages
- [ ] Branch configurada
- [ ] GitHub Pages habilitado
- [ ] Site acessível

---

## 📢 Divulgação

### Marketing
- [ ] Adicionar ao perfil do GitHub
- [ ] Pin no perfil (se for um dos melhores projetos)
- [ ] Compartilhar nas redes sociais
- [ ] Adicionar ao LinkedIn
- [ ] Adicionar ao portfólio

### Comunidade
- [ ] Convidar colaboradores
- [ ] Responder issues
- [ ] Revisar pull requests
- [ ] Manter changelog atualizado

---

## 🔄 Manutenção Contínua

### Semanal
- [ ] Verificar issues novas
- [ ] Responder discussões
- [ ] Verificar dependências desatualizadas

### Mensal
- [ ] Atualizar dependências (`npm update`)
- [ ] Revisar e responder PRs
- [ ] Atualizar documentação se necessário

### Por Release
- [ ] Atualizar CHANGELOG.md
- [ ] Criar GitHub Release
- [ ] Atualizar versão no package.json
- [ ] Criar tag git (`git tag v1.0.0`)

---

## 📊 Métricas de Sucesso

### Inicial (Primeira Semana)
- [ ] Pelo menos 1 estrela ⭐
- [ ] README visualizado
- [ ] Sem issues críticas

### Curto Prazo (Primeiro Mês)
- [ ] 5+ estrelas
- [ ] 1+ fork
- [ ] 1+ contribuidor externo (opcional)

### Longo Prazo
- [ ] 20+ estrelas
- [ ] 5+ forks
- [ ] Comunidade ativa
- [ ] Deploy em produção

---

## 🆘 Em Caso de Problemas

### Build Falhando
1. Verificar logs do GitHub Actions
2. Rodar `npm run build` localmente
3. Verificar versões do Node.js
4. Consultar CONTRIBUTING.md

### Issues de Autenticação
1. Configurar token do GitHub
2. Usar SSH em vez de HTTPS
3. Verificar permissões do repositório

### Deploy Falhando
1. Verificar variáveis de ambiente
2. Verificar logs do serviço
3. Testar build local
4. Consultar documentação do serviço

---

## ✅ Status Final

Marque quando 100% concluído:

- [x] **PRÉ-PUBLICAÇÃO**: Tudo pronto ✅
- [ ] **PUBLICAÇÃO**: Código no GitHub
- [ ] **PÓS-PUBLICAÇÃO**: Configurações completas
- [ ] **DEPLOY**: Site no ar (opcional)
- [ ] **DIVULGAÇÃO**: Projeto compartilhado

---

**Última atualização:** 31/12/2025

**Status Atual:** ✅ Projeto 100% estruturado e pronto para publicação!

🚀 Execute `./publish.ps1` ou siga `GITHUB_PUBLISH.md` para publicar!
