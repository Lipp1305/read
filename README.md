# read
 personal archive of free online pdfs

# HOW TO

To activate postgres run:

brew services start postgresql

To Enter DB:

psql postgres

List DBS:
\l
Connect to db:
\c dbname 
List tables:
\dt

users: (
    id,
    username,
    email,
    pwdhash
)
books: (
    id,
    user_id,
    title
    file_path,
    uploaded_at
)