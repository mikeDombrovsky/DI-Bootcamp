items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

def convert(price):
    res = ''
    
    for letter in price:
        if letter in '$,':
            continue
        res += letter
    return int(res)

# my_cart = []

# for item, price in items_purchase.items():
#     if convert(price) <= convert(wallet):
#         my_cart.append(item)
        
my_cart = [item for item, price in items_purchase.items() if convert(price) <= convert(wallet)]        

if len(my_cart) == 0:
    print('Nothing')
    
my_cart.sort()    
print(my_cart) # ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
    
    
    
