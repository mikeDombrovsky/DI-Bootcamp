SELECT * FROM customer;

SELECT 
first_name || ' ' || last_name 
AS full_name 
FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY(first_name) DESC;

SELECT 
film_id, 
title, 
description, 
release_year, 
rental_rate
FROM film
ORDER BY(rental_rate) DESC;

SELECT
addr.address,
addr.phone,
addr.district
FROM customer, address AS addr
WHERE addr.district = 'Texas';

SELECT *
FROM film
WHERE film_id in(15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Gone with the Wind';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Go%';

