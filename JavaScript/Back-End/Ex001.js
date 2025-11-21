const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const dados = {
        aluno: "Rafael",
        curso: "DS",
        ano: 2024
    };

    res.end(JSON.stringify(dados));
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
