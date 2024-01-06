import os

class AnagramChecker:
    def __init__(self):
        # self.words = dict()
        with open('sowpods.txt') as f:
            self.words = f.read()
            print(self.words[:10])
        
    
    def is_valid_word(self, word):
        pass
    
    
    def get_anagrams(self, word):
        pass
    
    def is_anagram(self, word1, word2):
        
        for char in word1:
            if char in word2:
                word2 = word2.replace(char, '')
        return word2 == ''


checker = AnagramChecker()
print(checker.is_anagram('adam','mada'))