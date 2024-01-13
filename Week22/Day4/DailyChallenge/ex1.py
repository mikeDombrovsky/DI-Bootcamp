# Create a function that counts the frequency of each unique word
# in a given string and returns a dictionary. The keys will be the
# unique words and the values will be the counts of those words.
# The function should have a time complexity of (O(n)).

# Input: "apple orange apple banana orange apple"
# Output: {'apple': 3, 'orange': 2, 'banana': 1}

def word_frequency(input_str):

    words = input_str.split()  # O(n)
    res_dict = dict()  # O(1)
    for word in words:
        count = res_dict.get(word)  # O(n)
        if count:
            res_dict[word] = count + 1  # O(n)
        else:
            res_dict[word] = 1
    return res_dict
# O(3n + 1) --> O(n)

input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)
