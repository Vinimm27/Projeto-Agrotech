# 🌱 Projeto Agrotech

> **Plataforma Web para Conectar Startups do Agronegócio e Produtores Rurais**
> *Trabalho Acadêmico*

O **Projeto Agrotech** é uma aplicação Full-Stack cujo objetivo é criar uma ponte tecnológica entre as inovações das *AgTechs* (startups focadas na agricultura) e as necessidades práticas dos produtores rurais que buscam tecnologia, gestão inteligente e práticas mais sustentáveis no campo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi estruturado em duas partes principais (Frontend e Backend) para garantir a independência técnica e escalabilidade:

**🖥️ Frontend (Interface do Usuário):** 
- [React 19](https://react.dev/) - Biblioteca para construção de interfaces.
- [Vite](https://vitejs.dev/) - Ferramenta de build extremamente rápida.
- CSS Modules / Customizado para o layout moderno e responsivo.

**⚙️ Backend (API e Servidor):**
- [Node.js](https://nodejs.org/en) - Ambiente de execução JavaScript.
- [Express.js](https://expressjs.com/pt-br/) - Micro-framework para criação de APIs RESTful.
- [Nodemon](https://nodemon.io/) - Utilitário para auto-restart do servidor durante o desenvolvimento.
- **CORS** - Middleware para permitir integração segura com o frontend regional.

---

## 📂 Estrutura do Repositório

- 📁 `Backend/`: Caminho da API Node.js. Lida com a lógica de negócios e as rotas de fornecimento de dados das Startups e produtores.
- 📁 `frontend/`: Aplicação Web interativa desenvolvida com React, consumindo os endpoints criados no backend.

---

## 🚀 Guia de Instalação e Execução

Para rodar este projeto na sua máquina local de forma completa, você precisará abrir **dois terminais** (um para o backend e outro para o frontend).

### 1️⃣ Pré-requisitos
Certifique-se de que você possui o **[Node.js](https://nodejs.org/)** e o **Git** instalados na sua máquina.

Faça o clone no seu computador:
```bash
git clone https://github.com/Vinimm27/Projeto-Agrotech.git
cd Projeto-Agrotech
```

---

### 2️⃣ Inicializando o Backend (API REST)
Em um terminal, acesse a pasta raiz onde o backend está configurado:
```bash
cd Backend
```
Instale todas as dependências necessárias da API:
```bash
npm install
```
Ligue o servidor local com hot-reload ativo:
```bash
npm run dev
```
> 💡 *A API estará rodando por padrão na porta `3000` (ou similar apontada no terminal).*

---

### 3️⃣ Inicializando o Frontend (Interface em React)
Sem fechar o terminal do Backend, abra um **NOVO TERMINAL** apontando novamente para a raiz do repositório, e acesse o frontend:
```bash
cd frontend
```
Instale as dependências da interface web:
```bash
npm install
```
Suba o servidor de frontend através do Vite:
```bash
npm run dev
```
> O acesso será exposto localmente, normalmente na URL resultante: `http://localhost:5173`. Clique no link no terminal.

---

## 👨‍💻 Autor e Informações

Projeto desenvolvido com o intuito de exercitar e apresentar de forma prática conceitos fundamentais como criação e integração de APIs REST com aplicações SPA (Single Page Application) e gerenciamento de estado no React.
