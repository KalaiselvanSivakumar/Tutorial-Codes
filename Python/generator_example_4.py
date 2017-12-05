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
However when you change finally block to rint onstead of yield,
result will be:
10
[1, 2, 3, 4, 5, 6, 7, 8, 9]
'''

'''
My assumption from the above result:
May be generator yields all the data
and stores it in a memory block
and not yielding in every next() call.
Instead of generating in every call,
it just returns already generated output one by one.
'''