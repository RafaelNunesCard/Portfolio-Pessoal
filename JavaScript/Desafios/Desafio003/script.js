function verificar() {
  var inicio = document.getElementById('ini')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('pas')
  var res = document.getElementById('res')

  res.innerHTML = ''
  
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Coloque números corretos!')
  } else {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }

    res.innerHTML = 'Contando: <br>'

    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉`
      }
    } else {
      // Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} 👉`
      }
    }

    res.innerHTML += ' 🏁'
  }
}