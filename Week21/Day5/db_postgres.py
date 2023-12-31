import psycopg2

DB_HOST = 'localhost'
DB_USERNAME = 'postgres'
DB_PASS = 'mypass'
DB_NAME = 'postgres'
DB_PORT = '5432'

connection = psycopg2.connect(
    host=DB_HOST,
    user=DB_USERNAME,
    password=DB_PASS, 
    dbname=DB_NAME,
    port=DB_PORT)

cursor = connection.cursor()  # obj that runs queries like pgAdmin query tool.

query = 'SELECT * FROM customer LIMIT 20'

cursor.execute(query)

results_list = cursor.fetchall()

connection.close()

for row in results_list:
    print(row)
    
