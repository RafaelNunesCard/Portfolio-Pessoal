type Produto = {
    id: number | String,
    nome: String,
    preco: number
}

let produtos: Produto[] = []

function adicionarProduto(produto: Produto) {
    produtos.push(produto);
}

function listarProduto() {
    for(let produto of produtos) {
        console.log(produto);
    }
}

adicionarProduto({id: 1, nome: "Mouse", preco: 50});
adicionarProduto({id: 2, nome: "Teclado", preco: 120});

listarProduto();