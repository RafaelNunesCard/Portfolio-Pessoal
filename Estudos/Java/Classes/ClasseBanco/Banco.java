package classebanco;

public class Banco {
    Conta[] contas = new Conta[10];
    int idContas = 0;
    
    void cadastrarConta(String nome, int numero, double saldo) {
        Conta conta1 = new Conta();
        
        contas[idContas] = conta1;
        conta1.numero = numero;
        conta1.titular = nome;
        conta1.saldo = saldo;
        
        idContas++;
    }
    
    Conta buscarConta(int numero) {
        for(int i = 0; i < idContas; i++) {
            if(contas[i].numero == numero) {
                return contas[i];
            }
        }
        return null;
    }
    
    void transferir(int origem, int destino, double valor) {
        Conta contaOrigem = buscarConta(origem);
        Conta contaDestino = buscarConta(destino);

        if(contaOrigem != null && contaDestino != null) {
            contaOrigem.transferir(contaDestino, valor);
        } else {
            System.out.println("Conta não encontrada!");
        }
    }
}
