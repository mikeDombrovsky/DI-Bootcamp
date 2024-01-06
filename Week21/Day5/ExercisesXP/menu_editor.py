from menu_item import MenuItem
from menu_manager import MenuManager


class MenuEditor:

    def show_user_menu(self):
        return input(f'''
{'•' * 21}
• View an Item----(V)
• Add an Item-----(A)
• Delete an Item--(D)
• Update an Item--(U)
• Show the Menu---(S)
• Quit------------(Q)
{'•' * 21}
Type your command: ''')

    # asks user to input item’s name and price, prints a message 'item was added successfully'
    def add_item_to_menu(self, name, price):
        item = MenuItem(name, price)
        res = item.save()
        if res:
            print('item was added successfully')
        

    # asks user to input item’s name, remove item
    def remove_item_from_menu(self, name):
        item = MenuManager.get_by_name(name)
        res = item.delete()
        if res:
            print('item was deleted successfully')

    def update_item_from_menu(self, name, new_name, new_price):
        item = MenuManager.get_by_name(name)
        res = item.update(new_name, new_price)
        if res:
            print('item was updated successfully')

    def view_item(self, name):
        item = MenuManager.get_by_name(name)
        if(item):
            return print(item)
        print('Not found')

    def show_restaurant_menu(self):
        items = MenuManager.get_all()
        if items:
            for item in items:
                print(f'|| - {item}')
        else:
            print('Menu is empty')

    def switch(self, command):
        if command == 'V':
            name = input('input item name: ')
            self.view_item(name)
            
        if command == 'A':
            name = input('input item name: ')
            price = input('input item price: ')
            self.add_item_to_menu(name, price)
            
        if command == 'D':
            name = input('input item name: ')
            self.remove_item_from_menu(name)
            
        if command == 'U':
            name = input('input item name: ')
            new_name = input('input new item name: ')
            price = input('input new item price: ')
            self.update_item_from_menu(name, new_name, price)
            
        if command == 'S':
            self.show_restaurant_menu()
            
        

    def start(self):
        while True:
            command = self.show_user_menu().upper()
            if command == 'Q':
                self.show_restaurant_menu()
                print('Good bye!')
                return

            if command not in ['V', 'A', 'D', 'U', 'S']:
                print('Wrong command, try again.')
                continue
            
            self.switch(command)

menu_editor = MenuEditor()

if __name__ == "__main__":
    menu_editor = MenuEditor()
    menu_editor.start()