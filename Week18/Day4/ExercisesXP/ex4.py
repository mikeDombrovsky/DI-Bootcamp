users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Use a for loop to recreate the 1st result. 
disney_users_A = {}
for i in range(0, len(users)):
    disney_users_A[users[i]] = i
    
print(disney_users_A) # {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# Use a for loop to recreate the 2nd result.
disney_users_B = {}
for i in range(0, len(users)):
    disney_users_B[i] = users[i]
    
print(disney_users_B) # {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
disney_users_C = {}
sorted_users = sorted(users)
for i in range(0, len(users)):
    disney_users_C[sorted_users[i]] = i
    
print(disney_users_B) # {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# Only recreate the 1st result for:The characters, which names contain the letter “i”.
disney_users_D = {}
i = 0
for user in users:
    if 'i' in user:
        disney_users_D[user] = i
        i += 1
print(disney_users_D) # {"Mickey": 0, "Minnie": 1, "Ariel": 2}
        
# Only recreate the 1st result for:The characters, which names start with the letter “m” or “p”.
disney_users_E = {}
i = 0
for user in users:
    if user[0] in 'MP':
        disney_users_E[user] = i
        i += 1
print(disney_users_E) # {"Mickey": 0, "Minnie": 1,  "Pluto":2}        
        