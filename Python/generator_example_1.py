# Simple Generator function with only "yield" statement

def numberGenerator(num):
    number = 1
    while number <= num:
        yield number
        number += 1

numGenerator = numberGenerator(3)

print (next(numGenerator)) # Prints 1
print (next(numGenerator)) # Prints 2
print (next(numGenerator)) # Prints 3
print (next(numGenerator)) # "StopIteration" Exception