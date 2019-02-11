var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  viewProducts();
});


function viewProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    //console.log(JSON.stringify(res));
    const max_id = res.length;
    for (var idx in res) {
      if (idx == 0) {
        console.log("Id \tDescription\tDepartment Name\tPrice\tQuantity");
      }
      console.log(" " + res[idx].item_id + ' \t' + res[idx].product_name + '\t\t' + res[idx].department_name + '\t' + res[idx].price + '\t' + res[idx].stock_quantity);
    }
    menu(max_id);
  });
}


function menu(max_id) {
  inquirer
    .prompt([{
      name: "ID",
      message: "ID # of the product to buy?",
      validate: function (value) {
        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= max_id) {
          return true;
        }
        return false;
      }
    },
    {
      name: "Units",
      message: "Number of Units to buy?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }]
    )
    .then(function (answer) {
      console.log("ID entered : " + answer.ID);
      console.log("Quantity entered : " + answer.Units);
      connection.query("SELECT * FROM bamazon.products where item_id = ?", answer.ID,
        function (err, res) {
          if (err) throw err;
          console.log("Id \tDescription\tDepartment\tPrice\tQuantity");
          console.log(" " + res[0].item_id + ' \t' + res[0].product_name + '\t\t' + res[0].department_name + '\t' + res[0].price + '\t' + res[0].stock_quantity);
          // console.log(this.sql);
          if (res[0].stock_quantity < answer.Units) {
            console.log("Order cannot be fulfilled, Insufficient quantity!");
          }
          else {
            var updateQty = res[0].stock_quantity - answer.Units;
            var price = res[0].price;
            console.log('Quantity left  :: ' + updateQty);
            connection.query("UPDATE bamazon.products SET ? WHERE ?",
              [
                {
                  "stock_quantity": updateQty
                },
                {
                  "item_id": answer.ID
                }
              ],
              function (err, res) {
                if (err) {
                  console.log(this.sql);
                  throw err;
                }
                console.log("Order Fulfilled !!");
                console.log("Payment amount due :: " + (price * answer.Units).toFixed(2));
              }
            )
          }
          connection.end();
        })
    })
}






