from db_postgres import set_up, execute_query
from menu_item import MenuItem


class MenuManager:
    
    @classmethod
    def get_by_name(cls, name):
        query = f'''
        SELECT * FROM menu_items
        WHERE item_name = '{name}'
        '''
        rows = execute_query(query)
        if rows and len(rows) > 0:
            price = rows[0][2]  
            return MenuItem(name, price)
        return None

    @classmethod
    def get_all(cls):
        query = f'''
        SELECT * FROM menu_items
        '''
        items = []
        rows = execute_query(query)
        if rows and len(rows) > 0:
            for row in rows:
                items.append(MenuItem(row[1], row[2]))
            return items
        return None

set_up()
# item = MenuItem('Burger', 35)
# print('saved:', item.save())
# print('updated:', item.update('Veggie Burger', 37))

# item2 = MenuManager.get_by_name('Veggie Burger')
# print('get Veggie Burger:', item2)

# item2 = MenuManager.get_by_name('Beef Stew')
# print('get Beef Stew:', item2)

# items = MenuManager.get_all()
# print('get all:', items)

# print('deleted:', item.delete())

# items = MenuManager.get_all()
# print('get all:', items)
