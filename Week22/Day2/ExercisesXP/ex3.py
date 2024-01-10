
numbers = [1, 3, 5, 7, 9, 11]


def binary_search(numbers: list, item):
    numbers.sort()
    n = len(numbers)
    low = 0
    high = n - 1
    
    while high >= low:
        mid = (low + high) // 2
        print('low:',low,'high:', high,'mid:', mid)
        if item == numbers[mid]:
            return mid
        if item > numbers[mid]:
            low = mid + 1
        elif item < numbers[mid]:
            high = mid - 1
    return -1


print(binary_search(numbers, 7))  # returns 3
