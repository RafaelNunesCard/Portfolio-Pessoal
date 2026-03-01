package sistemafuncionarios;

public class SistemaDeFuncionarios {
    public static void main(String[] args) {
        Funcionario[] funcionarios = new Funcionario[20];
        
        Programador programador1 = new Programador();
        programador1.nome = "Derek";
        programador1.quantidadeProjetos++;
        
        Gerente gerente1 = new Gerente();
        gerente1.nome = "Rafael";
        
        funcionarios[0] = programador1;
        funcionarios[1] = gerente1;
        
        funcionarios[0].calcularSalario();
        funcionarios[1].calcularSalario();
    }
}
