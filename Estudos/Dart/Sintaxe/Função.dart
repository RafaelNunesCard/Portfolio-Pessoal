void main() {
  int valor = 10;
  
  print(ePar(valor) ? 'Par' : 'Impar' );

  print('O dobro de $valor é ${multiplicaDois(valor)}');
  
  printNomeIdade('Otavio', 20);
  
  printNome('Otavio');

}

bool ePar( int valor ) {
  if(valor % 2 == 0){
    return true;
  }else{
    return false;
  }
}

int multiplicaDois( int valor ) {
  return valor * 2;
}

/*
void minhaFuncao( String nome, {String? telefone}) {
  print( 'Nome: $nome Telefone: $telefone' );
}

Obs:Pode receber o telefone nulo
*/

//Arrow function
void minhaFuncao( String nome, {String? telefone}) => print( 'Nome: $nome Telefone: $telefone' );

void printNomeIdade( String nome, int idade ) {
  print( 'Nome: $nome');
  print( 'Idade: $idade');
}

void printNome( String nome ) {
  print( 'Nome: $nome');
}