void main() {
  
  int numero1 = 10;
  int numero2 = 20;

  print('Numero1 $numero1, numero2 $numero2');

  if(numero1 == numero2){
    print('Numero1 é igual ao numero2');
  }else if(numero1 < numero2){
    print('Numero1 é menor que o numero2');
  }else{
    print('Eles não são iguais');
  }


  //condições
  if(numero1 > numero2){
    print('Numero1 é maior que o numero2');
  }

  if(numero1 < numero2){
    print('Numero1 é menor que o numero2');
  }

  if(numero1 >= numero2){
    print('Numero1 é maior ou igual que o numero2');
  }

  if(numero1 <= numero2){
    print('Numero1 é menor ou igual que o numero2');
  }

  if(numero1 != numero2){
    print('Numero1 é diferente do numero2');
  }



  //And e Or
  String clima = 'Sol';
  int temperatura = 20;

  // && and
  if(clima == 'Sol' && temperatura < 30){
    print('Vou sair de casa');
  }else{
    print('Vou ficar em casa');
  }

  // || or
  if(clima == 'Sol' || temperatura < 30){
    print('Vou sair de casa');
  }else{
    print('Vou ficar em casa');
  }


  // Operador Ternário
  //bool condicao = true;
  //String nome = 'Daves';

  // print(condicao ? 'Condição Verdadeira' : 'Condição Falsa');

  print(2 < 3 ? 'Menor' : 'Maior');

  //String cliente = nome == 'Daves' ? 'Nome OK' : 'Nome Errado';
}