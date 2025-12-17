const http = require('http');

const servidor = http.createServer((req, res) => {
    /*
    Solicitação: tudo que obtemos do cliente Ex:formulario, Email e senha
    Resposta: tudo que retornamos ao cliente do servidor
    */
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor rodando com NodeJS!");
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});