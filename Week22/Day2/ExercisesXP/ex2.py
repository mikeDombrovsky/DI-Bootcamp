numbers = [5, 2, 9, 1, 5, 6]


def insertion_sort(numbers: list) -> None:
    n = len(numbers)
    if n <= 1:
        return numbers
    
    def move(j):
        print(f'swap {numbers[j]} - {numbers[j + 1]}')
        print(numbers)
        numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
        print(numbers)

    for i in range(1, n):
        to_sort = numbers[i]
        print('i=', i)
        j = i - 1
        while j >= 0 and to_sort < numbers[j]:
            print('j =', j)
            move(j)
            j -= 1


insertion_sort(numbers)  # sorts the numbers list
print(numbers)  # check that the sorting is successfull
