produtos = [
    {"nome": "sabonete", "preco": 6.50, "estoque": 50},
    {"nome": "shampoo", "preco": 22.99, "estoque": 70},
    {"nome": "condicionador", "preco": 20.99, "estoque": 60}
]

exit = False

while(exit == False):
    print("Produtos" \
          "Editar" \
          "Adicionar" \
          "Sair")
    
    opcao = input("Digite uma opção: ").lower()
    match opcao:
        case "produtos":
            for produto in produtos:
                if( produto["estoque"] == 0):
                    print(f"{produto["nome"]} não tem no estoque")
                    break

                estoqueTotal = produto["preco"] * produto["estoque"]
                print(f"{produto["nome"]} está por apenas R${produto["preco"]}")
                print(f"{produto["nome"]} valor total do estoque é R${estoqueTotal}")
                print("")
            break

        case "editar":
            item_editado = input("Escreva o item que será editado:")
            break

        case "adicionar":
            break

        case "sair":
            exit = True
            break

        case _:
            print("Não existe essa opção digite novamente!")
    


        