numbers = [5, 2, 9, 1, 5, 6]


def insertion_sort(numbers: list) -> None:
    n = len(numbers)
    if n <= 1:
        return numbers

    for i in range(1, n):
        to_sort = numbers[i]
        j = i - 1
        print(f'i = {i}, j = {j}')
        
        while j >= 0 and to_sort < numbers[j]:
            swap(j)
            j -= 1
            print(f'i = {i}, j = {j}')


def swap(j):
    print_numbers(j)
    numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    print_numbers(j)

def print_numbers(j):
    for i, num in enumerate(numbers):
        if i in [j, j + 1]:
            print(f' {num} ', end='')
        else:
            print(f'[{num}]', end='')
    print()


insertion_sort(numbers)  # sorts the numbers list
print(numbers)  # check that the sorting is successfull
