# Simple Generator with return statement

# Generator can have return statement but only without a return value
# i.e. in the form "return"

def numberGenerator(num):
    if num < 20:
        number = 1
        while number <= num:
            yield number
            number += 1
    else:
        return

print (list(numberGenerator(19))) # Prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
print (list(numberGenerator(25))) # Prints []