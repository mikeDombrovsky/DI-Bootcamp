class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        print(f'{self.name} jumps {self.height * 2}sm high!')

davids_dog = Dog('Rex', 50)
print(f'Dogs name is {davids_dog.name} and height is {davids_dog.height}')
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)

print(f'Dogs name is {sarahs_dog.name} and height is {sarahs_dog.height}')
sarahs_dog.bark()
sarahs_dog.jump()


if(sarahs_dog.height > davids_dog.height):
    print(sarahs_dog.name)
else:
    print(davids_dog.name)