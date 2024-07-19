from flask import Flask, request, jsonify # type: ignore
import psycopg2 # type: ignore
from werkzeug.security import generate_password_hash, check_password_hash # type: ignore
from dotenv import load_dotenv # type: ignore
import os

app = Flask(__name__)

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )
    return conn

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = generate_password_hash(data['password'])

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s)', (username, email, password))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM users WHERE username = %s', (username,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user and check_password_hash(user[3], password):
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/upload', methods=['POST'])
def upload():
    data = request.get_json()
    user_id = data['user_id']
    title = data['title']
    file_path = data['file_path']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO books (user_id, title, file_path) VALUES (%s, %s, %s)', (user_id, title, file_path))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': 'Book uploaded successfully'}), 201

@app.route('/books', methods=['GET'])
def get_books():
    user_id = request.args.get('user_id')

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM books WHERE user_id = %s', (user_id,))
    books = cur.fetchall()
    cur.close()
    conn.close()

    return jsonify(books), 200

if __name__ == '__main__':
    app.run(debug=True)
