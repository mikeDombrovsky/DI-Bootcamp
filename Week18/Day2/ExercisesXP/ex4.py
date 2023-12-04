height = int(input('type your height in inches\n'))
height_sm = height * 2.54
if height_sm > 145:
    print('You are tall enough to ride')  
else:
    print('You need to grow some more to ride')