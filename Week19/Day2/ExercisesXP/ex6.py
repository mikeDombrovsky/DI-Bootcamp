# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
def show_magicians(names):
    for name in names:
        print(name)

# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
def make_great(names):
    for i in range(len(names)):
        names[i] = f'the Great {names[i]}'
        

# Call the function make_great().
make_great(magician_names)

# Call the function show_magicians() to see that the list has actually been modified.
show_magicians(magician_names)