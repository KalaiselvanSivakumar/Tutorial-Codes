package chapter_6_operators_and_expressions;

public class MainClass {

	public static void main(String[] args) {
		
		// Floating point comparison
		float f1 = 1/3.0f;
		System.out.println("1/3 in float vs 1/3: " + (f1 == 1 / 3.0)); // false
		// The above is because float is converted to double while checking where double will have more 3's in 0.333333..
		
		float f2 = 901.0f / 13.0f;
		float f3 = (53.0f / 13.0f) * 17.0f;
		// Mathematically both should be same.
		// But since, division induces some error
		if (f2 == f3) {
			System.out.println(f2 + " " + f3 + " is equal");
		}
		else {
			System.out.println(f2 + " " + f3 + " is not equal");
		}
		
		// In order to avoid the above error, we have to allow small degree of error.
		if (Math.abs(f2 - f3) < 0.001f) {
			System.out.println(f2 + " " + f3 + " is equal");
		}
		else {
			System.out.println(f2 + " " + f3 + " is not equal");
		}
		
		
		// Challenge 6.0
		int eggs = 792671, cartonCapacity = 12;
		System.out.println("No of full cartons: " + (eggs / cartonCapacity));
		System.out.println("No of remaining eggs: " + (eggs % cartonCapacity));
	}

}
