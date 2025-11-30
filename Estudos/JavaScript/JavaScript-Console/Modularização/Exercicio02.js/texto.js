//Maiusculo
export const maiusculo = (texto) => {
    return texto.toUpperCase();
}

//Minusculo
export const minusculo = (texto) => {
    return texto.toLowerCase();
}

//Contar Letras
export const contarLetras = (texto) => {
    const letras = texto.replace(/[^a-zA-Z]/g, '')
    return texto.lenght
}