package classebanco;

public class Conta {
    int numero;
    String titular;
    double saldo;

    void depositar(double valor) {
        saldo += valor;
    }

    boolean sacar(double valor) {
        if(valor <= saldo) {
            saldo -= valor;
            return true;
        } else {
            System.out.println("Saldo insuficiente!");
            return false;
        }
    }

    void transferir(Conta destino, double valor) {
        if(sacar(valor)) {
            destino.depositar(valor);
            System.out.println("Transferência realizada!");
        }
    }
}
