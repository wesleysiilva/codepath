# CodePath — Plano de Ensino em Programação

Site estático com o plano completo de ensino de programação, estruturado em 5 fases progressivas. Cada fase possui módulos com cards clicáveis que abrem páginas de aula completas.

## Estrutura

```
curso_programador/
├── index.html                        # Página inicial — visão geral das 5 fases
├── assets/
│   ├── style.css                     # Estilos globais (tema escuro, sistema de aulas)
│   └── nav.js                        # Navegação mobile e interações
├── fases/
│   ├── fase1.html                    # Fase 1 — Fundamentos de TI
│   ├── fase2.html                    # Fase 2 — Redes, Internet & Segurança
│   ├── fase3.html                    # Fase 3 — Lógica & Algoritmos
│   ├── fase4.html                    # Fase 4 — Primeira Linguagem: Python
│   ├── fase5.html                    # Fase 5 — Especialização & Projetos Autorais
│   └── aulas/
│       │
│       │   # Fase 1 — Módulo 1: Arquitetura de Von Neumann
│       ├── fase1-vn-memoria.html         # Memória unificada
│       ├── fase1-vn-uc.html              # Unidade de Controle
│       ├── fase1-vn-ula.html             # ULA — Unidade Lógica e Aritmética
│       ├── fase1-vn-fde.html             # Ciclo Fetch-Decode-Execute
│       ├── fase1-vn-registradores.html   # Registradores
│       ├── fase1-vn-barramento.html      # Barramento (Bus)
│       │
│       │   # Fase 1 — Módulo 2: Hardware & Componentes
│       ├── fase1-cpu.html                # CPU — o cérebro
│       ├── fase1-ram.html                # RAM — memória de trabalho
│       ├── fase1-armazenamento.html      # HD & SSD — armazenamento
│       ├── fase1-gpu-placa-mae.html      # GPU & Placa-mãe
│       ├── fase1-perifericos.html        # Periféricos & I/O
│       └── fase1-atividade-hardware.html # Atividade prática
└── vercel.json                       # Configuração de deploy (Vercel)
```

## Status do conteúdo

| Fase | Módulo | Cards | Aulas |
|------|--------|-------|-------|
| Fase 1 | Arquitetura de Von Neumann | 6 | ✅ 6 completas |
| Fase 1 | Hardware & Componentes | 6 | ✅ 6 completas |
| Fase 2 | Redes & Internet | — | — |
| Fase 3 | Lógica & Algoritmos | — | — |
| Fase 4 | Python | — | — |
| Fase 5 | Especialização | — | — |

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
vercel
```

### Opção 3 — Drag & Drop
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta do projeto para a área de upload

## Outras opções de hosting gratuito

- **GitHub Pages**: suba para um repositório e ative Pages nas configurações
- **Netlify**: drag & drop da pasta em [app.netlify.com](https://app.netlify.com)
- **Cloudflare Pages**: similar à Vercel

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (`--fase-color`, `--bg`, `--bg2`, etc.) — sem framework
- JavaScript vanilla — sem dependências
- Google Fonts: Syne + DM Sans
- Responsivo para mobile
