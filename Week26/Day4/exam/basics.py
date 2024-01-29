# Exam

# 1. Data Types

# Which of the following is not a mutable data type in Python?
# a) List
# b) Dictionary
# c) Tuple      <-------- tuple is not a mutable
# d) Set

# 2. Lists and Loops

# Using a list comprehension, generate a list of the squares of numbers from 1 to 10,
# but only include squares of even numbers.

my_list = [n for n in range(1, 11) if n % 2 == 0]
print(my_list)  # [2, 4, 6, 8, 10]

# Using the range function, create a list of numbers from 1 to 10,
# then print numbers that are divisible by both 2 and 3.
my_list = range(1, 11)

for num in my_list:
    if num % 2 == 0 and num % 3 == 0:
        print(num)

# Loop through the provided list of dictionaries and print the names and ages:
student_list = [
    {
        "name": "John",
        "age": 24
    },
    {
        "name": "Anna",
        "age": 22
    },
    {
        "name": "Mike",
        "age": 25
    }
]

for student in student_list:
    print(f"{student['name']} {student['age']}")


# 3. Function Behavior with *args and **kwargs

# Write a function combine_words that accepts any number of positional arguments and
# key-value arguments. The function should return a single sentence combining all the words provided.
# Example:
# print(combine_words("Hello", "world", second="is", third="great!", first="Python"))
# Expected Output: "Hello world. Python is great!"

def combine_words(*args, **kwargs):
    word1, word2 = args
    first, second, third = [kwargs[k] for k in ('first', 'second', 'third')]
    print(word1, word2, first, second, third)


print(combine_words("Hello", "world", second="is", third="great!", first="Python"))


# 4. Object-Oriented Programming (OOP)

# Create a class Vehicle with string attributes type, brand, and integer attribute year.
# Ensure instances of the vehicle cannot be created if any of these attributes
# are missing and include a method to display the vehicle’s info. Use dunder method.
class Vehicle:
    def __init__(self, my_type, brand, year):
        if not my_type or type(my_type) is not str or not brand or type(brand) is not str or not year or type(year) is not int:
            raise ValueError('wrong params!')
        self.type = my_type
        self.brand = brand
        self.year = year

    def __str__(self) -> str:
        return f'Vehicle: type: {self.type}, brand: {self.brand}, year: {self.year}'
    

# v = Vehicle(None, None, None) # error
v = Vehicle('mytype', 'tesla', 2023)
print(v)  # Vehicle: type: mytype, brand: tesla, year: 2023


## 5. OOP Inheritance and Decorators

# Create a class Car with string attributes brand, model, and integer attribute mileage. 
# Implement a method to return the car’s details.
4