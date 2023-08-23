--1 Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book (
     book_id SERIAL PRIMARY KEY,
     title VARCHAR(50)NOT NULL, 
     author VARCHAR(50) NOT NULL
)

--2 Insert books :'Alice In Wonderland, Lewis Carroll','Harry Potter, J.K Rowling','To kill a mockingbird, Harper Lee'
INSERT INTO book(title, author)
VALUES
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

--3 Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
--Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age SMALLINT CHECK(age < 16)
);

--4 Insert students:John, 12; Lera, 11; Patrick, 10; Bob, 14
INSERT INTO student(name, age)
VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

--5 Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : 
-- A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE library (
    book_fk_id INTEGER ON DELETE CASCADE ON UPDATE CASCADE REFERENCES book(book_id),
    student_id INTEGER ON DELETE CASCADE ON UPDATE CASCADE REFERENCES student(student_id),
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_id)
);

--6 Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES
(
(SELECT b.book_id FROM book b WHERE b.title = 'Alice In Wonderland'), 
(SELECT st.student_id FROM student st WHERE st.name = 'John'),
'2022-02-15'
),
(
(SELECT b.book_id FROM book b WHERE b.title = 'To kill a mockingbird'), 
(SELECT st.student_id FROM student st WHERE st.name = 'Bob'),
'2021-03-03'
),
(
(SELECT b.book_id FROM book b WHERE b.title = 'Alice In Wonderland'), 
(SELECT st.student_id FROM student st WHERE st.name = 'Lera'),
'2021-05-23'
),
(
(SELECT b.book_id FROM book b WHERE b.title = 'Harry Potter'), 
(SELECT st.student_id FROM student st WHERE st.name = 'Bob'),
'2021-08-12'
);

--7.1 Select all the columns from the junction table
SELECT * FROM library;

--7.2 Select the name of the student and the title of the borrowed books
SELECT st.name, b.title
FROM student st
JOIN library lib ON st.student_id = lib.student_id
JOIN book b ON b.book_id = lib.book_fk_id;

--7.3 Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(st.age)
FROM student st
JOIN library lib ON st.student_id = lib.student_id
JOIN book b ON b.book_id = lib.book_fk_id
WHERE b.title = 'Alice In Wonderland';

--7.4 Delete a student from the Student table, what happened in the junction table ? all connected rows removed
DELETE FROM student st
WHERE st.name = 'John';