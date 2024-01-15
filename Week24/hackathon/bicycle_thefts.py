import matplotlib.pyplot as plt
import json
import pandas as pd

# Sorting by values in column 'A'
# df_sort_values = df.sort_values(by='A')

# Using map() function to replace values in a Series
# df['A'] = df['A'].map({1: 'one', 2: 'two'})

def main():
    
           
    # reading db from json file 
    with open("./cases.json", "r") as outfile:
        arr = json.load(outfile)
        
    # print(type(arr))
    df = pd.json_normalize(arr)
    print(df.head(5))
    df_sort_values = df.sort_values(by='OCC_DATE')
    
    count_by_primary_offence = df_sort_values.groupby('PRIMARY_OFFENCE').size()
    print(count_by_primary_offence)
    # df_sort_values.plot()
    print(type(count_by_primary_offence))
    
    count_by_primary_offence.plot()
    
    plt.title('My Plot')  # Set the plot title
    plt.xlabel('PPRIMARY_OFFENCE')  # Set the label for the x-axis
    plt.ylabel('Values')  # Set the label for the y-axis
    plt.grid(True)  # Display a grid
    # plt.legend(loc='upper left')  # Place the legend in the upper left corner
    
    
    plt.show()
    
main()