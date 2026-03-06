    let nome: String = "Rafael";
    let idade: number = 16;
    let ativo: boolean = true;

    // : any  =  aceitar qualquer tipo
    let valor: any = "Qual quer coisa";
    valor = 10;
    valor = true;   

    // : unknown
    let dado: unknown = "texto";

    let vazio: null = null; // : null = vazio
    let indefinido: undefined = undefined; // : undefined = indefinido

    // const : não muda igual JS
    const imutavel: String = "imutavel";


    // Union Types
    let id: number | String;

    id = 10;
    id = "abc1234";

    // literal types = valores fixos
    let status1: "online" | "offline";
    status1 = "online";

    //enum = valores possiveis
    enum Status {
        ONLINE,
        OFFLINE,
        OCUPADO
    }
    
    let usuarioStatus: Status = Status.ONLINE;

    // Concatenação:
    console.log("Nome:", nome);
    console.log("Minha idade é " + idade);
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);



