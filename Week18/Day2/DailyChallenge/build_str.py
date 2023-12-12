# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

import random


phrase = input('Enter phrase, that contains 10 characters, please: ')

if len(phrase) < 10:
    print('string not long enough')
elif len(phrase) > 10:
    print('string too long')
else:
    print('perfect string')    

# Then, print the first and last characters of the given text.
print(phrase[0], phrase[-1])
# Using a for loop, construct the string character by character: Print the first character, then the second,
# then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld
for i in range(1, len(phrase) + 1):
    print(phrase[0:i])
    
# 4. Bonus: Swap some characters around then print the newly jumbled string 
# (hint: look into the shuffle method). For example:    Hlrolelwod
list = list(phrase)
random.shuffle(list)
print( ''.join(list))