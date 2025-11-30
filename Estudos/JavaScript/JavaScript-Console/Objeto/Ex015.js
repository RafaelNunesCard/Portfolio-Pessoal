const aluno = {
    nome: 'Rafael',
    idade: 16,
    curso: 'DS',
    apresentar() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos do curso de ${this.curso}`);
    }
};

aluno.apresentar();

/*
Um objeto é uma coleção de dados organizados em pares chave: valor, e pode conter:

valores

outros objetos

arrays

funções (métodos)
*/