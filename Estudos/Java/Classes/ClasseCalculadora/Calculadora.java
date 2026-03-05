package classecalculadora;

public class Calculadora {
    int somar(int a, int b) {
        return a + b;
    }

    int subtrair(int a, int b) {
        return a - b;
    }

    int multiplicar(int a, int b) {
        return a * b;
    }

    double dividir(int a, int b) {
        if( a == 0 || b == 0) {
            return 0;
        }
        else {
            return a / b;
        }
    }
}