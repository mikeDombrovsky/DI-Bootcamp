--1 Get a list of all the languages, from the language table.
SELECT name 
FROM language;
--2 Get a list of all films joined with their languages with film title, description, and language name.
SELECT 
film.title, 
film.description,
language.name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;
--3 Get all languages, even if there are no films in those languages
SELECT 
film.title, 
film.description,
language.name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id;
--4 Create a new table called new_film with columns : id, name. Add some new films
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
--5 reate a new table called customer_review DELETE constraint: if a film is deleted, its review should be automatically deleted.
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
--6 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(
	film_id,
	language_id,
	title,
	score,
	review_text,
	last_update
)
VALUES
(
	1, 
	1,
	'My thoughts of Lord Of The Rings',
	9,
	'Some text about a movie',
	CURRENT_TIMESTAMP
),
(
	2, 
	1,
	'My thoughts of The Godfuather',
	8,
	'Some text about a movie',
	CURRENT_TIMESTAMP
);
--7 Delete a film that has a review from the new_film table. => associated review was deleted too. 
DELETE FROM new_film 
WHERE id = 1;