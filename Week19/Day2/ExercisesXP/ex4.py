import random
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def guess_random(users_number):
    
    if(1 > users_number > 100):
        return print('number must be from 1 to 100')
    
    rand = random.randint(1, 100)
    if rand == users_number:
        print('Success!')
    else:
        print(f'Fail. Numbers were: {users_number}, {rand}')
        
guess_random(int(input('Guess number from 1 to 100: ')))