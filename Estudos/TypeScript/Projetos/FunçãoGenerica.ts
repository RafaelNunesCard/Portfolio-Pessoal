function listarItens<T>(lista: T[]): void {
    for(let item of lista){
        console.log(item)
    }
}

listarItens<number>([1, 2, 3])

listarItens<string>(["a", "b", "c"])

listarItens<{nome: string}>([
  { nome: "Rafael" },
  { nome: "Ana" }
])