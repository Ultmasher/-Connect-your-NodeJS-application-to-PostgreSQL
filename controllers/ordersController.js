CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    price float,
    date timestamp,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO orders (price,date, user_id) VALUES ( 18, '2021-01-01 00:00:00', 1);
INSERT INTO orders (price,date, user_id) VALUES ( 18, '2021-01-02 04:00:00', 1);
INSERT INTO orders (price,date, user_id) VALUES ( 18, '2021-01-03 05:00:00', 2);
INSERT INTO orders (price,date, user_id) VALUES ( 18, '2021-01-04 06:00:00', 2);