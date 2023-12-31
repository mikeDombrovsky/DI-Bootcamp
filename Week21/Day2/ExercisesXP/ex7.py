from faker import Faker

users = list()
fake = Faker()

def add_fake_user():
    users.append(
        {
            'name':fake.name(),
            'adress':fake.address(), 
            'langage_code': fake.language_code()
        }
    )
    
add_fake_user()

print(users)