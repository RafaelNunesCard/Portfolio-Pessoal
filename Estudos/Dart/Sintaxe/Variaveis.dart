void main() {

  int valor = 1;
  double pi = 3.14;
  String nome = 'Rafael';
  bool verdadeiro = true;
  
  var numero = 1; // indentifica qual o tipo de variavel mas ele não pode mudar o tipo
  numero = 2;
  
  dynamic variavel = 1;
  variavel = 'Um';
  
  print(valor);
  print(pi);
  print(nome);
  print(verdadeiro);
  print(numero);
  print(variavel);

  
  // Concatenação
  int codigo = 3;
  
  print('Código é $codigo ou ${codigo * 2}');
  
  print('Codigo ' + codigo.toString() + ' e tambem ' + 
        (codigo * 2 ).toString());
  
}