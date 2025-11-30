function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("n")
  var res = document.getElementById("res")

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName("radSex")
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
      //Homem
      gênero = 'Homem'
      if (idade < 12){
        //Criança
        img.setAttribute('src', 'img/Criança-M.png')
      }else if(idade < 18){
        //Adolecente
        img.setAttribute('src', 'img/Adolecente-M.png')
      }else if(idade < 60){
        //Adulto
        img.setAttribute('src', 'img/Adulto-M.png')
      }else{
        //Idoso
        img.setAttribute('src', 'img/Idoso-M.png')
      }
    }else if (fsex[1].checked){
      //Mulher
      gênero = 'Mulher' 
      if (idade < 12){
        //Criança
        img.setAttribute('src', 'img/Criança-F.png')
      }else if(idade < 18){
        //Adolecente
        img.setAttribute('src', 'img/Adolecente-F.png')
      }else if(idade < 60){
        //Adulto
        img.setAttribute('src', 'img/Adulto-F.png')
      }else{
        //Idoso
        img.setAttribute('src', 'img/Idoso-F.png')
      }
    }
    res.innerText = `Detectamos ${gênero} com ${idade} anos!`
    res.appendChild(img)
  }
}
