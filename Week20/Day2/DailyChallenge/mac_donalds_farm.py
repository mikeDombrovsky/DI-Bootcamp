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
        pass
        


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
