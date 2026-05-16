let Recorde: Record<string, number> = {
    "Jogador1": 100,
    "Jogador2": 150,
    "Jogador3": 120
};

function exibirRecordes(recordes: Record<string, number>) {
    console.log("Recordes dos jogadores:");
    for (const jogador in recordes) {
        console.log(`${jogador}: ${recordes[jogador]} pontos`);
    }
}

exibirRecordes(Recorde);