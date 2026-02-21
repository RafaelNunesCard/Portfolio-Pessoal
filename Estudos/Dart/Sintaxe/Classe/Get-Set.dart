void main() {
 
  Pessoa pessoa1 = Pessoa( 'Derek', 17, '119876543210');
  // pessoa1.apresenta();

  print(pessoa1.idade);

}

class Pessoa {

  //Propriedades da Classe - Variaveis
  String nome = '';
  int _idade = 0;
  String telefone = '';

  Pessoa( this.nome, parametroIdade, this.telefone ){
    this.idade = parametroIdade;
  }

  void set idade( int idade) {
    if( idade < 120 ){
      this._idade = idade;
    }
  }

  int get idade {
    return this._idade;
  }

  //Métodos da Classe - Funções
  void apresenta() {
    print( 'Meu nome é ${this.nome} e tenho ${this.idade} anos' );

    if( this.telefone.isEmpty) {
      print('Não informei meu telefone');
    } else {
      print('e meu telefone é ${this.telefone}');
    }
  }
}