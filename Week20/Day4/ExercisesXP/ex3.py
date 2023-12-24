import random
from ex2 import Dog


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        for dog in args:
            print(f'{dog}', end=' ')
        print(f'and {self.name} all play together')

    def do_a_trick(self):
        if self.trained:
            trick = random.choice(
                [
                    'does a barrel roll',
                    'stands on his back legs',
                    'shakes your hand',
                    'plays dead'
                ])
            print(f'{self.name} {trick}')


bobik = PetDog('Bobik', 2, 20)
tuzik = PetDog('Tuzik', 1, 30)

bobik.play('Tuzik')
tuzik.train()
tuzik.do_a_trick()
