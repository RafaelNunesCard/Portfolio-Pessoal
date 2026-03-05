package classebiblioteca;

public class Usuario{
    String nome;
    Livro[] livrosEmprestados = new Livro[3];
    int qtdLivros = 0;

    void pegarLivro(Livro livro) {

        if(qtdLivros >= 3) {
            System.out.println("Limite de livros atingido!");
            return;
        }

        if(livro.disponivel) {
            livro.emprestar(nome);
            livrosEmprestados[qtdLivros] = livro;
            qtdLivros++;
        } else {
            System.out.println("Livro não disponível");
        }
    }

    void devolverLivro(Livro livro) {

        for(int i = 0; i < qtdLivros; i++) {

            if(livrosEmprestados[i] == livro) {

                livro.devolver(nome);

                // deslocar array
                for(int j = i; j < qtdLivros - 1; j++) {
                    livrosEmprestados[j] = livrosEmprestados[j + 1];
                }

                livrosEmprestados[qtdLivros - 1] = null;
                qtdLivros--;
                break;
            }
        }
    }
}
