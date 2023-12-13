# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)
def sum(number):
    result = number
    summand = str(number)
    for _ in range(3):
         summand += str(number)
         result += int(summand)
    print(result)
    
def sum2(number):
    result = 0
    summand = str(number)
    for i in range(1, 5):
        result += int(summand * i)
    print(result)
    
sum(3)
sum2(3)