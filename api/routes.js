import express from 'express'
import path from 'path'

const app = express();
const PORT = 3001;

app.use(express.static(path.resolve("dist"))); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
});;

app.get("/info", (req, res) => {
    res.sendFile(path.resolve("dist", "info.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

export default (req, res) => {
    app(req, res); 
};