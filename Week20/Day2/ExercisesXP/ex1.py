class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


murzik = Cat('Murzik', 1)
antistress = Cat('Antis', 2)
bibi = Cat('Bibi', 3)


def find_oldest(cats):
    sorted_by_age = sorted(cats, key=lambda cat: cat.age, reverse=True)
    return sorted_by_age[0]

oldest_cat = find_oldest([murzik, antistress, bibi])
print(f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.')
