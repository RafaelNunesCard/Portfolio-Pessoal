package carrinhodecompras;

public class CarrinhoDeCompras {
    public static void main(String[] args) {
        Carrinho carrinho1 = new Carrinho();
        
        Produto macarrao = new Produto();
        macarrao.nome = "Macarrao";
        macarrao.preco = 20;
        macarrao.quantidade = 2;
        
        Produto arroz = new Produto();
        macarrao.nome = "arroz";
        macarrao.preco = 35;
        macarrao.quantidade = 3;
        
        carrinho1.adicionarProduto(macarrao);
        carrinho1.adicionarProduto(arroz);
        carrinho1.aplicarCupom(5);
        carrinho1.mostrarResumo();
    }
}
