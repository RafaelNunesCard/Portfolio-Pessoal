package classeprodutodesconto;

public class ExemploProdutoDesconto {
    public static void main(String[] args) {
        Produto produto1 = new Produto;

        produto1.nome = "Memoria RAM";
        produto1.preco = 1299.99;

        produto1.aplicarDesconto(15);
        produto1.calcularPrecoComImposto(18);
        produto1.exibirProduto();
    }
}
