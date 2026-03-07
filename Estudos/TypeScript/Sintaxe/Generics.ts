// Generics: Tipos Genericos 
function pegarValor<T>(valor: T): T {
  return valor;
}

// com array
function primeiroItem<T>(lista: T[]): T {
  return lista[0];
}

let n = primeiroItem([1,2,3]);
let nome1 = primeiroItem(["Ana","João"]);

//Generics com interfaces
interface ApiResponse<T> {
    data: T
    sucesso: boolean
}

interface Usuario {
    nome: string
}

let resposta: ApiResponse<Usuario> = {
    data: { nome: "Rafael" },
    sucesso: true
}

// Declarando o tipo 
pegarValor<number>(10);
pegarValor<string>("Olá");

// ou sem declarar o tipo
pegarValor<number>(10);
pegarValor<string>("Olá");