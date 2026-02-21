void main() {
  int numero1 = 3;
  int numero2 = 2;

  print('Variavel numero 1 vale $numero1');
  print('Variavel numero 2 vale $numero2');

  int adicao = numero1 + numero2;
  print('Adição $adicao');

  int subtracao = numero1 - numero2;
  print('Subtração $subtracao');

  int multiplicacao = numero1 * numero2;
  print('Multiplicação $multiplicacao');

  double divisao = numero1 / numero2;
  print('Divisão $divisao');

  int divisaoParteInteira = numero1 ~/ numero2;
  print('Divisão Parte Inteira $divisaoParteInteira');

  int divisaoResto = numero1 % numero2;
  print('Divisão Resto $divisaoResto');

  numero1++;
  numero2--;
  numero1 -= 1;
  numero2 += 1;
}