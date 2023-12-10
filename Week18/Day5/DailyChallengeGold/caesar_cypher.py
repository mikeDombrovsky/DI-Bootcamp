mode = input('Choose would you like to encrypt or decrypt: ')
shift = int(input('Choose shift(0-32): '))
message = input('Type your message: ')

if mode == 'decrypt':
    shift = -shift
result = ''    
for letter in message:
    result += chr(ord(letter) + shift)
    
print(result)    