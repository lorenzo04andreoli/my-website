# Portfólio Profissional

Este repositório contém meu portfólio profissional, desenvolvido com HTML5, CSS3 e JavaScript. O objetivo do projeto é apresentar minhas habilidades técnicas, experiências, projetos e formas de contato em uma página pessoal moderna, responsiva e organizada.

## Visão geral

Criei este portfólio para servir como uma apresentação profissional online, reunindo informações relevantes sobre minha trajetória como desenvolvedor, minhas principais tecnologias, experiências práticas e projetos desenvolvidos.

A página possui navegação por seções, efeitos visuais, animação de texto, cards de projetos, formulário de contato funcional e layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Font Awesome
- EmailJS
- Toastify.js

## Estrutura do projeto

```text
MY-WEBSITE/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── analisador curriculos IA.jpg
│   │   ├── automacao python.jpg
│   │   ├── Dashboard CCC.jpg
│   │   ├── devops.png
│   │   ├── Gestao Consultas.png
│   │   ├── Lorenzo.jpg
│   │   └── qrcode.png
│   └── js/
│       └── script.js
└── index.html
```

## Seções da página

### Home

Seção inicial com foto de perfil, apresentação profissional, efeito de digitação e botões de navegação para projetos e contato.

### Sobre mim

Resumo profissional com informações sobre formação, foco de atuação e principais tecnologias utilizadas.

### Experiências

Linha do tempo com experiências profissionais e atividades desenvolvidas, destacando atuação com backend, segurança, banco de dados, automações, testes, Docker e AWS.

### Projetos

Cards com projetos desenvolvidos, imagens ilustrativas, descrições e links para os respectivos repositórios no GitHub.

### Contato

Formulário funcional integrado ao EmailJS, além de links diretos para e-mail, WhatsApp, GitHub e LinkedIn.

## Funcionalidades

- Layout responsivo para desktop, tablet e mobile
- Menu hamburguer em telas menores
- Efeito de digitação na apresentação inicial
- Efeito animado de estrelas com Canvas nas seções Home, Experiências e Contato
- Cards de projetos com overlay interativo
- Formulário de contato com envio via EmailJS
- Notificações visuais com Toastify.js
- Navegação suave entre seções
- Organização visual com tema escuro e seções contrastantes

## Organização do código

O projeto está dividido em três partes principais:

- `index.html`: estrutura da página e conteúdo das seções
- `assets/css/style.css`: estilização, responsividade, animações e identidade visual
- `assets/js/script.js`: funcionalidades interativas, formulário, menu mobile, typewriter e efeito de estrelas

O JavaScript foi organizado em funções independentes para facilitar manutenção e leitura:

- `initTypewriter()`
- `initMenu()`
- `initContactForm()`
- `createSpace()`

## Melhorias futuras

- Adicionar alternância entre tema claro e escuro
- Incluir seção de certificações
- Adicionar filtros por categoria nos projetos
- Melhorar acessibilidade com mais atributos ARIA
- Criar uma versão multilíngue do portfólio
- Adicionar link para download do currículo

## Autor

Lorenzo Carneiro Andreoli

- GitHub: https://github.com/lorenzo04andreoli
- LinkedIn: https://linkedin.com/in/lorenzo-04-andreoli
- E-mail: lorenzo04andreoli@gmail.com
