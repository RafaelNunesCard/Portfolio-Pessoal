type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
    prioridade: Prioridade;
}

enum Prioridade {
    BAIXA = "Baixa",
    MEDIA = "Média",
    ALTA = "Alta"
}

function criarTarefa(id: number, titulo: string, descricao: string, prioridade: Prioridade): Tarefa {
    return {
        id,
        titulo,
        descricao,
        concluida: false,
        prioridade
    };
}

const atualizarTarefa = (tarefa: Tarefa, atualizar: Partial<Tarefa>) => {
    Object.assign(tarefa, atualizar);
}

function concluirTarefa(tarefa: Tarefa): void {
    tarefa.concluida = true;
    console.log(`Tarefa "${tarefa.titulo}" concluída!`);
}

let tarefa1 = criarTarefa(1, "Comprar leite", "Comprar 2 litros de leite", Prioridade.MEDIA);
console.log(tarefa1);

concluirTarefa(tarefa1);
console.log(tarefa1);

atualizarTarefa(tarefa1, { descricao: "Comprar 3 litros de leite", prioridade: Prioridade.ALTA });
console.log(tarefa1);