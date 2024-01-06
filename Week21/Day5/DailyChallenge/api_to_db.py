import requests as reqs
import random as rnd
import db_postgres as db

# get all codes as 2 letters format [{'cca2':'IL'},{'cca2':'RU'}...]
resp = reqs.get('https://restcountries.com/v3.1/all?fields=cca2')
all_codes_dicts = resp.json()

# change to rigth format, need to map it to list of strings ['IL', 'RU']
all_codes = list(map(lambda code_dict: code_dict['cca2'], all_codes_dicts))

# randomly take 10 codes
ten_codes = ','.join(rnd.choices(all_codes, k=10))

# get response from api filtered by codes and fields
resp = reqs.get(
    f'https://restcountries.com/v3.1/alpha?codes={ten_codes}&fields=name,capital,flag,subregion,population')
countries = resp.json()

# example of country dict
print(countries[0])

# create table if not exists
db.set_up()

# build sql request, values part
values = ''
for country in countries:
    name = country['name']['official']
    name = name.replace("'", "''")
    print(name)
    capital_arr = country['capital']
    if len(capital_arr) == 0:
        capital = 'No capital'
    else:
        capital = list(map(lambda item: item.replace("'", "''"), capital_arr))
        capital = ','.join(capital)
        print(capital)
        
        
    values += f'''(
        '{name}',
        '{capital}',
        '{country['flag']}',
        '{country['subregion']}',
        {country['population']}
    ),'''
    
# remove last comma
values = values[:-1] 

query = f'''
INSERT INTO countries(
    name, 
    capital, 
    flag, 
    subregion, 
    population
)
VALUES
{values}
RETURNING *
'''

added_coutries= db.execute_query(query, is_select=False)

for country in added_coutries:
    print(country)

