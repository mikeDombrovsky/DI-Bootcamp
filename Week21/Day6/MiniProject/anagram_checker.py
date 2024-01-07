
class AnagramChecker:
    def __init__(self):
        self.words = []
        self.read_file()

    def is_valid_word(self, word):
        return word.upper() in self.words

    def get_anagrams(self, my_word):
        anagrams = []
        my_word = my_word.upper()
        for word in self.words:
            if self.is_anagram(word, my_word):
                anagrams.append(word)
        return anagrams
        # return [self.is_anagram(word, my_word) for word in self.words]

    def is_anagram(self, word1, word2):
        if len(word1) != len(word2) or word1 == word2:
            return False

        for char in word1:
            if char in word2:
                word2 = word2.replace(char, '', 1)
        return word2 == ''

    def read_file(self):
        try:
            with open('sowpods.txt') as f:
                words = f.readlines()
                self.words = [word.strip() for word in words]

        except Exception as e:
            print(e)


if __name__ == '__main__':
    checker = AnagramChecker()
    print(checker.is_anagram('adam', 'mada'))
    print(checker.is_anagram('adam', 'madama'))
    print(checker.is_valid_word('meat'))
    print(checker.get_anagrams('meat'))
