<?php
declare(strict_types=1);

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

if ($nome === '' || $email === '') {
    echo "Campos obrigatórios";
    exit;
}

$repo = new UserRepository(conectar());
$repo->create($nome, $email);

echo "Usuário salvo com sucesso!";