produtos = [
    {"nome": "sabonete", "preco": 6.50, "estoque": 50},
    {"nome": "shampoo", "preco": 22.99, "estoque": 70},
    {"nome": "condicionador", "preco": 20.99, "estoque": 60}
]

for produto in produtos:
    print(f"{produto["nome"]} R$ {produto["preco"]}")

print("Selecione uma dessas opções:")