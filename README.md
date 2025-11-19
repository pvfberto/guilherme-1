# Landing Page - Método Paciente de Alto Lucro

Landing page de alta conversão desenvolvida com **React**, **Vite** e **Tailwind CSS**, seguindo o aesthetic minimalista da Apple.

## 🎨 Características de Design

- **Apple Aesthetic**: Minimalista, muito espaço em branco (whitespace)
- **Tipografia**: Hierarquia clara com fonte Inter/SF Pro Display
- **Bento Grids**: Cards com layout moderno e responsivo
- **Glassmorphism**: Efeitos de blur na navegação e cards flutuantes
- **Animações Suaves**: Transições e hover effects elegantes
- **Totalmente Responsivo**: Mobile-first design

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── SocialProof.jsx
│   ├── ProblemSection.jsx
│   ├── SolutionSection.jsx
│   ├── MechanismSection.jsx
│   ├── SocialProofDeep.jsx
│   ├── WhatYouGetSection.jsx
│   ├── AboutSection.jsx
│   ├── GuaranteeSection.jsx
│   ├── PricingSection.jsx
│   ├── FAQSection.jsx
│   ├── FinalCTASection.jsx
│   └── Footer.jsx
├── App.jsx            # Componente principal
├── main.jsx          # Entry point
└── index.css         # Estilos globais e Tailwind

```

## 🎯 Seções da Landing Page

1. **Hero Section**: Split screen com headline poderosa
2. **Prova Social Rápida**: Vídeos de depoimentos
3. **Problema**: Container dark mostrando as dores
4. **Solução**: Container light com os benefícios
5. **Mecanismo**: 4 Pilares do método (Bento Grid)
6. **Prova Social Profunda**: Mais depoimentos + estatísticas
7. **O Que Você Vai Levar**: Benefícios do workshop
8. **Sobre o Guilherme**: Bio e credibilidade
9. **Garantia**: Selo de garantia incondicional
10. **Urgência + Preço**: Timer countdown e lotes
11. **FAQ**: Perguntas frequentes com accordion
12. **CTA Final**: Último empurrão com 2 caminhos

## 🛠️ Tecnologias

- **React 18**: Biblioteca JavaScript para UI
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utility-first
- **Lucide React**: Ícones modernos
- **PostCSS**: Processamento de CSS

## 📝 Customização

### Cores

As cores principais estão definidas em `tailwind.config.js`:

```js
colors: {
  apple: {
    bg: '#F5F5F7',      // Fundo geral
    dark: '#1c1c1e',    // Dark containers
    text: '#86868b',    // Texto secundário
    blue: '#0071e3',    // CTA buttons
  }
}
```

### Fontes

A landing page usa a fonte **Inter** (similar à SF Pro Display da Apple). Importada via Google Fonts no `index.html`.

## 🔗 Deploy

Para fazer deploy, build o projeto e suba a pasta `dist` para seu servidor:

```bash
npm run build
```

## 📄 Licença

© Dr. Guilherme Fattori - Todos os Direitos Reservados
