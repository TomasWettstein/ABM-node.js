CREATE SCHEMA `crud-node.js`;

USE `crud-node.js`;
CREATE TABLE compradores(
    id INT(6) UNSIGNED auto_increment PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(50) NOT NULL
);

SHOW TABLES;

DESCRIBE compradores