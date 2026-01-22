# O with garante fechamento, mesmo com erro.

with open("dados.txt", "r") as f:
    conteudo = f.read()

# Modos

# Modo	Ação
# "r"	leitura
# "w"	sobrescreve
# "a"	append
# "rb"	binário

# Linha por linha
with open("dados.txt") as f:
    for linha in f:
        print(linha.strip())