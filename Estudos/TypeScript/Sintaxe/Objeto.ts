    /*
    let usuario: {
        nome: String,
        idade: number
    } = {
        nome: "Rafael",
        idade: 16
    }
    */

    let pessoa: object = {
        nome: "Rafael",
        idade: 16
    };

    interface usuario {
        nome: String;
        idade: number;
    }

    let user: usuario = {
        nome: "Rafael",
        idade: 16
    };

    console.log(user.nome);

    console.log(Object.keys(user)); // ["nome","idade"]

    console.log(Object.values(user)); // ["Rafael",20]

    console.log(Object.entries(user)); // [["nome","Rafael"],["idade",20]]
