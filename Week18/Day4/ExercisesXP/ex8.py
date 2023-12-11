print('enter pizza toppings and then enter quit')
toppings = []
while True:
    topping = input('enter pizza topping: ')
    if(topping == 'exit'):
        break
    toppings.append(topping)
    print(f'I will add that {topping} to your pizza.')
    

print('Your toppings are:')
for topping in toppings:
        print(f'{topping} - $2.5')

print('Pizza pie - $10')
price = 10 + 2.5 * len(toppings)
print(f'Total - ${price}')
