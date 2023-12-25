class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount > 1:
            addition = 's'
        else:
            addition = ''
        return f'{self.amount} {self.currency}{addition}'

    def __repr__(self):
        return self.__str__()

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, self.__class__):
            if self.currency != other.currency:
                raise TypeError(
                    f'Cannot add between Currency type <{self.currency}> and <{other.currency}>')
        return self.amount + int(other)

    def __iadd__(self, other):
        self.amount += int(other)
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))  # 5 dollars
print(int(c1))  # 5
print(repr(c1))  # 5 dollars

print(c1 + 5)  # 10
print(c1 + c2)  # 15

c1 += 5  # c1.amount was 5
print(c1)  # 10 dollars

c1 += c2  # c1.amount=10 c2.amount=10
print(c1)  # 20 dollars

c1 + c3  # TypeError: Cannot add between Currency type <dollar> and <shekel>
