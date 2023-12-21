import random


class Game:
    def __init__(self):
        self.results = {'won': 0, 'lost': 0, 'drew': 0}


    # Ask the user to select an item (rock/paper/scissors).
    # Keep asking until the user has selected one of the items –
    # use data validation and looping. Return the item at the end of the function.
    def get_user_item(self):

        item = input('''
------------------------------------------------------
Select:
    (r) Rock
    (p) Paper
    (s) Scissors
------------------------------------------------------
:    ''')
        while item not in ['r', 'p', 's']:
            item = input('\nChoose (r), (p) or (s)!\n\n:    ')

        return item


    # Select rock/paper/scissors at random for the computer.
    # Return the item at the end of the function.
    # Use python’s random.choice() function (read about it online).
    def get_computer_item(self):
        return random.choice(['r', 'p', 's'])

    # Return either win, draw, or loss.
    def get_game_result(self, user_item, computer_item):

        def evaluate(user_item, computer_item):
            if user_item == computer_item:
                return 'drew'

            if user_item == 'r' and computer_item == 's':
                return 'won'

            if user_item == 'p' and computer_item == 'r':
                return 'won'

            if user_item == 's' and computer_item == 'p':
                return 'won'

            return 'lost'

        result = evaluate(user_item, computer_item)

        return result

    # the function that will be called from outside the class,
    # 1. Get the user’s item (rock/paper/scissors)
    # 2. Get a random item for the computer
    # 3. Compare items
    # 4. Print - ie “You selected rock. The computer selected paper. You lose”
    # 4. Return the results of the game as a string: win / draw / loss
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(
            f'\nYou selected {user_item}. The computer selected {computer_item}. Result: {result}')
        return result
