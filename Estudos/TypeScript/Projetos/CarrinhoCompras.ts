type Produto = {
    id: number,
    nome: String,
    preco: number,
    quantidade: number
}

let carrinho: Produto[] = [];

let produto1: Produto = {
    id: 1,
    nome: "Camiseta",
    preco: 29.99,
    quantidade: 2
}

let produto2: Produto = {
    id: 2,
    nome: "Calça Jeans",
    preco: 79.99,
    quantidade: 1
}

adionarProduto(produto1);
adionarProduto(produto2);

listarProdutos();

calcularTotal();

removerProduto(1);

listarProdutos();

function adionarProduto(produto: Produto) {
    carrinho.push(produto);
    console.log("Produto adicionado ao carrinho!");
}

function removerProduto(id: number){
    const index = carrinho.findIndex((produto) => produto.id === id);
    if(index !== -1){
        carrinho.splice(index, 1);
        console.log("Produto removido do carrinho!");
    } else {
        console.log("Produto não encontrado no carrinho.");
    }
}

function listarProdutos() {
    console.log("Produtos no carrinho:");
    carrinho.forEach((produto) => {
        console.log(`Nome: ${produto.nome}  Preço: R$${produto.preco}  Quantidade: ${produto.quantidade}`);
    });
}

function calcularTotal() {
    const total = carrinho.reduce((acc, produto) => acc + (produto.preco * produto.quantidade), 0);
    console.log(`Total do carrinho: R$${total.toFixed(2)}`);
}