DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INT(10),
  PRIMARY KEY (item_id)
);