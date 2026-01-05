# 🎲 Sorteador de Números

<p align="center">
  <img src="./src/assets/logo.svg" alt="Numbers Logo" width="80">
</p>

<p align="center">
  <strong>Um sorteador de números aleatórios online, gratuito e fácil de usar.</strong>
</p>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-usar">Como Usar</a> •
  <a href="#-instalação">Instalação</a>
</p>

---

## ✨ Funcionalidades

O **Sorteador de Números** permite gerar números aleatórios de forma rápida e prática. Ideal para rifas, jogos, sorteios e qualquer situação onde você precise de números aleatórios.

### 🎯 Recursos Principais

| Recurso                       | Descrição                                                                 |
| ----------------------------- | ------------------------------------------------------------------------- |
| **Intervalo Personalizado**   | Defina o valor mínimo e máximo para o sorteio.                            |
| **Quantidade Configurável**   | Escolha quantos números deseja sortear de uma só vez.                     |
| **Modo Único (Sem Repetição)** | Ative a opção para garantir que nenhum número se repita no resultado.     |
| **Interface Moderna**         | Design limpo, responsivo e com animações suaves.                          |
| **Sortear Novamente**         | Refaça o sorteio com um clique, mantendo as configurações anteriores.     |

---

## 🛠️ Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

-   **HTML5** — Estrutura semântica da aplicação.
-   **CSS3** — Estilização customizada com variáveis CSS, animações (`@keyframes`) e design responsivo.
-   **JavaScript (ES6+)** — Lógica de sorteio, manipulação do DOM e criação dinâmica de elementos.
-   **Vite** — Build tool para um desenvolvimento rápido e eficiente.
-   **Google Fonts** — Tipografias Sora e Roboto Mono.
-   **Huge Icons** — Ícones vetoriais de alta qualidade.

---

## 🚀 Como Usar

1.  Acesse a aplicação.
2.  No campo **"NÚMEROS"**, informe a **quantidade** de números que deseja sortear.
3.  No campo **"DE"**, defina o **valor mínimo** do intervalo.
4.  No campo **"A"**, defina o **valor máximo** do intervalo.
5.  **(Opcional)** Marque a caixa **"Não repetir número"** se quiser que todos os números sorteados sejam únicos.
6.  Clique em **"SORTEAR"**.
7.  Os números sorteados serão exibidos na tela.
8.  Para um novo sorteio, clique em **"SORTEAR NOVAMENTE"**.

---

## 📦 Instalação

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
-   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
-   [pnpm](https://pnpm.io/) ou npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/NobodyDe/SorteadorDeNumeros.git

# Entre na pasta do projeto
cd SorteadorDeNumeros

# Instale as dependências
pnpm install
# ou
npm install

# Rode o servidor de desenvolvimento
pnpm run dev
# ou
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 📁 Estrutura do Projeto

```
.
├── index.html              # Página principal
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
└── src/
    ├── main.js             # Lógica principal da aplicação
    ├── assets/
    │   └── logo.svg        # Logo da aplicação
    └── styles/
        ├── style.css       # Estilos principais
        ├── tipography.css  # Sistema tipográfico
        ├── variants.css    # Tokens de design (cores, gradientes)
        └── checkbox.css    # Estilos do checkbox customizado
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 por <a href="https://github.com/NobodyDe">NobodyDe</a>
</p>
