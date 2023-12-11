print('fill one by one the age of each person who wants a ticket. If finished type word "stop" and press enter\n')

ages = []
while True:
    age =input('type age and press enter: \n')
    if age == 'stop':
        break
    ages.append(int(age))

sum = 0
for age in ages:
    if age >= 3 and age <= 12:
        sum += 10
    elif age > 12:
        sum += 15
print(f'full cost of tickets is ${sum}')    
        
names = ['bobby', 'sally', 'peter']
removed = []

for name in names:
    age = int(input(f'How old are you, {name}?'))
    if age < 21:
        removed.append(name)

for name in removed:
    names.remove(name)   
    
print(names)