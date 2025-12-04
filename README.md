# NutriFit - Site de Nutrição e Suplementos

Site profissional desenvolvido em Angular 17 com Tailwind CSS, 100% responsivo, para loja de suplementos, dietas enterais, moda fitness e atendimento nutricional.

## 🚀 Características

- ✅ **100% Responsivo** - Design adaptável para mobile, tablet e desktop
- ✅ **Tailwind CSS** - Estilização moderna e profissional
- ✅ **Angular 17** - Framework moderno com componentes standalone
- ✅ **Integração WhatsApp** - Botões diretos para contato via WhatsApp
- ✅ **Código em Português BR** - Toda a estrutura e comentários em português brasileiro
- ✅ **Performance Otimizada** - Carregamento rápido e otimizado

## 📦 Estrutura do Projeto

```
src/app/
├── components/
│   ├── header/          # Cabeçalho com navegação responsiva
│   ├── hero/            # Seção principal (banner)
│   ├── produtos/        # Catálogo de produtos com filtros
│   ├── produto-card/    # Card individual de produto
│   ├── atendimento/     # Seção de atendimento nutricional
│   └── footer/          # Rodapé com informações
├── models/
│   └── produto.model.ts # Modelos de dados (Produto, Categoria)
├── services/
│   ├── produto.service.ts    # Serviço para gerenciar produtos
│   └── whatsapp.service.ts   # Serviço centralizado para WhatsApp
└── app.component.*      # Componente principal
```

## 🛠️ Tecnologias Utilizadas

- **Angular 17.3.0** - Framework principal
- **Tailwind CSS 3** - Framework CSS utilitário
- **TypeScript** - Linguagem de programação
- **RxJS** - Programação reativa

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto
2. Instale as dependências:

```bash
npm install
```

## 🚀 Executando o Projeto

### Servidor de Desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200/` no navegador.

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/site-nutri/`.

## 📱 Funcionalidades

### Seções do Site

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Banner principal com CTAs para WhatsApp
3. **Produtos** - Catálogo com filtros por categoria:
   - Suplementos
   - Dietas Enterais
   - Moda Fitness
4. **Atendimento** - Informações sobre serviços nutricionais
5. **Footer** - Links e informações de contato

### Integração WhatsApp

Todos os botões de contato abrem o WhatsApp com mensagens pré-formatadas:
- Produtos: Inclui nome e preço do produto
- Consultas: Mensagem específica para agendamento
- Contato geral: Mensagem padrão

**Número configurado:** +55 41 9121-7504

Para alterar o número, edite o arquivo:
`src/app/services/whatsapp.service.ts`

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Suas cores personalizadas
  }
}
```

### Produtos

Os produtos podem ser editados no arquivo:
`src/app/services/produto.service.ts`

### Conteúdo

Todo o conteúdo textual está nos templates HTML dos componentes em:
`src/app/components/`

## 📝 Estrutura de Código

- **Componentes Standalone** - Cada componente é independente
- **Serviços Injetáveis** - Lógica de negócio separada
- **Modelos TypeScript** - Tipagem forte para dados
- **Responsividade Mobile-First** - Design pensado primeiro para mobile

## 🌐 Navegação

O site utiliza scroll suave para navegação entre seções. Os links do menu fazem scroll automático para as seções correspondentes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato via WhatsApp através do próprio site.

## 📄 Licença

Este projeto foi desenvolvido para uso comercial.

---

**Desenvolvido com ❤️ usando Angular e Tailwind CSS**
# siteNutri
