package MainPackage;

import java.util.Scanner;

import OtherPackage.OtherClass;

public class MainClass {
	public static void main(String[] args) {
		System.out.println("This class belongs to the MainPackage!");
		OtherClass otherClass = new OtherClass();
		otherClass.SayHello();

		// Assert example
		int numerator, denominator;
		Scanner scanner = new Scanner(System.in);
		System.out.println("Please enter a numerator");
		numerator = Integer.parseInt(scanner.nextLine());

		System.out.println("Please enter a denominator");
		denominator = Integer.parseInt(scanner.nextLine());

		assert (denominator != 0);
		
		System.out.println(numerator + " / " + denominator + " = " +
					(numerator / denominator) + " and remainder = " +
					(numerator % denominator));
		scanner.close();
	}
}