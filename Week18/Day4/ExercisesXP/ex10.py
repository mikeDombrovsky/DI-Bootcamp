sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# 1. The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
count = sandwich_orders.count('Pastrami sandwich')
for i in range(count):
    sandwich_orders.remove('Pastrami sandwich')

print(sandwich_orders)

finished_sandwiches = []
for i in range(len(sandwich_orders)):
    finished_sandwiches.append(sandwich_orders[0])
    print(f'I made your {sandwich_orders[0]}')
    sandwich_orders.remove(sandwich_orders[0])