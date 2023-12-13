
matrix = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""
columns = matrix.split('\n')

message = []
for i in range(len(columns[0])):
    
    for row in columns: 
        char = row[i]
        if char.isalpha():
            message.append(char)
        elif len(message) > 0 and message[-1] != ' ':
            message.append(' ')
    
print(''.join(message))