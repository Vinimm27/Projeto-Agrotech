import express from 'express';
import cors from 'cors'; // 1. Importe o CORS
import listaStartups from './startups.js';

const app = express();
const port = 3000;

app.use(cors()); // 2. Libere a entrada do trator no galpão!
app.use(express.json()); // Necessário para os próximos módulos

app.get('/startups', (req, res) => {
    res.json(listaStartups);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});