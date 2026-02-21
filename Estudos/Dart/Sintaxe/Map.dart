void main() {

  Map <int, String> numeros = Map();
  numeros[1] = 'Um';
  numeros[2] = 'Dois';
  numeros[3] = 'Três';
  numeros[100] = 'Cem';

  Map <String, String> estados = Map();
  estados['SP'] = 'São Paulo';
  estados['RJ'] = 'Rio de Janeiro';

  print( estados['SP'] );
  print( estados.keys );
  print( estados.values );

  /*
    List<String> vars = [];

    KEY  VALUE
    0    Derek
    1    Cauã
  */
}