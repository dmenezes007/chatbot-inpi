# Guia de Contribuição

Obrigado por considerar contribuir com o Chatbot do INPI - Felinpi! 🎉

## 📋 Código de Conduta

Este projeto e todos os participantes estão sob o compromisso de manter um ambiente respeitoso e acolhedor. Por favor, seja cordial e profissional em todas as interações.

## 🚀 Como Contribuir

### Reportando Bugs

Se você encontrou um bug, por favor:

1. **Verifique se o bug já foi reportado** nas [Issues](https://github.com/dmenezes007/chatbot-inpi/issues)
2. Se não encontrou, **abra uma nova issue** incluindo:
   - Descrição clara e concisa do problema
   - Passos para reproduzir o comportamento
   - Comportamento esperado vs. comportamento atual
   - Screenshots (se aplicável)
   - Ambiente (navegador, versão do Node.js, etc.)

### Sugerindo Melhorias

Adoramos receber sugestões de melhorias! Para sugerir uma nova feature:

1. **Verifique se a sugestão já existe** nas [Issues](https://github.com/dmenezes007/chatbot-inpi/issues)
2. **Abra uma issue** com a tag `enhancement` incluindo:
   - Descrição detalhada da funcionalidade
   - Por que essa funcionalidade seria útil
   - Exemplos de uso (se possível)

### Pull Requests

#### Processo de Desenvolvimento

1. **Fork o repositório** e crie sua branch a partir da `main`:
   ```bash
   git checkout -b feature/minha-nova-feature
   ```

2. **Faça suas alterações** seguindo os padrões do projeto

3. **Teste suas alterações**:
   ```bash
   npm run dev
   npm run build
   ```

4. **Commit suas mudanças** com mensagens descritivas:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

5. **Push para seu fork**:
   ```bash
   git push origin feature/minha-nova-feature
   ```

6. **Abra um Pull Request** para a branch `main` do repositório original

#### Padrões de Código

- Use **TypeScript** para todo código novo
- Siga as convenções de nomenclatura existentes
- Mantenha o código limpo e bem comentado
- Use **componentes funcionais** e **React Hooks**
- Siga os padrões de formatação do projeto

#### Mensagens de Commit

Usamos o padrão de mensagens semânticas:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula, etc (sem mudança de código)
- `refactor:` Refatoração de código
- `test:` Adição ou modificação de testes
- `chore:` Atualizações de build, configurações, etc

Exemplos:
```
feat: adiciona suporte para múltiplos idiomas
fix: corrige navegação entre perguntas
docs: atualiza README com novas instruções
```

## 🏗️ Estrutura do Projeto

```
chatbot-inpi/
├── src/
│   ├── components/    # Componentes React
│   ├── data/          # Dados e configurações
│   ├── types/         # Definições TypeScript
│   └── main.tsx       # Ponto de entrada
├── public/            # Arquivos estáticos
└── ...
```

## 🧪 Testes

Antes de submeter um PR, certifique-se de que:

- [ ] O código compila sem erros (`npm run build`)
- [ ] A aplicação roda corretamente em desenvolvimento (`npm run dev`)
- [ ] Não há erros no console do navegador
- [ ] A funcionalidade foi testada manualmente
- [ ] O código está formatado corretamente

## 📝 Checklist do Pull Request

Antes de submeter seu PR, verifique se:

- [ ] Seu código segue os padrões do projeto
- [ ] Você escreveu mensagens de commit descritivas
- [ ] Você atualizou a documentação (se necessário)
- [ ] Suas alterações não quebram funcionalidades existentes
- [ ] Você adicionou comentários no código (quando necessário)
- [ ] O PR tem um título e descrição claros

## 🤔 Dúvidas?

Se você tiver qualquer dúvida sobre como contribuir:

- Abra uma [Issue](https://github.com/dmenezes007/chatbot-inpi/issues) com a tag `question`
- Entre em contato através do GitHub

## 📜 Licença

Ao contribuir com este projeto, você concorda que suas contribuições serão licenciadas sob a [Licença MIT](LICENSE).

---

**Obrigado por contribuir!** 🙏

Cada contribuição, por menor que seja, faz diferença e é muito apreciada!
