
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(35),
dept_name VARCHAR(10),
price DECIMAL(7,2),
qty INT(5),
prod_sales DECIMAL(10,2)
);

ALTER TABLE products AUTO_INCREMENT=1000;

CREATE TABLE departments (
dept_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
dept_name VARCHAR(10),
ovrhd DECIMAL(7,2)
);

ALTER TABLE departments AUTO_INCREMENT=7000;




