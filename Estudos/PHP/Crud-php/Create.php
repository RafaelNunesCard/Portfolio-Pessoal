<?php
require 'db.php';
require 'UserRepository.php';

$repo = new UserRepository(conectar());

$repo->create('Rafael', 'rafael@email.com');

echo "Usuário criado";
