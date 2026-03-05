type Usuario = {
    nome: String,
    idade: number,
    email: String,
    ativo: boolean
}

function mostrarUsuario(user: Usuario) {
    console.log(`Usuario ${usuario.nome} tem ${usuario.idade} anos e está ${usuario.ativo? "ativo" : "não ativo"}`);
}

const usuario = {
    nome: "Rafael",
    idade: 16,
    email: "rafael@gmail.com",
    ativo: true
}

mostrarUsuario(usuario);