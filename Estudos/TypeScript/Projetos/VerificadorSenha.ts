let senha1: string = "MinhaSenha123";
let senha2: string = "12345";
let senha3: string = "SenhaForte!@#";

enum ForcaSenha {
    FRACA = "Fraca",
    MEDIA = "Média",
    FORTE = "Forte"
}

console.log(`A força da senha1 é: ${verificarSenha(senha1)}`);
console.log(`A força da senha2 é: ${verificarSenha(senha2)}`);
console.log(`A força da senha3 é: ${verificarSenha(senha3)}`);

function verificarSenha(senha: string): ForcaSenha {
    const temNumeros = /[0-9]/.test(senha);
    
    if (senha.length < 6) return ForcaSenha.FRACA;
    if (senha.length >= 8 && temNumeros) return ForcaSenha.FORTE;
    return ForcaSenha.MEDIA;
}