class Usuario {
    nome: String;
    email: String;
    private senha: String;

    constructor(nome: String, email: String, senha: String) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getSenha(): String {
        return this.senha;
    }
}

let usuarios: Usuario[] = [];

cadastrarUsuario("Rafael", "rafael@gmail.com", "Rafael123");
cadastrarUsuario("Maria", "maria@gmail.com", "mariaRJ");
 
login("rafael@gmail.com", "Rafael123", usuarios);
login("maria@gmail.com", "marilia", usuarios);



function cadastrarUsuario(nome: String, email: String, senha: String): Usuario {
    const usuario = new Usuario(nome, email, senha);
    usuarios.push(usuario);
    console.log(`Usuário ${nome} cadastrado com sucesso!`);
    return usuario;
}

function login(email: String, senha: String, usuarios: Usuario[]): boolean {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.getSenha() === senha);
    if (usuarioEncontrado) {
        console.log(`Login bem-sucedido! Bem-vindo, ${usuarioEncontrado.nome}`);
        return true;
    } else {
        console.log("Email ou senha incorretos. Tente novamente.");
        return false;
    }
}
