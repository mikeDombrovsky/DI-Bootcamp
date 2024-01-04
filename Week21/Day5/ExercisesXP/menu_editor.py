from menu_item import MenuItem
from menu_manager import MenuManager


class MenuEditor:
    def __init__(self):
        self.items = MenuManager.get_all()

    def show_user_menu():
        return input(f'''
            {'•' * 21}
            • View an Item----(V)
            • Add an Item-----(A)
            • Delete an Item--(D)
            • Update an Item--(U)
            • Show the Menu---(S)
            • Quit------------(Q)
            {'•' * 21}''')

    # asks user to input item’s name and price, prints a message 'item was added successfully'
    def add_item_to_menu(self, name, price):
        item = MenuItem(name, price)
        item.save()
        self.items.append(item)
        print('item was added successfully')

    # asks user to input item’s name
    def remove_item_from_menu():
        pass

    def update_item_from_menu():
        pass

    def view_item(self, name):
        for item in self.items:
            if item.name == name:
                return print(item)
        print('Not found')

    def show_restaurant_menu(self):
        for item in self.items:
            print(f'|| - {item}')

    def switch(self, command):
        if command == 'V':
            name = input('input item name: ')
            self.view_item(name)
            
        if command == 'A':
            pass

    def start(self):
        while True:
            command = self.show_user_menu().upper()
            if command == 'Q':
                return

            if command not in ['V', 'A', 'D', 'U', 'S']:
                print('Wrong command, try again.')
                continue
