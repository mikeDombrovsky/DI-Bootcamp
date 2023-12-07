word = input('type a word: ')
res = dict()

for i in range(len(word)):
    print(res.get(word[i]))
    if not res.get(word[i]):
        res[word[i]] = [i]
    else:
        res[word[i]].append(i)    
print(res)        