import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASS = os.getenv('DB_PASS')
DB_NAME = os.getenv('DB_NAME')
DB_PORT = os.getenv('DB_PORT')

connection = psycopg2.connect(
    host=DB_HOST,
    user=DB_USERNAME,
    password=DB_PASS, 
    dbname=DB_NAME,
    port=DB_PORT)

cursor = connection.cursor()  # obj that runs queries like pgAdmin query tool.

query = 'SELECT * FROM users LIMIT 2'

cursor.execute(query)

results_list = cursor.fetchall()

connection.close()

for row in results_list:
    print(row)
    
