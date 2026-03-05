class Pessoa {
    nome: String;
    idade: number;
    descricao?: String; // opcional

    constructor(nome: string, idade: number ){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log("Meu nome é " + this.nome);
    }

}


const p1 = new Pessoa("Rafael", 20);
p1.apresentar();