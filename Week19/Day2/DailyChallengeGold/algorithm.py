import random

# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.
list_of_numbers = [random.randint(0, 10000) for _ in range(2000)]
target_number   = 3728

set_of_pairs = set()

for i in range(len(list_of_numbers)):
    for j in range(len(list_of_numbers)):
        if i == j or i in set_of_pairs or j in set_of_pairs:
            continue
        elif list_of_numbers[i] + list_of_numbers[j] == target_number:
            print(list_of_numbers[i], list_of_numbers[j] )
            set_of_pairs.add(i)
            set_of_pairs.add(j)

print(f'There are {len(set_of_pairs) / 2} couples of numbers that sum to {target_number}')
            