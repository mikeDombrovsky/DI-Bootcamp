import random
import functools

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice_1 = throw_dice()
        dice_2 = throw_dice()
        if dice_1 == dice_2:
            return count
        
def main():
    results = []
    for i in range(100):
        results.append(throw_until_doubles())
    
    total_throws = functools.reduce(lambda a, b: a + b, results)
    avg = round(total_throws / 100, 2)
    
    print(f'Total  throws: {total_throws}')
    print(f'Average throws to reach doubles: {avg}')
    
main()