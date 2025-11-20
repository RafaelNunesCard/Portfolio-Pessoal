const carro = {
    marca: "Toyota",
    ano: "2024",
    ligado: false,
    ligar(){
        if(this.ligado){
            console.log("O carro já está ligado!");
        } else {
            this.ligado = true;
            console.log("Carro ligado com sucesso!");
        }
    },
    
    desligar() {
        if (!this.ligado) {
            console.log("O carro já está desligado!");
        } else {
            this.ligado = false;
            console.log("Carro desligado.");
        }
    },

    status(){
        console.log(this.ligado ? "Carro ligado" : "Carro desligado")
    }
}

carro.status();   // Carro Desligado
carro.ligar();    // Carro ligado com sucesso!
carro.ligar();    // O carro já está ligado!
carro.status();   // Carro Ligado
carro.desligar(); // Carro desligado.
carro.status();   // Carro Desligado