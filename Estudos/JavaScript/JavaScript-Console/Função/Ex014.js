//função quadrado
function quadrado(a) {
    return a * a
}

console.log(quadrado(2))

//Arrow fuction
const maior = (a, b) => (a > b ? a : b)

console.log(maior(7,5))

//Fução média
function media(...notas){
    const soma = notas.reduce((total, n) => total + n, 0);
    return soma / notas.length;
}

console.log(media(7,8,5))

//Função é um bloco de código que recebe valores, executa uma ação e pode retornar um resultado.