# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

def sort(words):
    word_list = [word for word in words.split(',')]
    return ','.join(sorted(word_list))

print(sort('without,hello,bag,world'))
