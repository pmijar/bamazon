# bamazon
The app will take in orders from customers and deplete stock from the store's inventory. 


## Pre-requisistes on set up ##

Pre-requisite:
Have git installed in your machine and have a github profile created to pull this code. 
Windows user need to install Gitbash for mac users use mac Terminal application.

1. Go to the location in your hard drive where you want to store this game using Gitbash or Terminal
2. Clone the git location "https://github.com/pmijar/bamazon.git"
3. You should now have a folder "bamazon" created.
4. You need to set up mysql localhost server
5. You should be able to use the Train schedular application.
6. First you need to create a MySQL Database called `bamazon` in your localhost:port or a hosted server:port.
    SQL script to create the `bamazon` database
    * Script: _CREATE DATABASE bamazon_;
7. Then create a Table inside of that database called `products` with following columns:
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)
   * Script:     _create table products(_
                _item_id INT NOT NULL,_
                _product_name varchar(100),_
                _department_name varchar(100),_
                _price decimal(10,2),_
                _stock_quantity integer(10),_
                _PRIMARY KEY (item_id)_
                );_
8. Populate this database with few different products. (i.e. Insert "mock" data rows into this database and table).


## App Overview ##

1. On running the dowloaded `bamazonCustomer.js` will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

2. The app should then prompts users with two messages.

   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

3. Once the customer has placed the order, the application checks to see if the store has enough of the product to meet the customer's request.

   * If not, the app displays a message `Order cannot be fulfilled, Insufficient quantity!`, and prevents the order from going through.

4. However, if your store _does_ have enough of the product, system fulfills the customer's order.
   * By updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, the customer is displayed with the total cost of their purchase.


## Contact Me ##  

If you have any suggestions please [email me](mailto:Prashanth.Mijar@gmail.com)