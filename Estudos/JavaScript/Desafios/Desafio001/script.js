function ler() {
  var data = new Date()
  var hora = data.getHours()
  var res = document.getElementById("msg")
  var img = document.getElementById("imagem")

  if (hora < 12) {
    //Bom dia!
    res.innerText = `Bom dia agora são ${hora}h`
    img.src = "img/Noite.png"
  } else if (hora <= 18) {
    //Boa tarde
    res.innerText = `Boa tarde agora são ${hora}h`
    img.src = "img/Tarde.png"
    document.body.style.background = "rgb(224, 137, 78)"
  } else {
    //Boa noite
    res.innerText = `Boa noite agora são ${hora}h`
    img.src = "img/Manhã.png"
    document.body.style.background = "rgb(23, 33, 48)"
  }
}
