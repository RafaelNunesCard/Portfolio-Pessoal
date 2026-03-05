let numeros: number[] = [1,2,3,4];

let nomes: String[] = ["Rafael", "Marcos", "Cauã"];

let frutas: Array<String> = ["maçã","banana"];

for(let nome of nomes) {
    console.log(nome);
}

let dobros = numeros.map(n => n * 2 );
console.log(dobros);

let pares = numeros.filter(n => n % 2 == 0);
console.log(pares);

console.log(numeros[0]);

console.log(nomes.includes("Rafael")); // True

numeros.push(5);
numeros.pop(); // remove o ultimo


