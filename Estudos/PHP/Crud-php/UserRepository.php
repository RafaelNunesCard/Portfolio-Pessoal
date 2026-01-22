<?php
declare(strict_types=1);

class UserRepository {
    private PDO $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    // CREATE
    public function create(string $nome, string $email): void {
        $sql = "INSERT INTO users (nome, email) VALUES (:nome, :email)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'nome' => $nome,
            'email' => $email
        ]);
    }

    // READ
    public function findAll(): array {
        $stmt = $this->pdo->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findById(int $id): ?array {
        $sql = "SELECT * FROM users WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id' => $id]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        return $user ?: null;
    }

    // UPDATE
    public function update(int $id, string $nome): void {
        $sql = "UPDATE users SET nome = :nome WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            'nome' => $nome,
            'id' => $id
        ]);
    }

    // DELETE
    public function delete(int $id): void {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
    }
}
