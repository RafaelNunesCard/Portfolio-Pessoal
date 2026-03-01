package classebiblioteca;

public class Usuario{
    String nome;
    Livro[] livrosEmprestados = new Livro[3];

    void pegarLivro(Livro livro) {
        if(livro.disponivel) {
            livro.emprestar(nome);
        } else {
            System.out.println("Livro não disponível");
        }
    }

    void devolverLivro(Livro livro) {
        if(livrosEmprestados.length == 0) {
            return;
        }
        
        livro.devolver(nome);
    }
}
