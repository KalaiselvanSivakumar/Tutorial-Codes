package chapter_4_reading_input;

import java.util.Scanner;

public class MainClass {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("What is your name?");
		String name = scanner.nextLine();
		System.out.println("Nice to meet you, " + name + "!");
		scanner.close();
	}

}
