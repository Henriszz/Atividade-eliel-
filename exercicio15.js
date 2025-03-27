import java.util.Scanner;

public class Exercicio15 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int num = scanner.nextInt();
        System.out.println("O dobro de " + num + " é " + (num * 2));
        scanner.close();
    }
}
