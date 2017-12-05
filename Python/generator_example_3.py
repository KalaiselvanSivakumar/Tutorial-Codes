# Generator expression

g = (x for x in range(10)) # This is similar to yield. It is a generator.
# list(g) generates all values in the generator
print (list(g)) # Prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# This is a generator object
print (g) # Prints "<generator object <genexpr> at 0x10214dfc0>" - Address may vary