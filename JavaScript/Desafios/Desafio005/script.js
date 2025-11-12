let valores = []
var n = document.getElementById('n')
var lista = document.getElementById('sellist')
var res = document.getElementById('res')

function inLista(num, lista){
    return lista.includes(Number(num))
}

function adicionar(){
    if (n.value.length == 0 || Number(n.value) < 1 || Number(n.value) > 100 || inLista(n.value, valores)) {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista!')
    } else {
        valores.push(Number(n.value))
        lista.innerHTML += `<option>Valor ${n.value} adicionado</option>`
        n.value = ''    // Limpa o campo de texto
        n.focus()       // Coloca o cursor de volta no input
    }
}

function verificar(){
    res.innerHTML = ''
    if(valores.length == 0){
        window.alert('[ERRO] Adicione valores antes de verificar!')
    } else {
        let s = 0
        valores.sort((a, b) => a - b)

        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.<br/>`
        res.innerHTML += `O maior valor é ${valores[valores.length - 1]}.<br/>`
        res.innerHTML += `O menor valor é ${valores[0]}.<br/>`

        for(let i = 0; i < valores.length; i++){
            s += valores[i]
        }

        res.innerHTML += `Somando todos os valores, temos ${s}.<br/>`
        res.innerHTML += `A média dos valores digitados é ${(s / valores.length).toFixed(2)}.<br/>`
    }
}
