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

--5 TODO
SELECT * 
FROM film AS flm
INNER JOIN rental AS rntl
ON flm.film_id = invntry.film_id
INNER JOIN inventory AS invntry
ON rntl.inventory_id = invntry.inventory_id;