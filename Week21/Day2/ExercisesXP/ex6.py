# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.
from datetime import datetime as dt

def print_lived_mitutes(birth_date):
    b_datetime = dt.fromisoformat(birth_date)
    print(f'{b_datetime}')
    dt_now = dt.now() 
    tile_delta = dt_now - b_datetime
    print(tile_delta.seconds * 60)
    print(f'up for now you lived {tile_delta.seconds * 60} minutes')
    
print_lived_mitutes('1988-02-16')