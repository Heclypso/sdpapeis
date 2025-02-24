import express from 'express';
import path from 'path';

const app = express(); 
const porta = 3001

app.use(express.static(path.resolve("dist"))); // serve os arquivos de javascript/css/imagens estaticamente para serem usados no projeto

app.get("/", (req, res) => { // definição da rota home
    res.sendFile(path.resolve("dist", "index.html"));
});

app.get("/info", (req, res) => { // definição da rota info
    res.sendFile(path.resolve("dist", "info.html"));
});

app.listen(porta || 3000,()=>{
    console.log('servidor rodando');
});

export default (req, res) => { // necessário durante o deploy do projeto na vercel
    app(req, res);
};