def get_age(year, month, day):
    current_year = 2023
    current_month = 12
    current_day = 13
    
    age = current_year - year
    if current_month > month or current_day > day:
        age -= 1
        
    return age

def can_retire(gender, date_of_birth):
    year, month, day = date_of_birth.split('/')
    
    if int(year) < 1948 and int(month) < 4:
        return False
    
    age = get_age(int(year), int(month), int(day))
    
    if gender == 'm':
        return age >= 67
    elif gender == 'f':
        return age >= 62
    else:
        raise Exception('THERE ARE JUST 2 GENDERS, DEAR!')
    
def main():
    gender = input('What is your gender? (m / f): ')
    date_of_birth = input('What is your date of birth? ("yyyy/mm/dd" eg. "1993/09/21"): ')
    try:
        ready = can_retire(gender, date_of_birth)
    except:
        print('Geneder must be f or m')
        return
    
    if ready:
        print('You can retire')
    else:
        print('You cannot retire')
    
main()