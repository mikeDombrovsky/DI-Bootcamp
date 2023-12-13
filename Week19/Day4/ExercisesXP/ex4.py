# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)
def sum(x):
    result = x
    a = str(x)
    for _ in range(3):
         a += str(x)
         result += int(a)
    print(result)
    
sum(3)