void main() {
  /*
  // Versão antiga
  Pessoa pessoa1 = new Pessoa();

  pessoa1.nome = 'Derek';
  pessoa1.idade = 17;
  pessoa1.telefone = '119876543210';
  */

  Pessoa pessoa1 = Pessoa( 'Derek', 17, '119876543210');
  pessoa1.apresenta();

  Pessoa pessoa2 = Pessoa( 'Izidio', 18, '21190438456');
  pessoa2.apresenta();
}

class Pessoa {

  //Propriedades da Classe - Variaveis
  String nome = '';
  int idade = 0;
  String telefone = '';

  /*
  // Metodo mais longo
  Pessoa( String nome, int idade, String telefone ){
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
  }
  */

  Pessoa( this.nome, this.idade, this.telefone );

  //Métodos da Classe - Funções
  void apresenta(){
    print( 'Meu nome é ${this.nome} e tenho ${this.idade} anos' );
  }
}