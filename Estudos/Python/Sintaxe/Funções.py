def soma(a, b):
    return a + b

def saudacao(nome="Mundo"):
    print(f"Olá {nome}")


# Tipagem opcional (type hints)
def soma(a: int, b: int) -> int:
    return a + b

# Funções lambda
dobro = lambda x: x * 2     # Função anônima, de uma expressão só.