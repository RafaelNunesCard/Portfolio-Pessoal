<?php
declare(strict_types=1);

function conectar(): PDO {
    $pdo = new PDO (
        'mysql:host=localhost;dbname=app;charset=utf8mb4',
        'root',
        ''
    );

    $pdo ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}