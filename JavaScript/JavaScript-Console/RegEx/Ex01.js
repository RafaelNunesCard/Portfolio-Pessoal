function telefoneVall(tell){
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(tell)
}

function nomeVall(nome){
    return /^[A-Za-zÀ-ÿ\s]+$/.test(nome)
}

function cepVall(cep){
    return /^\d{5}-\d{3}$/.test(cep)
}

console.log(telefoneVall("(11) 99876-5432"))    // true
console.log(nomeVall("Rafael"))                 // true
console.log(cepVall("12345-678"))               // true