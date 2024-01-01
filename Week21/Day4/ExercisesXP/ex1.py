import random
words = []


def get_words_from_file(file_name):
    with open(file_name) as file:
        line_list = file.readlines()
    word_list = [word.strip().lower() for word in line_list]

    return word_list


def get_random_sentence(lenth):
    return ' '.join(random.choices(words, k=lenth))


def main():
    global words
    lenth = input(
        'Type length as number from 2 to 20 and push enter to get random phrase with according length: ')
    try:
        phrase_len = int(lenth)
        if 2 > phrase_len > 20:
            raise ValueError('length must be between 2 and 20')
    except Exception as e:

        return print('Wrong parameter!', e)

    words = get_words_from_file('sowpods.txt')

    print(get_random_sentence(phrase_len))


main()
