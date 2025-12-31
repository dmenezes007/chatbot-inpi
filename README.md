# Chatbot do INPI - Felinpi 🤖

<div align="center">

![Felinpi Banner](https://images.typeform.com/images/sAwNURdu4rNw)

**Sistema de chatbot interativo para orientação e atendimento do Instituto Nacional da Propriedade Industrial (INPI)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)

[Demonstração](#demonstração) • [Instalação](#instalação) • [Uso](#uso) • [Contribuir](#contribuir)

</div>

---

## 📋 Sobre o Projeto

O **Felinpi** é um chatbot interativo desenvolvido para facilitar o atendimento e orientação dos usuários do INPI (Instituto Nacional da Propriedade Industrial). Através de uma interface intuitiva baseada em perguntas e respostas, o sistema guia os usuários pelos diversos serviços e procedimentos do instituto.

### ✨ Funcionalidades Principais

- 🎯 **Navegação Guiada**: Sistema de perguntas e respostas em fluxo inteligente
- 🔄 **Lógica Condicional**: Direcionamento personalizado baseado nas escolhas do usuário
- 📱 **Interface Responsiva**: Design adaptável para desktop e dispositivos móveis
- 🎨 **UI/UX Moderna**: Interface limpa e intuitiva com animações suaves
- 🔗 **Links Contextuais**: Acesso direto a recursos e documentação relevante
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento rápido

### 🎯 Casos de Uso

O chatbot auxilia usuários em diversos cenários:

- Entendimento dos serviços do INPI
- Início de pedidos de registro
- Esclarecimento de dúvidas sobre processos
- Orientação sobre sistemas do INPI
- Identificação de mensagens fraudulentas
- Registro de reclamações e elogios
- Solicitação de acesso a informações
- E muito mais...

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React 19.2.3](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript 5.8.2](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite 6.2.0](https://vitejs.dev/)** - Build tool e dev server de próxima geração
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e personalizável
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Google Fonts (Inter)](https://fonts.google.com/)** - Tipografia moderna e legível

---

## 📦 Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Passos de Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/dmenezes007/chatbot-inpi.git
cd chatbot-inpi
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente** (opcional)

Se necessário, copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:3000`

---

## 🎮 Uso

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000` com hot-reload ativado.

### Build para Produção

Para gerar a build de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

---

## 📁 Estrutura do Projeto

```
chatbot-inpi/
├── .github/              # Configurações do GitHub
├── public/               # Arquivos públicos estáticos
├── src/                  # Código fonte
│   ├── components/       # Componentes React
│   │   └── App.tsx       # Componente principal
│   ├── data/             # Dados e configurações
│   │   └── formData.ts   # Dados do formulário/chatbot
│   ├── types/            # Definições TypeScript
│   │   └── index.ts      # Tipos e interfaces
│   ├── index.css         # Estilos globais
│   └── main.tsx          # Ponto de entrada da aplicação
├── .env.example          # Exemplo de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── ANALISE_FORMULARIO.md # Análise completa do formulário
├── estrutura_form_v2.json # Estrutura melhorada proposta
├── RESUMO_REVISAO.md     # Resumo da revisão realizada
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
└── README.md             # Este arquivo
```

---

## � Documentação

Este projeto inclui documentação completa:

- [README.md](README.md) - Documentação principal (você está aqui)
- [CONTRIBUTING.md](CONTRIBUTING.md) - Guia de contribuição
- [CHANGELOG.md](CHANGELOG.md) - Histórico de versões
- [ANALISE_FORMULARIO.md](ANALISE_FORMULARIO.md) - **Análise detalhada do formulário** 📊
- [RESUMO_REVISAO.md](RESUMO_REVISAO.md) - **Resumo executivo da revisão** 📋
- [estrutura_form_v2.json](estrutura_form_v2.json) - **Estrutura melhorada proposta** 🔄
- [GITHUB_PUBLISH.md](GITHUB_PUBLISH.md) - Guia de publicação no GitHub
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Resumo do projeto
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Código de conduta
- [SECURITY.md](SECURITY.md) - Política de segurança

### 🔍 Revisão do Formulário

Uma **revisão completa** das perguntas, respostas e lógica foi realizada. Veja:

- **[ANALISE_FORMULARIO.md](ANALISE_FORMULARIO.md)** - Análise técnica detalhada com 15.000+ palavras incluindo:
  - Identificação de problemas críticos
  - Conteúdo completo para todos os ativos (Marcas, Patentes, etc.)
  - Guias passo a passo detalhados
  - Informações sobre sistemas do INPI
  - Tabelas de custos e prazos
  - FAQ integrado

- **[RESUMO_REVISAO.md](RESUMO_REVISAO.md)** - Resumo executivo com:
  - Principais descobertas
  - Comparação antes/depois
  - Prioridades de implementação
  - Métricas de sucesso esperadas

- **[estrutura_form_v2.json](estrutura_form_v2.json)** - Nova estrutura JSON proposta com:
  - Todos os fluxos implementados
  - Navegação universal
  - Conteúdo rico e detalhado

---

## �🔧 Configuração

### Personalizando o Conteúdo

O conteúdo do chatbot é configurado no arquivo `src/data/formData.ts`. Você pode:

- Adicionar novas perguntas
- Modificar opções de resposta
- Ajustar a lógica de navegação
- Personalizar mensagens de boas-vindas e agradecimento

### Exemplo de Estrutura de Dados

```typescript
export const formData: TypeformData = {
  id: "unique-id",
  title: "Chatbot do INPI",
  welcome_screens: [/* ... */],
  fields: [/* ... */],
  thankyou_screens: [/* ... */],
  logic: [/* ... */]
};
```

---

## 🤝 Contribuir

Contribuições são sempre bem-vindas! Se você deseja contribuir com o projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Para mais detalhes, consulte [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Davison Menezes**

- GitHub: [@dmenezes007](https://github.com/dmenezes007)
- Repositório: [chatbot-inpi](https://github.com/dmenezes007/chatbot-inpi)

---

## 🙏 Agradecimentos

- Instituto Nacional da Propriedade Industrial (INPI)
- Comunidade React e TypeScript
- Todos os contribuidores do projeto

---

## 📞 Suporte

Se você encontrar algum problema ou tiver alguma dúvida:

- Abra uma [Issue](https://github.com/dmenezes007/chatbot-inpi/issues)
- Entre em contato através do GitHub

---

<div align="center">

**Feito com ❤️ para facilitar o acesso aos serviços do INPI**

⭐ Se este projeto foi útil para você, considere dar uma estrela!

</div>
