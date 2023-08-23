--1 Create 2 tables : Customer and Customer profile. They have a One to One relationship
--The Customer table should have the columns : id, first_name, last_name NOT NULL
CREATE TABLE customer (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

--The Customer profile table should have the columns : 
-- id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    is_logged_in BOOLEAN DEFAULT false,
    customer_id INTEGER REFERENCES customer(id)
);

--2 insert customers
INSERT INTO customer(first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

--3 Insert customer profiles, use subqueries
INSERT INTO customer_profile (is_logged_in, customer_id)
VALUES
(true, (SELECT id FROM customer WHERE first_name = 'John')),
(false, (SELECT id FROM customer WHERE first_name = 'Jerome'));

--4 Use the relevant types of Joins to display:
--The first_name of the LoggedIn customers
SELECT cust.first_name
FROM customer cust 
JOIN customer_profile cust_prof ON cust.id = cust_prof.id
WHERE cust_prof.is_logged_in;

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT cust.first_name, cust_prof.is_logged_in
FROM customer cust 
LEFT JOIN customer_profile cust_prof ON cust.id = cust_prof.id;

--The number of customers that are not LoggedIn
SELECT COUNT(1)
FROM customer cust 
LEFT JOIN customer_profile cust_prof ON cust.id = cust_prof.id
WHERE NOT cust_prof.is_logged_in 
OR cust_prof.is_logged_in IS NULL;--I supose that customer without profile is not logged in as well
