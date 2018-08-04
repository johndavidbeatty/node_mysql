const mysql = require("mysql");
const inquirer = require("inquirer");



var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "devPW123",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    
    // front()
    front()
  });



// We start with the "front page" of the customer interface.
// It starts with providing a possible list of departments for customer to choose from

function front() {
    // get current departments from product tables
    connection.query("SELECT DISTINCT dept_name FROM products;", function(err, results) {
    console.clear();
    inquirer
      .prompt([{
        
          name: "department",
          type: "list",
          choices: function() {
            var deptArray = [];
            for (var i = 0; i < results.length; i++) {
                deptArray.push(results[i].dept_name);
            }
            return deptArray;
          },
          message: "\n     BAMAZON main screen   \n \n What Department Would You Like to Buy From?"
        }]).then(function(answer){
          items(answer.department);
        });
}) 
}

// List items from the selected department


function items(dept) {
  // get current departments from product tables
  connection.query("SELECT * FROM products WHERE ?",[
    {
      dept_name: dept
    }
  ], function(err, results) {
  
  inquirer
    .prompt([{
      
        name: "item",
        type: "list",
        choices: function() {
          var itemArray = [];
          for (var i = 0; i < results.length; i++) {
              itemArray.push(results[i].product_name);
          }
          return itemArray;
        },
        message: "\n     Select your item"
      }
    ]).then(function(answer){
        qtyCheck(answer.item);
      });
}) 
}
// Check that the the entry is correct and the quantity desired can be met by stock

function qtyCheck(item) {
    connection.query("SELECT * FROM products WHERE ?",[
        {
          product_name: item
        }
      ], function(err, results) {
          var newStock=0;
          var orderCost=0;
        inquirer
        .prompt([{ 
            name: "qty",
            type: "input",
            message: "\nhow many would you like?",
            validate: function(value){
                let request=parseInt(value);
                if (request < 1 || request > 100 ){
                  return "please enter a valid quantity between 1-100"
                }
                if (request > results[0].qty) {
                    return "Sorry, please select less than our stock of "+results[0].qty+" units."
                }
                else {
                    newStock = results[0].qty - request
                    orderCost = request * results[0].price
                    newProdSales= orderCost + results[0].prod_sales
                    return true;
                }
            }
        }]).then(function(answer){
            updateDB(answer.qty,item,newStock,orderCost,newProdSales);
          });

});
}

// Update the DB after a designated good order is ready to go
// and then back to front page


function updateDB(qty,item,newStock,orderCost,newProdSales){

    connection.query(
        "UPDATE products SET ?,? WHERE ?",
        [
          {
            qty: newStock
          },
          {
            prod_sales: newProdSales
          },
          {
            product_name: item
          }
        ],
        function(error) {
          if (error) throw error;
          console.log("Order for",qty,"of",item,"placed successfully for $",orderCost);
          inquirer
          .prompt([{
          type: 'confirm',
          name: 'orderAgain',
          message: 'Want to enter another order (just hit enter for YES)?',
          default: true
          }]).then(function(answer){
            if (answer.orderAgain){
                console.log("Great! Back to the front...")
                var newOrderTimer = setTimeout(front,1000)
            }
            else {
                connection.end(function(err) {
                    if (err) throw err;
                    console.log ("\nThank you for your order\n\nHave a good day!")
                  });
            }
          });
        }
      );
}



