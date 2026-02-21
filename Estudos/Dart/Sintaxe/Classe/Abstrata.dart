void main() {

  Jogador jogador1 = Jogador( 10, 10, 'Hero');
  jogador1.mostrar();
  
  Inimigo inimigo1 = Inimigo( 10, 10, 'Esqueleto');
  inimigo1.mostrar();

  if(jogador1.getPosicaoX() == inimigo1.getPosicaoX()) {
    jogador1.luta();
  }
}

// Classe não pode ser acessada ela só servira de molde para as outras
abstract class Personagem {

  int posicaoX = 0;
  int posicaoY = 0;
  String nome;

  Personagem( this.posicaoX, this.posicaoY, this.nome);

  void mostrar() {
    print( '$nome está na posição ($posicaoX,$posicaoY)');
  }

  int getPosicaoX() => posicaoX;
  int getPosicaoY() => posicaoY;

  void luta() {

  }
}

class Jogador extends Personagem {

  Jogador( int posicaoX, int posicaoY, String nome) : super( posicaoX, posicaoY, nome );

  @override
  void luta() {
    print('Lutando...');
  }
}

class Inimigo extends Personagem {

  Inimigo( int posicaoX, int posicaoY, String nome) : super( posicaoX, posicaoY, nome );

}