import sqlite3

con = sqlite3.connect('database/database.sqlite', check_same_thread=False)
cur = con.cursor()

# Clear Database
cur.execute('''
DROP TABLE IF EXISTS User;
''')

# Create User Table
cur.execute('''
CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    cpp      INTEGER NOT NULL,
    java     INTEGER NOT NULL,
    python   INTEGER NOT NULL,
    javascript INTEGER NOT NULL,
    html     INTEGER NOT NULL,
    css      INTEGER NOT NULL
);
''')

# Sample Data
sample_data = [
    ("Mustapha", 90, 10, 50, 80, 5, 0),
    ("Mustapha2", 90, 5, 50, 80, 5, 0),
    ("Mohamed", 10, 90, 50, 80, 5, 10),
    ("Ahmed", 20, 50, 90, 80, 5, 20),
    ("Ali", 50, 10, 50, 90, 5, 30),
    ("Omar", 10, 10, 50, 80, 90, 40),
    ("Khaled", 50, 10, 50, 80, 5, 50),
    ("Hassan", 10, 20, 50, 80, 5, 60),
    ("Hussein", 20, 10, 50, 80, 5, 70),
    ("Abdullah", 10, 50, 50, 80, 5, 80),
    ("Abdulrahman", 10, 10, 50, 80, 5, 90),
]

insert_query = "INSERT INTO User (username, cpp, java, python, javascript, html, css) VALUES (?, ?, ?, ?, ?, ?, ?)"
cur.executemany(insert_query, sample_data)

con.commit()