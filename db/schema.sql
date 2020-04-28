DROP DATABASE IF EXISTS dogs4sale_db;
CREATE database dogs4sale_db;

USE dogs4sale_db;


CREATE TABLE dogs (
    id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	breed VARCHAR(200) NOT NULL,
	client_id int NOT NULL,
	adopted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
