type Produto2 = {
    id: number
    nome: string
    preco: number
    estoque: number
    fornecedor: string
}

type ProdutoSemFornecedor = Omit<Produto2, "fornecedor"> 
let ProdutoSemFornecedor = {
    id: 1,
    nome: "mouse",
    preco: 200,
    estoque: 20
}

type ProdutoCarrinho = Pick<Produto2, "nome" | "preco">
let ProdutoCarrinho = {
    nome: "mouse",
    preco: 200
}