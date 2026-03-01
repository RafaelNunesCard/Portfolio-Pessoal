package classebanco;

public class TransferenciaBancaria {
    public static void main(String[] args) {
        Banco banco = new Banco();

        banco.cadastrarConta("Rafael", 1, 1000);
        banco.cadastrarConta("Derek", 2, 500);

        banco.transferir(1, 2, 200);
    }
}
