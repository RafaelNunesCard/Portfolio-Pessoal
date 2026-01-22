<?php
require 'db.php';
require 'UserRepository.php';

$repo = new UserRepository(conectar());

$users = $repo->findAll();

foreach ($users as $user) {
    echo $user['id'] . ' - ' . $user['nome'] . '<br>';
}
