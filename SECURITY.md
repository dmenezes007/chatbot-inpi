# Política de Segurança

## Versões Suportadas

Atualmente, as seguintes versões do projeto recebem atualizações de segurança:

| Versão | Suportada          |
| ------ | ------------------ |
| 1.0.x  | :white_check_mark: |
| < 1.0  | :x:                |

## Reportando uma Vulnerabilidade

A segurança do Chatbot do INPI - Felinpi é levada a sério. Se você descobriu uma vulnerabilidade de segurança, por favor, siga estas diretrizes:

### Como Reportar

1. **NÃO** abra uma issue pública sobre a vulnerabilidade
2. Envie um email para o mantenedor através do GitHub
3. Ou use a funcionalidade "Security Advisories" do GitHub

### O que incluir no seu relatório

Por favor, inclua o máximo de informação possível:

- Tipo de vulnerabilidade
- Localização do código afetado (arquivo, linha)
- Passos para reproduzir o problema
- Impacto potencial da vulnerabilidade
- Sugestões de correção (se houver)

### O que esperar

- Você receberá uma confirmação do recebimento do seu relatório em até 48 horas
- Manteremos você informado sobre o progresso da correção
- Reconheceremos sua contribuição (se desejar) quando a correção for publicada

## Práticas de Segurança

### Para Usuários

- Sempre use a versão mais recente do projeto
- Nunca compartilhe suas credenciais ou chaves de API
- Revise as configurações de segurança regularmente
- Mantenha suas dependências atualizadas

### Para Desenvolvedores

- Nunca commite credenciais, tokens ou chaves de API
- Use variáveis de ambiente para informações sensíveis
- Mantenha as dependências atualizadas
- Revise o código antes de fazer merge
- Execute auditorias de segurança regularmente: `npm audit`

## Atualizações de Segurança

Atualizações de segurança críticas serão lançadas o mais rápido possível e comunicadas através de:

- GitHub Security Advisories
- Release notes
- README do projeto

## Reconhecimentos

Agradecemos a todos que reportam vulnerabilidades de forma responsável e ajudam a manter o projeto seguro.

---

**Última atualização:** 31/12/2025
