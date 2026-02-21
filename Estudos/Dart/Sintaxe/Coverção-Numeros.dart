void main() {

  double pi = 3.1415;

  print( pi );

  if( pi.isNaN ) {
    print( 'PI não é um numero' );
  }

  if( pi.isNegative ) {
    print( 'Negativo' );
  }

  print( pi.toInt() );  // Transforma em int

  print( pi.floor() );  //Arredonda para baixo
  print( pi.ceil() );   //Arredonda para cima

  print( pi.clamp( 2,3 ) ); // O numero tem que estar entre 2 e 3

  print( pi.round() );   // Arredonda

  print( pi.toStringAsFixed(2) ); // Arredonda o numero de casas decimais

  // print( pi.abs() ); // É o modulo |-3| = 3

}