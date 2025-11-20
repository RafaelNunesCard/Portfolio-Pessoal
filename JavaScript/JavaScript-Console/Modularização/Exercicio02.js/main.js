import { somar, media, imc} from './matematica'
import {maiusculo, minusculo, contarLetras} from './texto'

console.log(maiusculo("abc"));         // Outputs: "ABC"
console.log(minusculo("ABC"));         // Outputs: "abc"
console.log(contarLetras("abcde"));    // Outputs: 5
console.log(somar(5, 6));              // Outputs: 11
console.log(media(3, 7));              // Outputs: 5
console.log(imc(60, 1.8));             // Outputs: 18.52 (for example)