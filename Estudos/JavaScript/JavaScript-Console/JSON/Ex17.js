/*
    JSON válido:
    const pessoa = {
        nome: "Rafael",
        idade: 16
    };

    JSON válido:
    {
        "nome": "Rafael",
        "idade": 16
    }
    Isso normalmente está em arquivos .json ou é o que vem de uma API.
 */

//Objeto → JSON (enviar para API) .stringify
const obj1 = { nome: "Rafael", idade: 16 };
const json1 = JSON.stringify(obj1);
console.log(json1); // {"nome":"Rafael","idade":16}

//JSON → Objeto (receber da API) .parse

const json2 = '{"nome":"Rafael","idade":16}';
const obj2 = JSON.parse(json2);
console.log(obj2.nome); // Rafael


const produto = {
    nome: "Mouse Gamer",
    preço: 250,
    estoque: true
}

const json3 = JSON.stringify(produto)
console.log(json1)
