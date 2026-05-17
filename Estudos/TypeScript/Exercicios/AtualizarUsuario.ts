type User = {
    id: number
    nome: string
    email: string
    idade: number
}

function atualizarUsuario(id: number, dados: Partial<Omit<User, "id">>) {
    const usuarioAtualizado: Partial<User> = {
        id: id,
        ...dados // spread operator: Ele pega os dados enviados e junta 
    }

    console.log(usuarioAtualizado);
}

atualizarUsuario(1, { nome: "Rafael" });
atualizarUsuario(1, { email: "novo@email.com", idade: 20 });