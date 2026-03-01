package classebiblioteca;

public class Biblioteca {
    Livro[] livros = new Livro[30];
    Usuario[] usuarios = new Usuario[10];
    int livroId = 0;
    int userId = 0;

    void adicionarLivro(String titulo, String autor) {
        if(livroId < livros.length) {
            Livro livro = new Livro();

            livro.titulo = titulo;
            livro.autor = autor;
            livro.disponivel = true;

            livros[livroId] = livro;

            livroId++;
        }
        else{
            System.out.println("Limite de livros atingido!");
        }
    }

    void casdastrarUsuario(String nome) {
        Usuario usuario = new Usuario();
        
        usuario.nome = nome;
        
        usuarios[userId] = usuario;
        userId++;
    }

    void listarLivrosDisponiveis() {
        for(int i = 0; i < livroId; i++){
            if(livros[i].disponivel){
                System.out.println("Nome:" + livros[i].titulo);
                System.out.println("Autor:" + livros[i].autor);
            }
        }
    }

    void listarLivrosEmprestados() {
        for(int i = 0; i < livroId; i++){
            if(!livros[i].disponivel){
                System.out.println(livros[i].titulo);
            }
        }
    }
}