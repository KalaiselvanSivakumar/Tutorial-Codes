package chapter_5_data_types_and_variables;

public class MainClass {

	public static void main(String[] args) {
		String str = "7";
		int i = 10 + Integer.parseInt(str);
		System.out.println(i);
		char c = '7';
		i = 10 + c; // Value of '7' is 55. ASCII Value
		System.out.println(i);
		
		// Casting examples
		int j = (int) 7.8; // Cast the double value to int value. i.e. 7.8 to 7
		System.out.println(j);
		double d = 7.5f; // Auto cast
		short s = (short) (j + d); // When performing arithmetic operation between int and double, int is automatically type-casted to double.
		
		/**
		 * Boxing: Changing the primitive data type to its corresponding Wrapper type is called Boxing.
		 * UnBoxing: Changing the Wrapper type to primitive type is called UnBoxing. 
		 */
		
		// Number formats:
		int hexToDec = 0xAF12;
		int octToDec = 01272;
		int binToDec = 0b1100110101;
		
		System.out.println(hexToDec + " " + octToDec + " " + binToDec); // 44818 698 821
		
		// Array Initialisation
		// Method 1
		int[] arr1 = new int[4];
		arr1[0] = 100;
		arr1[1] = 200;
		arr1[2] = 300;
		arr1[3] = 400;
		// Method 2
		int[] arr2 = {100, 200, 300, 400};
		
		
		// 2-D Array
		int[][] arr2D = new int[2][]; // Specifying first index is sufficient
	}

}
