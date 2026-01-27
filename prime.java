import java.util.*;

class prime {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);

        System.out.println("Enter a number");
        int n = s.nextInt();

        boolean isprime = true;

        if (n <= 1) {
            isprime = false;
        } else {
            for (int i = 2; i < n; i++) {
                if (n % i == 0) {
                    isprime = false; // divisible, not prime
                    break; // stop checking further
                }
            }
        }

        if (isprime) {
            System.out.println(n + " is a prime number");
        } else {
            System.out.println(n + " is not a prime number");
        }
    }
}
