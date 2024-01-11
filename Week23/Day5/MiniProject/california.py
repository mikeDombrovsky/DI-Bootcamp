from sklearn.datasets import fetch_california_housing
from sklearn.preprocessing import MinMaxScaler
import numpy as np 
import pandas as pd

data = fetch_california_housing()
df = pd.DataFrame(data['data'], columns=data['feature_names'])
df['Target'] = data['target']

# for name in data['feature_names']:
#     print(name)

# print( '-' * 20, 'Description:', '-' * 20)
# print(df.describe())

print( '-' * 20, 'Head', '-' * 20)
print(df.head())

# print( '-' * 20, 'Info:', '-' * 20)
# print(df.info())

# print( '-' * 20, 'is null', '-' * 20)
# print(df.isnull().sum())
# print('-' * 20)

scaler = MinMaxScaler()

# print(scaler.fit(df))
# print(scaler.data_max_)
# print(scaler.transform(df))

# Normalize - to make more understandable for computer - change to number between 0 and 1
scaled = scaler.fit_transform(data['data'])
df_normalized = pd.DataFrame(scaled, columns=data['feature_names'])
print('-' * 20, 'Normalized', '-' * 20)
print(df_normalized)


