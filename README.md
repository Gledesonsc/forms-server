# 🚀 Projeto Server

Bem-vindo ao **Projeto Server**! Este repositório contém um servidor Node.js configurado para rodar em ambiente de desenvolvimento com facilidade. Vamos explorar as funcionalidades e como você pode configurar e rodar o projeto no seu ambiente local.

## 📋 Sumário

- [📦 Pré-requisitos](#-pré-requisitos)
- [⚙️ Instalação](#️-instalação)
- [🚀 Scripts Disponíveis](#-scripts-disponíveis)
- [💻 Rodando a Aplicação](#-rodando-a-aplicação)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [📜 Licença](#-licença)

## 📦 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## ⚙️ Instalação

Clone o repositório na sua máquina local usando o comando abaixo:

```bash
git clone https://github.com/Gledesonsc/forms-server.git
```

Navegue até a pasta do projeto e instale as dependências:

```bash
cd seu-repositorio
npm install
```

## 🚀 Scripts Disponíveis

No seu arquivo `package.json`, os seguintes scripts estão configurados:

- **`npm start`**: Inicia o servidor Node.js localizado em `server/server.js`.
- **`npm run server`**: Inicia o servidor com o [Nodemon](https://nodemon.io/), permitindo hot-reload durante o desenvolvimento.
- **`npm run client`**: Navega até a pasta `server` e executa `npm start`.
- **`npm run dev`**: Executa os scripts de `server` e `client` simultaneamente usando [Concurrently](https://www.npmjs.com/package/concurrently).

## 💻 Rodando a Aplicação

Para iniciar o projeto em ambiente de desenvolvimento, utilize:

```bash
npm run dev
```

Isso executará tanto o servidor quanto o cliente simultaneamente. Ideal para quem está desenvolvendo e precisa ver as mudanças em tempo real.

### 🛠️ Debugging

Se você encontrar problemas como módulos faltando, verifique se os caminhos no seu script estão corretos e se as dependências estão devidamente instaladas.

## 📂 Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```plaintext
sistema/
├── server/
│   ├── server.js
│   ├── ... (outros arquivos do servidor)
├── package.json
└── README.md
```

## 📜 Licença

Este projeto está licenciado sob a licença [ADA](LICENSE).

---

Desenvolvido com ❤️ por [Elias](https://github.com/Gledesonsc).