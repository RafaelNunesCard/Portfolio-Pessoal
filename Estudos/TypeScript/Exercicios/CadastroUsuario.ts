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

const usuario2 = {
    id: 2,
    nome: "Maria",
    idade: 25,
    email: "maria@gmail.com",
    ativo: true
}

cadastrarUsuario(usuario);
cadastrarUsuario(usuario2);
listarUsuarios();
removerUsuario(2);
listarUsuarios();

function cadastrarUsuario(user: Usuario) {
    usuarios.push(user);
    console.log(`Usuario ${user.nome} cadastrado com sucesso!`);
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
        mostrarUsuario(user);
    });
}

function mostrarUsuario(user: Usuario) {
    console.log(`${user.id} - Usuario ${user.nome} tem ${user.idade} anos e está ${user.ativo? "ativo" : "não ativo"}`);
}