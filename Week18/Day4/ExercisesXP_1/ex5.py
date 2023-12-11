import random

def guess_random(users_number):
    
    if(1 > users_number > 100):
        return print('number must be from 1 to 100')
    
    rand = random.randint(1, 100)
    if rand == users_number:
        print('Success!')
    else:
        print(f'Fail. Numbers were: {users_number}, {rand}')
        
guess_random(int(input('Guess number from 1 to 100: ')))