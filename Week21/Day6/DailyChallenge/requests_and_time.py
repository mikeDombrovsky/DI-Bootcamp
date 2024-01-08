import time
import requests

def get_seconds_of_loading(website):
    t1 = time.time()
    resp = requests.get(website)
    t2 = time.time()
    return f'{website} loads {round(t2 - t1, 4)} seconds.'


print(get_seconds_of_loading('https://google.com'))
print(get_seconds_of_loading('https://www.ynet.co.il'))
print(get_seconds_of_loading('https://www.imdb.com/'))
print(get_seconds_of_loading('https://www.imdb.com/'))
print(get_seconds_of_loading('https://www.w3schools.com/'))
