#include <stdio.h>



int main() {
	// Prints garbage value
	int a[3];

	// Prints 1, 3, 5
	int b[3] = {1, 3, 5};

	// Prints 1, 0, 0
	int c[3] = {1};

	// Prints 0, 0, 0
	int d[3] = {};

	// Prints 5, 6, 7 and size is 3
	int e[] = {5, 6, 7};


	for (int i = 0; i < 3; ++i) {
		printf("%d ", e[i]);
	}

	return 0;
}