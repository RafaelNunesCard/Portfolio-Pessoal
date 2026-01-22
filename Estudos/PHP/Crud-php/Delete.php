<?php
require 'db.php';
require 'UserRepository.php';

$repo = new UserRepository(conectar());

$repo->delete(1);

echo "Usuário removido";
