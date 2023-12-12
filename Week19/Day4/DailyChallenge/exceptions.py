def divide_by_zero():
    try:
        5 / 0
    except ZeroDivisionError:
        print('Cannot divide by zero')
        
divide_by_zero()