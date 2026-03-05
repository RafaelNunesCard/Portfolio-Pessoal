package classecontabancaria;

public class ContaBancaria {
    String titular;
    double saldo;

    void depositar(double valor) {
        System.out.println("Você depositou: " + valor);
        saldo += valor;
        mostrarSaldo();
    }

    void sacar(double valor) {
        if(valor > saldo) {
            System.out.println("Você tentou sacar um valor acima do saldo disponivel");
            return;
        }
        saldo -= valor;
        mostrarSaldo();
    }

    void mostrarSaldo() {
        System.out.println("Você tem na sua conta: " + saldo);
    }
}