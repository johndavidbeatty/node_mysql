const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "devPW123",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
  menu();
  });

function menu(){
    console.clear()
    console.log("\n\n   BAMAZON MANAGER MENU \n\n")
  inquirer.prompt({
    message: "What Function would you like to perform?",
    name: "action",
    type: "list",
    choices: [
        `View Products for Sale`,
        `View Low Inventory`,
        `Add to Inventory`,
        `Add New Product`,
        `quit`
    ]
}).then(function(answer){
    switch(answer.action){
    case `View Products for Sale`:
        viewProd()
        break;
    case `View Low Inventory`:
        viewLow()
        break;
    case `Add to Inventory`:
        addInv()
        break;
    case `Add New Product`:
        addProd()
        break;
    case `quit`:    
        quit()   
    }
});
}

function viewProd(){
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.table(results)
        inquirer
          .prompt([{
          type: 'confirm',
          name: 'done',
          message: 'Return to Main menu? ("Y" or Enter key)',
          default: true
          }]).then(function(answer){
            if (answer.done || answer.done ==="Y") {
                menu()
            }
            else {
                quit()
            }

          })
            
});
}

function viewLow(){
    connection.query("SELECT * FROM products WHERE qty < 5", function(err, results) {
        if (err) throw err;
        console.table(results)
        inquirer
          .prompt([{
          type: 'confirm',
          name: 'done',
          message: 'Return to Main menu? ("Y" or Enter key)',
          default: true
          }]).then(function(answer){
            if (answer.done || answer.done ==="Y") {
                menu()
            }
            else {
                quit()
            }

          })       
});
}



function addInv(){
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer
        .prompt([{
            pageSize: 20,
            name: "item",
            type: "list",
            choices: function() {
              var itemArray = [];
              for (var i = 0; i < results.length; i++) {
                  itemArray.push(results[i].item_id+" "+results[i].product_name+"    Qty:"+results[i].qty);
              }
              return itemArray;
            },
            message: "\n     Select your item\n   ID   Description        Stock\n"
          },
          {
            name: "newQty",
            type: "input",
            message: "How many units would you like to add?",
            validate: function(value){
                let request=parseInt(value);
                if (request < 1 || request > 100 ){
                  return "please enter a valid quantity between 1-100"
                }
                return true;
                 }
            }  
        ]).then(function(answers){
            var target = parseInt(answers.item.substr(0,4));
            var oldQty = parseInt(answers.item.substr(answers.item.indexOf("Qty:")+4));
            var newQty = parseInt(answers.newQty)
            newQty = oldQty+newQty
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    qty: newQty
                  },
                  {
                    item_id: target
                  }
                ],
                function(error) {
                    if (error) throw error;
                    console.log("new Quantity is ",newQty)
                    var newMenuTimer = setTimeout(menu,1500)
                })
            
        })
});
}

function addProd(){

    connection.query("SELECT DISTINCT dept_name FROM departments;", function(err, results) {
    
        inquirer
          .prompt([{
              name: "department",
              type: "list",
              choices: function() {
                var deptArray=[];
                for (var i = 0; i < results.length; i++) {
                    deptArray.push(results[i].dept_name);
                }
                return deptArray;
              },
              message: "Select which department to add new product"
            },
            {
                name: "newName",
                type: "input",
                message: "Enter Product Description"
            },
            {
                name: "newPrice",
                type: "input",
                message: "Enter Product Price"
            },
            {
                name: "newQty",
                type: "input",
                message: "Enter Initial Quantity"
            },
        
        ]).then(function(answer){
            var newName = answer.newName;
            var newDept = answer.department;
            var newPrice = parseFloat(answer.newPrice);
            var newQty = parseInt(answer.newQty);

            connection.query(
                "INSERT INTO products SET ?,?,?,?,?",[
                {
                product_name: newName
                },
                {
                dept_name: newDept   
                },
                {
                price: newPrice    
                },
                {
                qty: newQty    
                },
                {
                 prod_sales: 0  
                }
                ],
                function(error,result) {
                    if (error) throw error;
                    console.log("Completed,",result.affectedRows,"rows updated.")
                    var newMenuTimer = setTimeout(menu,1500)
                }            
            )


});
});
}


function quit() {
    connection.end(function(err) {
        if (err) throw err;
        console.log ("\n\nHave a good day!")
      });
}

