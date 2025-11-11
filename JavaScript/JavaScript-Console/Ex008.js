let num = [5, 8, 2, 9, 3]
num.push(1)//Add o 1 no Array
num.sort() //coloca em ordem 
num.indexOf(9)//Procura no vetor o elemento
num.indexOf(4)//Vai procurar e entregar -1 pq não encontrou

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Escrever todos os elementos 
for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//Versão resumida
for (let pos in num){
    console.log(num[pos])
}