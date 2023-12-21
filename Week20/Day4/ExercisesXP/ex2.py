class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} id barking'
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, another_dog):
        self_strength = self.run_speed() * self.weight
        another_strength = another_dog.run_speed() * another_dog.weight
        
        if self_strength > another_strength:
            return f'{self.name} won!'
        else:
            return f'{another_dog.name} won!'


daisy = Dog('Daisy', 3, 10)
cooper = Dog('Cooper', 2, 15)
bobby = Dog('Bobby', 1, 20)

print(daisy.bark())
print(cooper.bark())
print(bobby.bark())

print(daisy.fight(cooper))
print(daisy.fight(bobby))
print(cooper.fight(bobby))