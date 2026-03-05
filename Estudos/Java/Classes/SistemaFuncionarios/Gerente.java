package sistemafuncionarios;

public class Gerente extends Funcionario {
    @Override
    void calcularSalario(){
        salarioBase += salarioBase * 0.2;
        System.out.println(salarioBase);
    }
}
