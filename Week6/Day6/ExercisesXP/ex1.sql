--1
SELECT name 
FROM language;
--2
SELECT 
film.title, 
film.description,
language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;
--3
SELECT 
film.title, 
film.description,
language.name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id;
--4
CREATE TABLE new_film (
	id SERIAL,
	name VARCHAR(50) NOT NULL
);

INSERT INTO new_film (name)
VALUES
('Lord Of The Rings'),
('The Godfather'),
('Star Wars'),
('The Truman Show'),
('Spirited Away'),
('Eternal Sunshine of the Spotless Mind');
--5
CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER NOT NULL 
		REFERENCES new_film(id) 
		ON DELETE CASCADE,
	language_id INTEGER 
		REFERENCES language(language_id),
	title VARCHAR(50),
	score SMALLINT,
	review_text TEXT,
	last_update TIMESTAMP
);
--6
