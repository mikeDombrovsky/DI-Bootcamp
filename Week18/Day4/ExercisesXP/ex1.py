my_fav_numbers = set()
my_fav_numbers.add(2)
my_fav_numbers.add(1)
my_fav_numbers.add(3)
my_fav_numbers.pop() #unordered remove

friend_fav_numbers = {6, 4, 5}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)