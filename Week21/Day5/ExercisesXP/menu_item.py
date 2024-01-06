from db_postgres import set_up, execute_query


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        query = f'''
        INSERT INTO menu_items(item_name, item_price)
        VALUES ('{self.name}', {self.price})
        RETURNING *
        '''

        return execute_query(query, is_select=False)

    def delete(self):
        query = f'''
        DELETE FROM menu_items
        WHERE item_name = '{self.name}' AND  item_price = {self.price}
        RETURNING *;
        '''

        return execute_query(query, is_select=False)

    def update(self, name, price):
        query = f'''
        UPDATE menu_items
        SET item_name = '{name}', item_price = {price}
        WHERE item_name = '{self.name}' AND  item_price = {self.price}
        RETURNING *;
        '''
        
        self.name = name
        self.price = price
        
        return execute_query(query, is_select=False)
    
    def __eq__(self, other):
        return self.name == other.name
    
    def __str__(self):
        return f'< MenuItem. name: {self.name}, price: {self.price}. >'
