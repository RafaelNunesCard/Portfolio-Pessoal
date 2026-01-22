class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def falar(self):
        print(f"Oi, sou {self.nome}")


p = Pessoa("Rafael", 22)
p.falar()

# Herança
class Admin(Pessoa):
    def banir(self):
        print("Usuário banido")