import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASS = os.getenv('DB_PASS')
DB_NAME = os.getenv('DB_NAME')
DB_PORT = os.getenv('DB_PORT')

db_params = {
    "host": DB_HOST,
    "database": DB_NAME,
    "user": DB_USERNAME,
    "password": DB_PASS,
    "port": DB_PORT
}

def set_up():

    query = '''CREATE TABLE IF NOT EXISTS menu_items(
        item_id SERIAL PRIMARY KEY,
        item_name VARCHAR(30) NOT NULL,
        item_price SMALLINT DEFAULT 0
    )'''

    results_list = execute_query(query, is_select=False)



def execute_query(query, is_select=True):
    try:
        connection = psycopg2.connect(
            host=DB_HOST,
            user=DB_USERNAME,
            password=DB_PASS,
            dbname=DB_NAME,
            port=DB_PORT)

        # obj that runs queries like pgAdmin query tool.
        cursor = connection.cursor()

        cursor.execute(query)
        if(not is_select):
            connection.commit()
            
        return cursor.fetchall()
        

    except (Exception, psycopg2.Error) as e:
        print(e)
        return None
    finally:
        if connection:
            cursor.close()
            connection.close()


def get_connection(params=db_params):
    try:
        return psycopg2.connect(
            **params)
    except (Exception, psycopg2.Error) as e:
        print(e)
