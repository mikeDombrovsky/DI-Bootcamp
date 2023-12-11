fruits_str = input('input your favorite fruits, separated by single space. eg. "apple mango sherry" ')
fruits = fruits_str.split()

name = input('input name of any fruit')

if name in fruits:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy')