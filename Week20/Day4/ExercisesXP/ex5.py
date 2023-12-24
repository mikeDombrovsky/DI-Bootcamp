from ex4 import Family


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):

        if not self.is_18(name):
            raise Exception('Member is not over 18 years old')

        member = [member for member in self.members if member.get(
            'name') == name][0]

        print(member['power'])

    def incredible_presentation(self):
        print('*Here is our powerful family*')
        self.family_presentation()


incredibles = TheIncredibles('Levi_Tation_Berg',  [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
])

incredibles.incredible_presentation()

jack = {'name': 'Jack', 'age': 0, 'gender': 'Male', 'is_child': False,
        'power': 'cry', 'incredible_name': 'JackCry'}

incredibles.born(**jack)

incredibles.incredible_presentation()
