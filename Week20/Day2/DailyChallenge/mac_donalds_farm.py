
class Farm:

    def __init__(self, farmer_name):
        self.farmer_name = farmer_name
        self.animals = {}

    def add_animal(self, animal, number=1):
        count = self.animals.get(animal)
        if count:
            self.animals[animal] = count + number
        else:
            self.animals.update({animal: number})

    def get_info(self):
        message = f'{self.farmer_name}\'s farm\n'
        for animal, number in self.animals.items():
            message += f'{animal} : {number}\n'
        message += '     E-I-E-I-0!'
        return message

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals_types = list(map(self.add_s_if_many, self.get_animal_types()))

        message = f'{self.farmer_name}’s farm has '

        for i, animal in enumerate(animals_types):
            if len(animals_types) == 1:
                return f'{message} {animal}'
            if len(animals_types) == 2:
                return f'{message} {animal} and {animals_types[i + 1]}'

            if i == len(animals_types) - 1:
                message += f' and {animal}.'
            else:
                message += animal
                if i < len(animals_types) - 2:
                    message += ', '

        return message

    def add_s_if_many(self, animal):
        if self.animals.get(animal) > 1:
            return animal + 's'
        return animal


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal('dog', 3)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
