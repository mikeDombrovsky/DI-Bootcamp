family = dict()
print('Type name and then age for all your family members, then push \'Enter\'')
while True:
    name = input('Name: ')
    if name == '':
        break
    age = input('Age: ')
    family[name] = int(age)
    
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
sum = 0
for age in family.values():
    if(age >= 12): 
        sum += 15
    elif 12 > age >= 3:
        sum += 10
        
print(f'total cost is {sum}')        
            