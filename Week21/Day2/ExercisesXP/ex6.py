# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.
from datetime import datetime as dt

def print_lived_minutes(birth_date):
    b_datetime = dt.fromisoformat(birth_date)    
    dt_now = dt.now() 
    
    time_delta = dt_now - b_datetime
    total_minutes = int(time_delta.total_seconds() / 60)
    
    print(
        f'Up for now you lived {int(time_delta.total_seconds() / 60)} minutes in your life.')
    
print_lived_minutes('1988-02-16')