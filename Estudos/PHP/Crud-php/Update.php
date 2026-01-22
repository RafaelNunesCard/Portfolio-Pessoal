<?php
require 'db.php';
require 'UserRepository.php';

$repo = new UserRepository(conectar());

$repo->update(1, 'Novo Nome');

echo "Usuário atualizado";
