package classeprodutodesconto;

public class Produto {
    String nome;
    double preco;

    void aplicarDesconto(double porcentagem) {
        preco -= preco * (porcentagem / 100);
        System.out.println("Novo preco: " + preco);
    }

    double calcularPrecoComImposto(double imposto) {
        return preco * imposto;
    }

    void exibirProduto() {
        System.out.println("Produto: " + nome);
        System.out.println("Preco: " + preco);
    }
}
