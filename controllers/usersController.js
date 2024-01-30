CREATE TABLE users (

    id  SERIAL PRIMARY KEY,
 
    first_name varchar(255),
 
    last_name varchar(255),
 
    age int, 
 
   active BOOLEAN NOT NULL DEFAULT true
 
 );

 INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 18);

INSERT INTO users (first_name, last_name, age) VALUES ('Bob', 'Dylan', 30);

INSERT INTO users (first_name, last_name, age) VALUES ('Jane', 'Doe', 25);