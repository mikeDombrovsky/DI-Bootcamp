def find_longest_word(phrase):
    words = phrase.split()
    sorted_words = sorted(words, key=lambda word: len(word), reverse=True)
    
    print(sorted_words[0])
    
find_longest_word("Margaret's toy is a pretty doll.")
find_longest_word("A thing of beauty is a joy forever.")
find_longest_word("Forgetfulness is by all means powerless!") 