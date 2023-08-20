--1
SELECT * FROM customer;
--2
SELECT 
first_name || ' ' || last_name 
AS full_name 
FROM customer;
--3
SELECT DISTINCT create_date FROM customer;
--4
SELECT * FROM customer
ORDER BY(first_name) DESC;
--5
SELECT 
film_id, 
title, 
description, 
release_year, 
rental_rate
FROM film
ORDER BY(rental_rate) DESC;
--6
SELECT
addr.address,
addr.phone,
addr.district
FROM address AS addr
WHERE addr.district = 'Texas';
--7
SELECT *
FROM film
WHERE film_id in(15, 150);
--8
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Gone with the Wind';
--9
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Go%';
--10
SELECT * FROM film
ORDER BY(rental_rate)
LIMIT(10);
--11
SELECT * FROM film
ORDER BY(rental_rate)
LIMIT 10 OFFSET 10;
--12
SELECT customer.first_name,
customer.last_name,
payment.payment_id,
payment.amount,
payment.payment_date
FROM customer
INNER JOIN payment
ON payment.customer_id = customer.customer_id
ORDER BY(payment.payment_id);
--13
SELECT * FROM film
LEFT JOIN inventory
ON film.film_id != null;
--14
SELECT 
country.country,
city.city
FROM country
INNER JOIN city
ON city.country_id = country.country_id
ORDER BY country.country;