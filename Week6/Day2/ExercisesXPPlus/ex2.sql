CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	last_name VARCHAR(30) NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	birth_date DATE NOT NULL
);

INSERT INTO students(last_name, first_name, birth_date)
VALUES
('Benichou', 'Marc', '11/02/1998'),
('Cohen', 'Yoan', '12/03/2010'),
('Benichou', 'Lea', '07/27/1987'),
('Dux', 'Amelia', '04/07/1996'),
('Grez', 'David', '06/14/2003'),
('Simpson', 'Omer', '10/03/1980');

INSERT INTO students(first_name, last_name, birth_date)
VALUES('Michael', 'Dombrovski', '02/16/1988');

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name 
FROM students
WHERE id = 2;

SELECT first_name, last_name 
FROM students
WHERE last_name = 'Benichou' 
AND first_name = 'Marc';

SELECT first_name, last_name 
FROM students
WHERE last_name = 'Benichou' 
OR first_name = 'Marc';

SELECT first_name, last_name 
FROM students
WHERE first_name ILIKE '%a%';

SELECT first_name, last_name 
FROM students
WHERE first_name ILIKE 'a%';

SELECT first_name, last_name 
FROM students
WHERE first_name LIKE '%a';

SELECT first_name, last_name 
FROM students
WHERE id = 1 OR id = 3;

SELECT *
FROM students
WHERE birth_date <= '1/01/2000';