import express from 'express';
import cors from 'cors';
import listaStartups from './startups.js';

const app = express();
const port = 3000;

// --- CONFIGURAÇÕES (MIDDLEWARES) ---
// Libera o acesso para o React (Porta 5173)
app.use(cors());

// Ensina o servidor a ler pacotes JSON enviados pelo formulário
app.use(express.json());

// --- ROTAS ---

// 1. Rota Principal: Teste básico
app.get('/', (req, res) => {
    res.send('AgroTech Connect: O servidor está rodando!');
});

// 2. Rota GET: Retorna a lista de startups
app.get('/startups', (req, res) => {
    res.json(listaStartups);
});

// 3. Rota POST: Recebe novos dados
app.post('/startups', (req, res) => {
    const novaStartup = req.body;
    novaStartup.id = listaStartups.length + 1;
    listaStartups.push(novaStartup);
    res.status(201).json(novaStartup);
});

// --- INICIALIZAÇÃO ---
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});