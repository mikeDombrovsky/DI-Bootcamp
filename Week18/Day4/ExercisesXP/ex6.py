import random

def get_random_temp(season = 'fall'):
    if season == 'winter':
        t = random.uniform(-10, 16)
    elif season == 'spring':
        t = random.uniform(24, 32)
    elif season == 'summer':
        t = random.uniform(33, 40) 
    elif season in ['fall', 'autumn']:
        t = random.uniform(17, 23) 
    return round(t, 2)

def get_season_by_month(month):
    if month in ['12','1','2']:
        season = 'winter'
    elif month in ['3','4','5']:
        season = 'spring'
    elif month in ['6','7','8']:
        season = 'summer'
    elif month in ['9','10','11']:
        season = 'fall'
    return season 

def main():
    month = input('type number of the month from 1 to 12: ')
    
    season = get_season_by_month(month)
        
    t = get_random_temp(season)
    
    message = f'The temperature right now is {t} °C\n'
    if t <= 0:
        message += 'Brrr, that\'s freezing! Wear some extra layers today'
    elif 0 < t <= 16:
        message += 'Quite chilly! Don\'t forget your coat'
    elif 16 < t <= 23:
        message += 'Not warm yet! wear sweater or hoody'
    elif 23 < t <= 32:
        message += 'Wow! Go out, it is super warm today'
    elif 32 < t <= 40:
        message += 'Quite hot! You must take away a bottle of water and sun hat'   
    print(message)

main()    
    