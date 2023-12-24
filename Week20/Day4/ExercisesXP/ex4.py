class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)

    def is_18(self, name):
        member = [member for member in self.members if member.get(
            'name') == name][0]

        print(member)
        return member['is_child'] and member['age'] >= 18

    def family_presentation(self):
        print(f'Family name: {self.last_name}')
        for member in self.members:
            for k, v in member.items():
                print(f'\t{k} : {v}')
            print('-' * 20)


my_family = Family('Pupkin',    [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])
mimi = {'name': 'Mimi', 'age': 0,
        'gender': 'Female', 'is_child': True}
my_family.born(**mimi)

is_mimi_18 = my_family.is_18('Mimi')
print(f'Is Mimi 18? - {is_mimi_18}')


my_family.family_presentation()