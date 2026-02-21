void main() {

  String nome = 'Rafael Nunes Cardoso';

  print( nome );
  print( nome.length );

  print( nome.substring( 0, 6 ) ); // Começa do caracter 0 e termina no 6
  print( nome.indexOf( ' ' ) ); // Quantidade de caracteres até o espaço
  print( nome.substring( 0, nome.indexOf( ' ' ) ) ); // Pegar o primeiro nome

  print( nome.trim() ); // Tirar espaços
  print( nome.trimLeft() ); // Tirar espaço da esquerda
  print( nome.trimRight() ); // Tirar espaço da direita

  print( nome.padLeft( 25, ' ' ) ); // Complenta o tamanho Colocando espaços na esquerda
  print( nome.padRight( 25, '_' ) ); // Complenta o tamanho Colocando espaços na direita

  print( nome.split( ' ' ) ); // Separar em uma lista
  print( nome.split( ' ' )[0] ); // Separa o primeiro nome

  print( nome.toLowerCase() );
  print( nome.toUpperCase() );

  if( nome.contains( 'Nunes' ) ) {
    print( 'Comtém Nunes' )
  }
}