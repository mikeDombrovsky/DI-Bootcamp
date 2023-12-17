class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

murzik = Cat('Murzik', 1)
antistress = Cat('Antis', 2)
bibi = Cat('Bibi', 3)

def find_oldest(*cats):
    sorted_by_age = sorted( lambda cat: cat.age , cats, reverse=True)
    return sorted_by_age[0]

        