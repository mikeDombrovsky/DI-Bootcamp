class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if self.animals.count(new_animal) == 0:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if self.animals.count(animal_sold) > 0:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        
        sorted_animals = sorted(self.animals)
        sorted_dict = {}

        first_letter = sorted_animals[0][0]
        i = 1

        for animal in sorted_animals:
            if first_letter == animal[0]:
                if sorted_dict.get(i) == None:
                    sorted_dict[i] = animal
                elif type(sorted_dict.get(i)) == str:
                    sorted_dict[i] = [sorted_dict.get(i), animal]
                else:
                    sorted_dict[i].append(animal)
            else:
                i += 1
                first_letter = animal[0]
                sorted_dict[i] = animal
                
        self.groups = sorted_dict
        
    def get_groups(self):
        for i, group in self.groups.items():
            if type(group) == str:
                print(f'Group {i}: \n - {group}')
            else:
                print(f'Group {i}:')
                for animal in group:
                    print(f' - {animal}')
                print()
                

zoo = Zoo('ramat_gan_safari')
zoo.add_animal('Emu')
zoo.add_animal('Eel')
zoo.add_animal('Cat')
zoo.add_animal('Bear')
zoo.add_animal('Cougar')
zoo.add_animal('Baboon')
zoo.add_animal('Ape')

zoo.get_animals()

zoo.sort_animals()

zoo.get_groups()
