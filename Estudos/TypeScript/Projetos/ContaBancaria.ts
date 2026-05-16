class ContaBancaria{
    titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    getSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        if (valor < 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (valor <= 0 || valor > this.saldo) {
            console.log("Transação de saque inválida.");
            return;
        }

        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }

    verSaldo(): void {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
}

let conta1 = new ContaBancaria("Rafael", 1000);
conta1.verSaldo();
conta1.depositar(500);
conta1.sacar(200);
conta1.verSaldo();