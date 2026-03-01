package classecontabancaria;

public class ExemploContaBancaria {
    public static void main(String[] args) {
        ContaBancaria conta1 = new ContaBancaria;

        conta1.titular = "Rafael";
        conta1.saldo = 0;

        conta1.depositar(300);
        conta1.sacar(100);
        conta1.sacar(210);
    }
}