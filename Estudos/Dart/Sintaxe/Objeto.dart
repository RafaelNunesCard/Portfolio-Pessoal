void main() {

  Pessoa pessoa1 = new Pessoa();

  pessoa1.nome = 'Derek';
  pessoa1.idade = 17;
  pessoa1.telefone = '119876543210';

  pessoa1.apresenta();

}

class Pessoa {

  //Propriedades da Classe - Variaveis
  String nome = '';
  int idade = 0;
  String telefone = '';

  //Métodos da Classe - Funções
  void apresenta(){
    print( 'Meu nome é ${this.nome} e tenho ${this.idade} anos' );
  }
}