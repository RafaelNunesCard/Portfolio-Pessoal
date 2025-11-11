function verificar(){
    var numero = document.getElementById('n')
    var res = document.getElementById('seltab')

    res.textContent = ''
    var a = Number(numero.value)
    var result = 0

    for(i = 1; i <= 10 ; i++){
        result = a * i
        res.innerHTML += `<option>${i} x ${a} = ${result} </option>`
    }
}