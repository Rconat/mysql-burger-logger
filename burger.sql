DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);