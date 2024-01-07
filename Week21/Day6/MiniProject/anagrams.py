from anagram_checker import AnagramChecker


def main():

    while True:
        word = print_menu()
        if word == 'EXIT':
            return print('Good buy!')

        if not word.isalpha():
            print('Only alphabetic characters are allowed, try again.')
            continue

        checker = AnagramChecker()
        if not checker.is_valid_word(word):
            print('Only valid english words allowed, try again.')
            continue

        anagrams = checker.get_anagrams(word)
        anagrams = ', '.join(anagrams)

        print(f'''
Your word: {word} is valid English word.
Anagrams for your word are: {anagrams}
''')


def print_menu():
    return input('''
Input one word. Word 'exit' will stop programm : 
''').strip().upper()


if __name__ == '__main__':
    main()
