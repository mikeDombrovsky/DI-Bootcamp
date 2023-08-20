CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

--questions
--q1 answer 3, real 0, IS should be replaced by =
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id IS NULL )


--q2 answer 3, real 2.
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN
( SELECT id FROM SecondTab WHERE id = 5 )

--q3 answer 1, real 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab )

--q4 answer 2, real 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab WHERE id IS NOT NULL )