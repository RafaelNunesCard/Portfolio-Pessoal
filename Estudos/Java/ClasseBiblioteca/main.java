package classebiblioteca;

public class main {
    public static void main(String() args) {
        Biblioteca biblioteca1 = new Biblioteca();
        
        biblioteca1.adicionarLivro("Codigo Limpo", "Robert C. Martin");
        biblioteca1.adicionarLivro("Harry Potter", "J. K. Rowling");
        biblioteca1.adicionarLivro("Harry Potter", "J. K. Rowling");
        
        
        biblioteca1.casdastrarUsuario("Derek");
        
        biblioteca1.listarLivrosDisponiveis();
        biblioteca1.listarLivrosEmprestados();
        
        Usuario u = biblioteca1.usuarios[0];
        Livro l = biblioteca1.livros[0];

        u.pegarLivro(l);
        

    }
}
