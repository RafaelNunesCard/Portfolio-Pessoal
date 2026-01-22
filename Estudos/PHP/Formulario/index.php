<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>

    <h1>Cadastrar Usuário</h1>

    <form action="processar.php" method="post">
        <label for="nome">
            Name:
            <input type="text" name="nome" id="inome">
        </label>
        <br><br>

        <label for="email">
            Email:
            <input type="text" name="email" id="iemail">
        </label>
        <br><br>

        <button type="submit">Salvar</button>
    </form>
</body>
</html>