from game import Game


# display simple menu: Play a new game or Show scores and Quit
def get_user_menu_choice():
    choice = input(f'''
------------------------------------------------------
Menu: 
    (g) Play new game
    (q) Quit and show scores
------------------------------------------------------
:    ''')

    while choice not in ['g', 'q']:
        choice = input('\nChoose (g) or (q)\n\n:    ')

    return choice


# print the results of the games played. dictionary, thank the user for playing.
# results:  {win: 2,loss: 4,draw: 3}
def print_results(results):
    print(f'''
------------------------------------------------------
Game results:
    - You won  {results['won']} times
    - You lost {results['lost']} times
    - You drew {results['drew']} times
          
Thank you for playing!
------------------------------------------------------
''')


# 1. Displaying the menu repeatedly, until user types in value to exit: ‘x’ or ‘q’.
# 2. When the user chooses to play -
# 3. Create a new Game object (see below), and call its play() function,
# receiving the result of the game that is returned.
# Remember the results of every game that is played.
# 4. When the user chooses to exit the program, call the print_results
def main():
    choice = get_user_menu_choice()
    game = Game()

    while choice == 'g':
        result = game.play()
        game.results[result] += 1
        choice = get_user_menu_choice()

    print_results(game.results)


main()
