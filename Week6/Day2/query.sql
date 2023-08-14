CREATE DATABASE public;

CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	price INTEGER NOT NULL
);

CREATE TABLE customers(
	cust_id SERIAL PRIMARY KEY,
	fname VARCHAR(30) NOT NULL,
	lname VARCHAR(30) NOT NULL
);

INSERT INTO items(title, price)
VALUES
('Small desk', 100),
('Large desk', 300),
('Fan', 80);

INSERT INTO customers(fname, lname)
VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM items;

SELECT * FROM customers;

SELECT * FROM items
WHERE price > 80;

SELECT * FROM items
WHERE price <= 300;

SELECT * FROM customers
WHERE lname = 'Smith';

SELECT * FROM customers
WHERE lname = 'Jones';

SELECT * FROM customers
WHERE fname != 'Scott';