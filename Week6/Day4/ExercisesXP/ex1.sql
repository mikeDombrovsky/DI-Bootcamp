SELECT * FROM items
ORDER BY(price);

SELECT title FROM items
ORDER BY(price);

SELECT * FROM items
WHERE price >= 80
ORDER BY(price) DESC;

SELECT 
fname as name, 
lname as lastname 
FROM customers
ORDER BY(name) ASC
LIMIT(3);

SELECT 
lname as lastname 
FROM customers
ORDER BY(lastname) DESC;