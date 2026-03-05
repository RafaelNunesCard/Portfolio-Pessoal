package classepessoa;

public class Pessoa {
    String nome;
    int idade;

    void apresentar() {
        System.out.printf("Olá meu nome é /s e tenho /n anos", nome, idade);
    }

    boolean maiorDeIdade(){
        if(idade >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}