# Generator in try/finally cosntruct block

def numberGenerator(num):
    try:
        number = 1
        while number < num:
            yield number
            number += 1
    finally:
        yield number # Try changing it to "print (number)"

print (list(numberGenerator(10))) # Prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

'''
However when you change finally block to print instead of yield,
result will be:
10
[1, 2, 3, 4, 5, 6, 7, 8, 9]
'''

'''
The above result is due to the finally block is executed
after the completion of try block, it prints 10.
At the time of printing, list(numberGenerator(10)) is preparing the list
from the generated values. Since 10 is not yielded, the list will not have 10 in it.
'''