type Livro = {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponibilidade: Disponibilidade;
};

enum Disponibilidade {
    DISPONIVEL = "Disponível",
    EMPRESTADO = "Emprestado"
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    listarLivros(): Livro[] {
        return this.livros;
    }

    buscarLivroPorTitulo(titulo: string): Livro | undefined {
        return this.livros.find(livro => livro.titulo === titulo);
    }

    emprestarLivro(titulo: string): boolean {
        const livro = this.buscarLivroPorTitulo(titulo);
        if (livro && livro.disponibilidade === Disponibilidade.DISPONIVEL) {
            livro.disponibilidade = Disponibilidade.EMPRESTADO;
            console.log(`Livro "${livro.titulo}" emprestado com sucesso!`);
            return true;
        }
        return false;
    }

    devolverLivro(titulo: string): boolean {
        const livro = this.buscarLivroPorTitulo(titulo);
        if (livro && livro.disponibilidade === Disponibilidade.EMPRESTADO) {
            livro.disponibilidade = Disponibilidade.DISPONIVEL;
            console.log(`Livro "${livro.titulo}" devolvido com sucesso!`);
            return true;
        }
        return false;
    }
}

let livro1: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    disponibilidade: Disponibilidade.DISPONIVEL
};

let biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);

console.log(biblioteca.listarLivros());
biblioteca.emprestarLivro("O Senhor dos Anéis");
console.log(biblioteca.listarLivros());
biblioteca.devolverLivro("O Senhor dos Anéis");
console.log(biblioteca.listarLivros());


