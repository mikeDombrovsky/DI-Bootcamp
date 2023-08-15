SELECT count(*) FROM actors;

INSERT INTO actors(first_name, last_name, age)
VALUES
('Bibi', 'Netanyahu', '1949-10-21');

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES
('Bibi', null, '1949-10-21', 0);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES
('Bibi', '', '1949-10-21', 0);
-- the last one works well - void string is not a null