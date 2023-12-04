phrase = input('input the longest sentence they can without the character “A”\n')

while 'A' not in phrase:
    print('Congratulations!')
    phrase = input('input the longest sentence you can without the character “A”\n')
