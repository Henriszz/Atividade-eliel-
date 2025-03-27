public class Exercicio5 {
    public static void main(String[] args) {
        int num1 = 100, num2 = 5;
        if (num2 == 0) {
            System.out.println("Erro: Divisão por zero!");
        } else {
            double resultado = (double) num1 / num2;
            System.out.println("A divisão de " + num1 + " por " + num2 + " é: " + resultado);
        }
    }
}
