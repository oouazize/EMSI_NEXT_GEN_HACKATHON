from dotenv import load_dotenv
import os
import psycopg2

load_dotenv()

db_connection = psycopg2.connect(
    host=os.environ.get('DATABASE_HOST'),
    database=os.environ.get('DATABASE_NAME'),
    user=os.environ.get('DATABASE_USER'),
    password=os.environ.get('DATABASE_PASSWORD'),
    port=os.environ.get('DATABASE_PORT'),
)

cur = db_connection.cursor()

# Drop Table User
cur.execute("""DROP TABLE IF EXISTS Users""")

# Create User Table
cur.execute("""CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    cpp  INT NOT NULL,
    java INT NOT NULL,
    python INT NOT NULL,
    javascript INT NOT NULL,
    html INT NOT NULL,
    css INT NOT NULL,
    php INT NOT NULL,
    sql INT NOT NULL,
    c INT NOT NULL
)""")

# Init Sample Data
sample_data = [
    ('John', 10, 60, 40, 50, 70, 10, 0, 25, 0),
    ('Jane', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Bob', 70, 30, 10, 0, 80, 60, 40, 70, 90),
    ('Alice', 20, 10, 30, 80, 80, 10, 20, 50, 0),
    ('Eve', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Carol', 10, 60, 40, 50, 70, 10, 0, 25, 0),
    ('David', 5, 0, 0, 70, 80, 78, 0, 8, 10),
    ('Mallory', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Trent', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Oscar', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Wendy', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Victor', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Ursula', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Tina', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Sam', 60, 0, 0, 70, 80, 78, 0, 50, 10),
    ('Ralph', 60, 10, 0, 70, 80, 78, 0, 50, 10),
    ('Quinn', 60, 0, 0, 70, 80, 78, 10, 50, 10),
    ('Peggy', 60, 0, 0, 0, 10, 78, 0, 50, 10),
    ('Nancy', 60, 0, 0, 70, 80, 78, 70, 50, 10),
    ('Mike', 60, 78, 0, 70, 0, 78, 0, 10, 10),
    ('Linda', 60, 10, 0, 70, 80, 78, 0, 50, 70),
    ('Kevin', 70, 0, 8, 8, 80, 78, 78, 50, 10),
    ('Irene', 78, 70, 0, 10, 80, 78, 0, 50, 10),
    ('Hank', 60, 0, 0, 70, 80, 78, 0, 50, 70),
]

cur.executemany("""INSERT INTO Users (name, cpp, java, python, javascript, html, css, sql, php, c) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""", sample_data)

db_connection.commit()