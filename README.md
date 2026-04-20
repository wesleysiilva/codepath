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
│       │   # Fase 1 — Módulo 3: Sistemas Operacionais
│       ├── fase1-so-intro.html               # O que é um SO
│       ├── fase1-so-sistemas.html            # Windows, Linux e macOS
│       ├── fase1-so-processos.html           # Processos e memória
│       ├── fase1-so-arquivos.html            # Sistema de arquivos
│       │
│       │   # Fase 1 — Módulo 4: Representação de Dados
│       ├── fase1-rd-binario.html             # Sistema binário
│       ├── fase1-rd-hex.html                 # Hexadecimal
│       ├── fase1-rd-inteiros.html            # Inteiros e negativos (complemento de 2)
│       ├── fase1-rd-texto.html               # Texto: ASCII e Unicode/UTF-8
│       ├── fase1-rd-imagens.html             # Imagens e pixels (RGB)
│       ├── fase1-rd-compressao.html          # Compressão lossless e lossy
│       │
│       │   # Fase 1 — Módulo 5: Linha de Comando
│       ├── fase1-cli-intro.html              # Terminal e shell
│       ├── fase1-cli-navegacao.html          # Navegação (pwd, ls, cd, mkdir, rm)
│       ├── fase1-cli-arquivos.html           # Manipulação de arquivos e pipes
│       ├── fase1-cli-permissoes.html         # Permissões, sudo, PATH e env vars
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
| Fase 1 | Sistemas Operacionais | 4 | ✅ 4 completas |
| Fase 1 | Representação de Dados | 6 | ✅ 6 completas |
| Fase 1 | Linha de Comando | 4 | ✅ 4 completas |
| Fase 2 | Redes & Internet | — | — |
| Fase 3 | Lógica & Algoritmos | — | — |
| Fase 4 | Python | — | — |
| Fase 5 | Especialização | — | — |

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (`--fase-color`, `--bg`, `--bg2`, etc.) — sem framework
- JavaScript vanilla — sem dependências
- Google Fonts: Syne + DM Sans
- Responsivo para mobile
