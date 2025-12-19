let turnosActive = false;
let turnos = 0;

let personagem = {
  nome: "Herói",
  vida: 50,
  vidaMax: 50,
  dano: 5,
  bag: [],
  ataque: ataque(this.dano),
};

let inimigos = [
  {
    nome: "Slime",
    vida: 20,
    vidaMax: 20,
    dano: 3,
    atacar(alvo) {
      alvo.vida -= this.dano;
      addLog(`💥 ${this.nome} causou ${this.dano} de dano!`);
    }
  },
  {
    nome: "Esqueleto",
    vida: 30,
    vidaMax: 30,
    dano: 5,
    atacar(alvo) {
      alvo.vida -= this.dano;
      addLog(`💀 ${this.nome} causou ${this.dano} de dano!`);
    }
  }
];

let inimigoAtual = 0;

function addLog(mensagem) {
  const logContainer = document.getElementById("log-messages");
  const logDiv = document.createElement("div");
  logDiv.className = "log-message";
  logDiv.textContent = mensagem;
  logContainer.appendChild(logDiv);
  logContainer.scrollTop = logContainer.scrollHeight;
}

function atualizarUI() {
  document.getElementById("turno-numero").textContent = turnos;
  document.getElementById(
    "player-vida"
  ).textContent = `${personagem.vida}/${personagem.vidaMax}`;

  const porcentagemVida = (personagem.vida / personagem.vidaMax) * 100;
  const vidaBar = document.getElementById("player-vida-bar");
  vidaBar.style.width = porcentagemVida + "%";
  vidaBar.textContent = Math.round(porcentagemVida) + "%";

  atualizarBag();
}

function atualizarBag() {
  const bagContainer = document.getElementById("bag-container");

  if (personagem.bag.length === 0) {
    bagContainer.innerHTML =
      '<p style="text-align: center; color: #7f8c8d;">Vazio</p>';
    return;
  }

  bagContainer.innerHTML = "";
  personagem.bag.forEach((item) => {
    const itemDiv = document.createElement("div");
    let raridade = "incomum";
    if (item.chance === 1) raridade = "lendario";
    else if (item.chance === 5) raridade = "raro";

    itemDiv.className = `item-card item-${raridade}`;
    itemDiv.innerHTML = `
          <div class="item-nome">${item.nome}</div>
          <div class="item-descricao">${item.descricao.substring(
            0,
            60
          )}...</div>
          ${
            item.cooldown !== undefined
              ? `<div class="item-cooldown">Cooldown: ${item.cooldown}</div>`
              : ""
          }
          ${
            item.usar
              ? `<button class="btn-usar" onclick="usarItem(${item.id})" ${
                  item.cooldown > 0 ? "disabled" : ""
                }>Usar</button>`
              : ""
          }
        `;
    bagContainer.appendChild(itemDiv);
  });
}

function atacar() {
  const inimigo = inimigos[inimigoAtual];
  
  if (turnos % 2 == 0) {
    personagem.atacar(inimigo);
    
    if (inimigo.vida <= 0) {
      addLog(`💀 ${inimigo.nome} foi derrotado!`);
      inimigoAtual++; // Próximo inimigo
      
      if (inimigoAtual >= inimigos.length) {
        addLog("🎉 Você venceu todos os inimigos!");
        return;
      }
    }
  } else {
    // Turno do inimigo
    if (inimigo.vida > 0) {
      inimigo.atacar(personagem);
      
      if (personagem.vida <= 0) {
        addLog("💀 Você morreu!");
        return;
      }
    }
  }
}

function passaTurno() {
  turnos++;
  turnosActive = true;

  personagem.bag.forEach((item) => {
    if (item.cooldown !== undefined && item.cooldown > 0) {
      item.cooldown--;
      item.ativado = false;
    }
  });

  addLog(`⏭️ Turno ${turnos} passou`);
  atualizarUI();
}

function usarItem(itemId) {
  const item = personagem.bag.find((i) => i.id === itemId);
  if (item && item.usar) {
    item.usar();
    addLog(`✨ Você usou: ${item.nome}`);
    atualizarUI();
  }
}

let items = [
  {
    id: 1,
    nome: "Ampulheta do Momento Perdido",
    chance: 5,
    descricao:
      "Congela o tempo por 1 turno para todos exceto você, 6 turnos para voltar",
    cooldown: 0,
    duracao: 1,
    ativado: false,
    usar: function () {
      if (this.cooldown > 0) return addLog("⏰ Esse item ja foi usado");
      this.cooldown = 6;
      this.ativado = true;
      turnos--;
    },
  },
  {
    id: 2,
    nome: "Dado do Destino Incerto",
    chance: 1,
    descricao: "Extremamente raro, encontrado apenas em tumbas amaldiçoadas",
    usar: function (){
      
    }
  },
  {
    id: 3,
    nome: "Manto do Sussurrador",
    chance: 15,
    descricao: "Pode ser obtido de assassinos de elite, lojas de itens mágicos",
  },
];

function chanceItem() {
  return Math.floor(Math.random() * 100);
}

function itemAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function dropItem() {
  let lendario = items.filter((i) => i.chance === 1);
  let raro = items.filter((i) => i.chance === 5);
  let incomum = items.filter((i) => i.chance === 15);

  let chance = chanceItem();
  let itemRecebido;

  if (chance <= 1) {
    itemRecebido = itemAleatorio(lendario);
    personagem.bag.push(itemRecebido);
    addLog(`🌟 LENDÁRIO! Você dropou: ${itemRecebido.nome}`);
  } else if (chance <= 6) {
    itemRecebido = itemAleatorio(raro);
    personagem.bag.push(itemRecebido);
    addLog(`💎 RARO! Você dropou: ${itemRecebido.nome}`);
  } else if (chance <= 21) {
    itemRecebido = itemAleatorio(incomum);
    personagem.bag.push(itemRecebido);
    addLog(`✨ INCOMUM! Você dropou: ${itemRecebido.nome}`);
  } else {
    addLog(`❌ Você não dropou nada desta vez`);
  }

  atualizarUI();
}

atualizarUI();
