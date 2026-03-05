// String 
let texto: String = "Olá mundo";

console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

let frase1 = "Eu gosto de Java";

let nova = frase1.replace("Java","TypeScript");

console.log(nova);


let frase2 = "banana,maçã,uva";

let frutas2 = frase2.split(",");

console.log(frutas2); // ["banana","maçã","uva"]


// Int 

console.log(Math.random()); 

console.log(Math.floor(4.9)); // 4

console.log(Math.max(5,10,20)); // 20  