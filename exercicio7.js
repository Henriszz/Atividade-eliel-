import java.util.Scanner;

public class Exercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int num = scanner.nextInt();
        int quadrado = num * num;
        System.out.println("O quadrado de " + num + " é: " + quadrado);
        scanner.close();
    }
}
