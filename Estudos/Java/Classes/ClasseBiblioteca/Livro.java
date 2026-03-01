package classebiblioteca;

public class Livro {
    String titulo;
    String autor;
    boolean disponivel;

    void emprestar(String nome) {
        System.out.println(nome +" pegou o livro " + titulo);
        disponivel = false;
    }   

    void devolver(String nome) {
        System.out.println(nome +" pegou o livro " + titulo);
        disponivel = true;
    }
}