# CodePath — Plano de Ensino em Programação

Site estático com o plano completo de ensino de programação para adolescentes, exportado do projeto de planejamento pedagógico.

## Estrutura

```
plano-ensino/
├── index.html          # Página inicial — visão geral das 5 fases
├── fases/
│   ├── fase1.html      # Fundamentos de TI & Como o computador funciona
│   ├── fase2.html      # Redes, Internet & Segurança
│   ├── fase3.html      # Lógica de Programação & Algoritmos
│   ├── fase4.html      # Primeira Linguagem: Python
│   └── fase5.html      # Especialização & Projetos Autorais
├── assets/
│   ├── style.css       # Estilos globais
│   └── nav.js          # Navegação e interações
└── vercel.json         # Configuração de deploy (Vercel)
```

## Deploy na Vercel

### Opção 1 — Via GitHub (recomendado)
1. Suba esta pasta para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project"
4. Importe o repositório
5. Clique em Deploy — pronto!

### Opção 2 — Via Vercel CLI
```bash
npm i -g vercel
cd plano-ensino
vercel
```

### Opção 3 — Drag & Drop
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta `plano-ensino` para a área de upload

## Outras opções de hosting gratuito

- **GitHub Pages**: suba para um repositório `usuario.github.io/plano-ensino`
- **Netlify**: drag & drop da pasta em [app.netlify.com](https://app.netlify.com)
- **Cloudflare Pages**: similar à Vercel

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (sem framework)
- JavaScript vanilla (sem dependências)
- Google Fonts: Syne + DM Sans
- Responsivo para mobile
