opcao = 2

match opcao:
    case 1:
        print("Cadastrar")
    case 2:
        print("Listar")
    case 3:
        print("Excluir")
    case _:
        print("Opção inválida")

# Match com múltiplos valores:
match opcao:
    case 1 | 2:
        print("Opção básica")

# Match com strings:
comando = "start"

match comando:
    case "start":
        print("Iniciar")
    case "stop":
        print("Parar")

# Pattern matching:
ponto = (10, 20)

match ponto:
    case (0, 0):
        print("Origem")
    case (x, y):
        print(f"Ponto {x},{y}")

