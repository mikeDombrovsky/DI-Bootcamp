def get_full_name(first_name, last_name, middle_name=""):
    if middle_name != '':
        middle_name += ' '
    
    print(f'{first_name} {middle_name}{last_name}')
    
get_full_name(first_name="john", middle_name="hooker", last_name="lee")
get_full_name(first_name="bruce", last_name="lee")