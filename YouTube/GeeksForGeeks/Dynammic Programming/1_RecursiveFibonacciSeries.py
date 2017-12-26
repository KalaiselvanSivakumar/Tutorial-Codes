# Simple recursive program for Fibonacci numbers
def fibonacci_series(n):
    print ("fibonacci_series(", n, ")", sep='')
    if n <= 1:
        return n
    return fibonacci_series(n - 1) + fibonacci_series(n - 2)

# The above problem has a property that it can be solved using recursive function
# This property is called "Optimal Substructure Property"

'''
If you execute the above function for the value of n as 5,
you can notice that fibonacci_series(3) is called twice and
fibonacci_series(2) is called thrice and so on.
i.e. For same value, it is calculated multiple times even though the value will be same.
This property is called "Overlapping Substructure Property".
'''
print("Result:", fibonacci_series(5))
