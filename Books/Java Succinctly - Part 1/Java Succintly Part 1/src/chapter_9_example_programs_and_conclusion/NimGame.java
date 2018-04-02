package chapter_9_example_programs_and_conclusion;

import java.util.Scanner;

/**
 * Nim is a game in which two players draw stick(s) from the available sticks.
 * The one to pick the final stick wins.
 * A player can take 1, 2 or 3 sticks per turn.
 */
public class NimGame {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int numberOfSticks = 37;
		int playerTake, computerTake;
		
		System.out.println("Remove 1, 2 or 3 sticks from a pile.");
		System.out.println("The player to draw the last stick is the winner.");
		
		while (true) {
			// Get the number of sticks player wants to pick in this turn
			System.out.println("There are " + numberOfSticks + " remaining.");
			System.out.println("How many do you want to pick?");
			playerTake = scanner.nextInt();
			
			// Player chosen sticks removal or try again if it is not allowed.
			if (playerTake == 1) {
				numberOfSticks -= 1;
			}
			else if (playerTake == 2) {
				numberOfSticks -= 2;
			}
			else if (playerTake == 3) {
				numberOfSticks -= 3;
			}
			else {
				System.out.println("You can only take 1, 2 or 3 sticks. Please try again.");
				continue;
			}
			
			// Declare user as winner if the number of sticks is less than or equal to zero.
			if (numberOfSticks <= 0) {
				System.out.println("You have picked the final stick, You WIN!");
				break;
			}
			
			// Decide number of sticks computer needs to take.
			computerTake = numberOfSticks % 4;
			if (computerTake != 0) {
				numberOfSticks -= computerTake;
			}
			else {
				// Computer has lost unless player makes a mistake.
				// Trying to take random random number of sticks.
				computerTake = (int) (Math.random() * 3.0) + 1;
				numberOfSticks -= computerTake;
			}
			System.out.println("You took " + playerTake + " sticks. Computer took " + computerTake + " sticks.");
			
			// Declare the computer as winner.
			if (numberOfSticks <= 0) {
				System.out.println("Computer has taken the final stick. You LOSE!");
				break;
			}
			
		}
		
		scanner.close();
	}

}
