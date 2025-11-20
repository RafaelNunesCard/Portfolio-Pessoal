const http = require('http')
const server = http.createServer((solicitação, resposta) => {
    /*
    Solicitação: tudo que obtemos do cliente Ex:formulario, Email e senha
    Resposta: tudo que retornamos ao cliente do servidor
    */
   resposta.white('hello World')
   resposta.end()
})
server.listen(3000)