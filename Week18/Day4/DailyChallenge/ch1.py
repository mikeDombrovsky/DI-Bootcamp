number = int(input('number: \n'))
length = int(input('length: \n'))

numbers = [number]
current = number
while  current != number * length:
    numbers.append(current + number)
    current += number
    
print(numbers)
    