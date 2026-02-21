void main() {

  List<String> pessoas = ['Derek', 'Cauã', 'Izidio', 'Caio'];
  
  print( pessoas[0]);

  /*
  // Versão longa
  for(int i = 0; i < pessoas.length ; i++) {
    print('${i+1} ${pessoas[i]} ');
  }

  */

  // forEach: arrow
  pessoas.forEach( (String pessoa) => print( pessoa ));

  // forEach: posição
  int posicao = 0;
  pessoas.forEach( (String pessoa) {
    print('$posicao ${pessoa}');
    posicao++;
  });

  pessoas.add( 'Marquinhos' );
  pessoas.insert( 2, 'Arthur' ); // (Key, Value)
  print(pessoas);

  pessoas.removeAt( 2 );
  print(pessoas);

  print(pessoas.contains( 'Izidio' )); // true

}