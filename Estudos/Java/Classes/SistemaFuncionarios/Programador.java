package sistemafuncionarios;

public class Programador {
    int quantidadeProjetos = 0;
    
    @Override
    void calcularSalario(){
        salarioBase += salarioBase * (quantidadeProjetos * 0.05);
        System.out.println(salarioBase);
    }
}
