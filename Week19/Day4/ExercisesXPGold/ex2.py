morse_table = {
    'a':'.-',
    'b':'-...',
    'c':'-.-.',
    'd':'-..',
    'e':'.',
    'f':'..-.',
    'g':'--.',
    'h':'....',
    'i':'..',
    'j':'.---',
    'k':'-.-',
    'l':'.-..',
    'm':'--',
    'n':'-.',
    'o':'---',
    'p':'.--.',
    'q':'--.-',
    'r':'.-.',
    's':'...',
    't':'-',
    'u':'..-',
    'v':'...-',
    'w':'.--',
    'x':'-..-',
    'y':'-.--',
    'z':'--..',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    '0':'-----',
    ' ':'/'
}


def encode_to_morse(text):
    encoded = ''
    for char in text.lower():
        encoded += morse_table[char] + ' '
    
    print(encoded)
    
def decode_from_morse(text):
    decoded = ''
    words = text.split('/')
    for word in words:
        chars = word.split()
        for char in chars:
            i = list(morse_table.values()).index(char)
            decoded += list(morse_table.keys())[i]
        decoded += ' '
    print(decoded)
    
    
encode_to_morse('i want to run')

decode_from_morse('.. / .-- .- -. - / - --- / .-. ..- -. ')