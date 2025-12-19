let produtos = [];
let vendas = [];

let idProduto = 1;
let idVenda = 1;

function addProduto(nome, preco, estoque) {
  let produto = {
    id: idProduto,
    nome: nome,
    preco: preco,
    estoque: estoque,
  };

  produtos.push(produto);
  idProduto++;
}

function listarProdutos() {
  for (let i = 0; i < produtos.length; i++) {
    console.log(
      `ID: ${produtos[i].id} | ${produtos[i].nome} | Preço: ${produtos[i].preco} | Estoque: ${produtos[i].estoque}`
    );
  }
}

function listarVendas() {
  for (let i = 0; i < vendas.length; i++) {
    console.log(
      `ID: ${vendas[i].id} | ${vendas[i].produto} | Quantidade: ${vendas[i].qtd} | Total: ${vendas[i].total}`
    );
  }
}

function venderProduto(idProduto, quantidade) {
  for (let i = 0; i < produtos.length; i++) {
    if (idProduto === produtos[i].id) {
      if (quantidade > produtos[i].estoque) {
        console.log("Quantidade informada maior que o estoque");
      }

      let venda = {
        id: idVenda,
        idProduto: produtos[i].id,
        produto: produtos[i].nome,
        qtd: quantidade,
        total: quantidade * produtos[i].preco,
      };

      vendas.push(venda);
      produtos[i].estoque -= quantidade;
      idVenda++;
      return;
    }
  }

  console.log("Produto não encontrado");
}

function cancelVenda(idVenda) {
  for (let i = 0; i < vendas.length; i++) {
    if (idVenda === vendas[i].id) {
      for (let j = 0; j < produtos.length; j++) {
        if (vendas[i].idProduto === produtos[j].id) {
          produtos[j].estoque += vendas[i].qtd;
          return;
        }
      }

      vendas.splice(i, 1);
      console.log("Venda cancelada");
      return;
    }
  }

  console.log("Venda não encontrada");
}

function calcularFaturamento() {
  let total = 0;
  for (let i = 0; i < vendas.length; i++) {
    total += vendas[i].total;
  }
  return total;
}

function salvarDados() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
  localStorage.setItem("vendas", JSON.stringify(vendas));
}

function carregarDados() {
  let produtosSalvos = JSON.parse(localStorage.getItem("produtos"));
  let vendasSalvos = JSON.parse(localStorage.getItem("vendas"));

  if (produtosSalvos) {
    produtos = produtosSalvos;
    idProduto = produtos.length + 1;
  }

  if (vendasSalvos) {
    vendas = vendasSalvos;
    idVenda = vendas.length + 1;
  }
}