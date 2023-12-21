from Card import Card
import random


class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

    def __init__(self):
        self.fill_deck()
        self.dealt = []

    def fill_deck(self):
        deck_list = []
        for suit in self.suits:
            for value in self.values:
                deck_list.append(Card(suit, value))
        random.shuffle(deck_list)
        self.deck = deck_list

    def shuffle(self):
        self.deck.extend(self.dealt)
        random.shuffle(self.deck)
        self.dealt = []

    def deal(self):
        card = random.choice(self.deck)
        self.dealt.append(card)
        self.deck.remove(card)
        return card


my_deck = Deck()
print('deck: ')
for i, card in enumerate(my_deck.deck):
    if i == 10:
        break
    print(card.suit, card.value)

card = my_deck.deal()

print('\ndeal - ', card.suit, card.value)
print('dealt: ')
for card in my_deck.dealt:
    if i == 10:
        break
    print(card.suit, card.value)

print(f'deck length: {len(my_deck.deck)}')
print('\nshuffle...\n') 
my_deck.shuffle()

print(f'deck length: {len(my_deck.deck)}')

print('deck: ')
for i, card in enumerate(my_deck.deck):
    if i == 10:
        break
    print(card.suit, card.value)
