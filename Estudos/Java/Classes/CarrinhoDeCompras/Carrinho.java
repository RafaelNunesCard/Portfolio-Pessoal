package carrinhodecompras;

public class Carrinho {
    Produto[] produtos = new Produto[20];
    int idProdutos = 0;
    double total = 0;
    
    void adicionarProduto(Produto produto) {
        produtos[idProdutos] = produto;
        idProdutos++;
    }
    
    void removerProduto(Produto produto) {
        for (int i = 0; i < idProdutos; i++) {
           if(produtos[i] == produto){
               
            // deslocar elementos para esquerda
            for(int j = i; j < idProdutos - 1; j++) {
                produtos[j] = produtos[j + 1];
            }
            
            produtos[idProdutos - 1] = null;
            idProdutos--;
            break;
           }
        }
    }
    
    void calcularTotal() {
        total = 0;
        for(int i = 0; i < idProdutos; i++){
           total += (produtos[i].preco * produtos[i].quantidade);
        }
    }
    
    void aplicarCupom(double porcetagem) {
        if(total > 500) {
           total -= total * 0.1;
        }
        else{
           total -= total * (porcetagem / 100);
        }
    }
    
    void mostrarResumo() {
        calcularTotal();
        System.out.println("R$ " + total);
    }
}
