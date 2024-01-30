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
        if type(my_type) is not str or type(brand) is not str or type(year) is not int:
            raise ValueError('wrong params!')
        self.type = my_type
        self.brand = brand
        self.year = year

    def __str__(self) -> str:
        return f'Vehicle: type: {self.type}, brand: {self.brand}, year: {self.year}'


# v = Vehicle(None, None, None) # error
v = Vehicle('mytype', 'tesla', 2023)
print(v)  # Vehicle: type: mytype, brand: tesla, year: 2023


# 5. OOP Inheritance and Decorators

# Create a class Car with string attributes brand, model, and integer attribute mileage.
# Implement a method to return the car’s details.
class Car:
    def __init__(self, brand, model, milage) -> None:
        if type(brand) is not str or type(model) is not str or type(milage) is not int:
            raise ValueError('wrong params!')
        self.brand = brand
        self.model = model
        self.milage = milage

    def __str__(self) -> str:
        return f'{self.__class__.__name__}: brand: {self.brand}, model: {self.model}, milage: {self.milage}'


car = Car('tesla', 's', 50000)
print(car)  # Car: brand: tesla, model: s, milage: 50000


# Create a subclass ElectricCar inheriting from Car with an additional
# float private attribute __battery_capacity.
# Override the car’s details method to include the battery capacity.
# Use the @property decorator to get the battery_capacity value and
# @battery_capacity.setter to modify the battery capacity only if the new value is positive.
class ElectricCar(Car):
    def __init__(self, brand, model, milage, battery_capacity) -> None:
        if type(battery_capacity) is not int:
            raise ValueError('wrong params!')
        super().__init__(brand, model, milage)
        self._battery_capacity = battery_capacity

    @property
    def battery_capacity(self):
        return self._battery_capacity

    @battery_capacity.setter
    def battery_capacity(self, value):
        if not value or value <= 0:
            raise ValueError('battery capacity can not be negative')
        self._battery_capacity = value

    def __str__(self) -> str:
        return super().__str__() + f', battery_capacity: {self._battery_capacity} KWh'


car = ElectricCar('tesla', 's', 50000, 100)
print(car)


# Create a BankAccount class with private float attribute _balance and
# private string attribute _account_holder.
# Implement methods to deposit, withdraw, and view the balance.
# Include a class method to track accounts created and a static method
# for a bank policy message. Ensure the balance is non-negative.
class BankAccount:
    _accounts = []

    def __init__(self, balance, holder) -> None:
        if type(balance) is not float or balance < 0:
            raise ValueError('wrong params!')
        self._balance = balance
        self._account_holder = holder
        BankAccount._accounts.append(self)

    def deposit(self, amount):
        if type(amount) not in [float, int] or amount < 0:
            raise ValueError('wrong params!')
        self._balance += round(amount, 2)
        
    def withdraw(self, amount):
        if type(amount) not in [float, int] or amount < 0:
            raise ValueError('wrong params!')
        if self._balance < amount:
            raise ValueError('wrong params! You cannot take more then your balance')
        self._balance -= round(amount, 2)
            
    def view(self):
        print(f'Balance: ${self._balance}') 
        
       
    @classmethod
    def get_accounts(cls):
        return cls._accounts

    @staticmethod
    def get_bank_policy_message():
        return 'Bank policy: give me your money, douche bag'


## 6. Data Science
# Numpy and Pandas Visualization

# Create a numpy array of shape (3,3) filled with integers from 1 to 9 using arange().
import numpy as np
print(np.arange(1, 10).reshape(3, 3))


import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})

# Replace non-numeric values in column “A” with the mean of numeric values. Plot a histogram of the “A” column using matplotlib.
print(df)
# Convert 'A' column to numeric, coerce errors to replace non-numeric values with NaN
df['A'] = pd.to_numeric(df['A'], errors='coerce')
print(df)
# Replace NaN values with the mean of numeric values
mean_A = df['A'].mean()
df['A'].fillna(mean_A, inplace=True)
print(df)
# Plot a histogram of the 'A' column
plt.hist(df['A'], bins=10, edgecolor='black')
plt.xlabel('Column A')
plt.ylabel('Frequency')
plt.title('Histogram of Column A')
plt.show()

# Plot “A” and “B” columns of df using matplotlib. Add x-axis, y-axis labels, and a title.
plt.plot(df['A'], label='Column A')
plt.plot(df['B'], label='Column B')

plt.xlabel('Index')
plt.ylabel('Values')
plt.title('Plot of Columns A and B')
plt.legend()
plt.show()