void main() {

  Pessoa pessoa1 = Pessoa( 'Rafael', 17 );
  pessoa1.apresenta();

  Mae mae1 = Mae( 'Carla', 48, 'Enfermeira');
  mae1.apresenta();

  Filho filho1 =  Filho( 'Rafael', 17, 'Etec' );
  filho1.apresenta();
}

class Pessoa {
  
  String nome = '';
  int idade = 0;

  Pessoa( this.nome, this.idade);

  void apresenta() {
    print( 'Meu nome é ${this.nome} e eu tenho ${this.idade} anos' );
  }
}

class Mae extends Pessoa {

  String profissao = '';

  Mae( String nome, int idade, this.profissao ) : super( nome, idade );

  @override
  void apresenta() {
    print( 'Meu nome é ${this.nome} e eu tenho ${this.idade} anos trabalho como ${this.profissao}' );
  }
}

class Filho extends Pessoa {

  String estudando = '';

  Filho( String nome, int idade, this.estudando ) : super( nome, idade);

  @override
  void apresenta() {
    print( 'Meu nome é ${this.nome} e eu tenho ${this.idade} anos e estou estudando na ${this.estudando}' );
  }
}