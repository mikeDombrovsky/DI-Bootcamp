word = input('type a word:\n')

result = []
for letter in word:
    if len(result) == 0 or letter != result[-1]:
        result.append(letter)
        
print(''.join(result))