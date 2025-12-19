let reshora = document.getElementById("hora")
let resmin = document.getElementById("min")
let resseg = document.getElementById("seg") 
let plays = document.getElementById("playPause")
let container = document.getElementById("container")
let body = document.getElementById("body")

let hora = ""
let min = ""
let seg = ""
let tempo = 0

let intervalo = null

let rodando = false

function confirmar(){
    hora = parseInt(document.getElementById("horaInput").value) || 0
    min = parseInt(document.getElementById("minInput").value) || 0
    seg = parseInt(document.getElementById("segInput").value) || 0

    console.log("Valores:", hora, min, seg)

    reshora.textContent = hora < 10 ? "0" + hora : hora
    resmin.textContent = min < 10 ? "0" + min : min
    resseg.textContent = seg < 10 ? "0" + seg : seg

    tempo = seg + (min * 60) + (hora * 3600)
}



function play(){
    if(intervalo) return
    intervalo = setInterval(function(){
        if(tempo > 10){
            
            let h = Math.floor(tempo / 3600)
            let m = Math.floor((tempo % 3600) / 60)
            let s = tempo % 60
            
            
            reshora.textContent = h < 10 ? "0" + h : h
            resmin.textContent = m < 10 ? "0" + m : m
            resseg.textContent = s < 10 ? "0" + s : s
            
            --tempo
        }else if(tempo >= 0){

            let s = tempo % 60

            if(tempo % 2 == 1){
                body.classList.add("ativado")
            }else{
                body.classList.remove("ativado")
            }
            
            container.textContent = s < 10 ? "0" + s : s

            --tempo
        } else {
            clearInterval(intervalo)
        }
    }, 1000)
}


function parar(){
    clearInterval(intervalo)
    intervalo = null
}

function resetar(){
    tempo = 0

    reshora.textContent = "00"
    resmin.textContent = "00"
    resseg.textContent = "00"
    
    plays.innerHTML = `<i class="ri-play-line"></i>`
}


function togglePlayPause(){
    if(rodando){
        parar()
        plays.innerHTML = `<i class="ri-play-line"></i>`
    } else {
        play()
        plays.innerHTML = `<i class="ri-close-line"></i>`
    }
    rodando = !rodando
}
