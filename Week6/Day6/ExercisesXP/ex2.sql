--1 Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE film_id IN (1,2,3,4);

--2 Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--ANSWER:  address_id and store_id are foreign keys so we need to add them like actual data before we insert customer to avoid updating the customer. 

--3 We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;-- Yes it is easy, because it was just ON DELETE CASCADE 

--4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(1) FROM rental
WHERE return_date IS NULL;

--5 Find the 30 most expensive movies which are outstanding
SELECT * FROM film f
JOIN inventory inv
ON f.film_id = inv.film_id
JOIN rental r
ON r.inventory_id = inv.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

--5 with comma instad of join
SELECT * FROM film f,
inventory inv,
rental r
WHERE r.inventory_id = inv.inventory_id
AND f.film_id = inv.film_id
AND r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

--6  find which movies friend wants to rent
--6.1 The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT 
f.film_id,
f.title,
f.description
FROM film f
JOIN film_actor f_act 
ON f.film_id = f_act.film_id
JOIN actor act
ON act.actor_id = f_act.actor_id
WHERE act.first_name = 'Penelope' 
AND act.last_name = 'Monroe'
AND f.description ILIKE '%sumo wrestler%';

--6.2 A short documentary (less than 1 hour long), rated “R”
SELECT 
f.title,
f.rating,
f.length,
FROM film AS f
WHERE f.rating = 'R' AND f.length < 60;

--6.3 A film that Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005
SELECT 
c.first_name,
c.last_name,
f.film_id,
f.title,
r.return_date AS returned
FROM customer c
JOIN rental r
ON c.customer_id = r.customer_id
JOIN inventory i
ON r.inventory_id = i.inventory_id
JOIN film f
ON f.film_id = i.film_id
WHERE r.return_date IS NOT NULL
AND f.rental_rate * DATE_PART('day', r.return_date - r.rental_date) > 4
AND c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND r.return_date > '2005-07-28'
AND r.return_date < '2005-08-01'
LIMIT 5;--why 5? People rarely remember all details so we need to find several films to choose =)

--6.4  Matthew Mahan watched this film. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT 
c.first_name,
c.last_name,
f.film_id,
f.title,
f.description,
f.replacement_cost
FROM customer c
JOIN rental r
ON c.customer_id = r.customer_id
JOIN inventory i
ON r.inventory_id = i.inventory_id
JOIN film f
ON f.film_id = i.film_id 
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 5;--why 5? People rarely remember all details so we need to find several films to choose =)