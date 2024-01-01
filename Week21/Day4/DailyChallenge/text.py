
class Text:
    def __init__(self, text):
        self.text = text
        
    def count(self, word):
        words = self.text.split()
        count_of_word = words.count(word)
        if count_of_word == 0:
            return None
        return f'{word} apiars {count_of_word} times in the following text'
        
    def get_most_common(self):
        words = self.text.split()
        uniques = set(words)
        
        max = words.count(words[0])
        most_common = words[0]
        for word in uniques:
            count = words.count(word)
            if count > max:
                max = count
                most_common = word
        return most_common
            
    def get_uniques(self):
        return list(set(self.text.split()))

    @classmethod
    def from_file(cls, file_name):
        try:
            with open(file_name, mode='r') as f:
                text = f.read()
                return cls(text)
        except Exception as e:
            print(e)

text = Text('koko ja koko ja ja')
print(text.count('ja'))  # ja apiars 3 times in the following text
print(text.count('j')) # None
print(text.get_uniques())  # ['ja', 'koko']
print(text.get_most_common())  # ja

text2 = Text.from_file('the_stranger.txt')
print(text2.count('I'))  # I apiars 1214 times in the following text
print(text2.count('LOL')) # None
print(len(text2.get_uniques()))  # 6768
print(text2.get_most_common())  # the

