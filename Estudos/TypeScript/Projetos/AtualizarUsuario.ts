type User = {
    id: number
    nome: string
    email: string
    idade: number
}

function atualizarUsuario(id: number, dados: Partial<User>) {
    const usuarioAtualizado: Partial<User> = {
        id: id,
        ...dados
    }

    console.log(usuarioAtualizado);
}

atualizarUsuario(1, { nome: "Rafael" });
atualizarUsuario(1, { email: "novo@email.com", idade: 20 });