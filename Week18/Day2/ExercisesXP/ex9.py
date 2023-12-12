# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.
height = int(input('type your height in inches\n'))
height_sm = height * 2.54
if height_sm > 145:
    print('You are tall enough to ride')  
else:
    print('You need to grow some more to ride')