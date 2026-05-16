type Usuario = {
    id: number,
    nome: String,
    idade: number,
    email: String,
    ativo: boolean
}

let usuarios: Usuario[] = [];


const usuario = {
    id: 1,
    nome: "Rafael",
    idade: 16,
    email: "rafael@gmail.com",
    ativo: true
}

mostrarUsuario(usuario);

function cadastrarUsuario(user: Usuario) {
    usuarios.push(user);
    console.log("Usuario cadastrado com sucesso!");
}

function removerUsuario(id: number) {
    const index = usuarios.findIndex((user) => user.id === id);
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log("Usuario removido com sucesso!");
    } else {
        console.log("Usuario não encontrado.");
    }
}

function listarUsuarios() {
    console.log("Lista de usuarios:");
    usuarios.forEach((user) => {
        console.log(`Nome: ${user.nome}  Email:(${user.email})`);
    });
}

function mostrarUsuario(user: Usuario) {
    console.log(`Usuario ${user.nome} tem ${user.idade} anos e está ${user.ativo? "ativo" : "não ativo"}`);
}