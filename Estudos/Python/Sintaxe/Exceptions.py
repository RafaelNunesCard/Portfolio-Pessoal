try:
    x = int("abc")
except ValueError:
    print("Erro de conversão")
finally:
    print("Sempre roda")