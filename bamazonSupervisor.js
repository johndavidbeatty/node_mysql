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
    console.log("\n\n   BAMAZON SUPERVISOR MENU \n\n")
  inquirer.prompt({
    message: "What Function would you like to perform?",
    name: "action",
    type: "list",
    choices: [
        `View Product Sales by Department`,
        `Add New Department`,
        `quit`
    ]
}).then(function(answer){
    switch(answer.action){
    case `View Product Sales by Department`:
        viewDept()
        break;
    case `Add New Department`:
        addDept()
        break;
    case `quit`:    
        quit()   
    }
});
}

function viewDept(){
    connection.query("SELECT dept_id AS 'Dept. ID', dept_name AS 'Dept. Name', ovrhd AS 'Overhead Costs',  SUM(prod_sales) Product_Sales, (SUM(prod_sales) - ovrhd) Profit_Loss FROM departments LEFT JOIN products USING (dept_name) GROUP BY dept_id ORDER by dept_id", function(err, results) {
        if (err) throw err;
        console.log("\n")
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




function addDept(){

    connection.query("SELECT DISTINCT dept_name FROM departments;", function(err, results) {
        inquirer
          .prompt([{
              name: "newDept",
              type: "input",
              validate: function(value) {
                var deptArray=[];

                for (var i = 0; i < results.length; i++) {
                    deptArray.push(results[i].dept_name);
                }

                if (deptArray.includes(value)) {
                    return "\nThat department exists, please choose a different name"
                } else
                return true;
              },
              message: "Select new department name"
            },
            {
                name: "newOvrhd",
                type: "input",
                message: "Enter Department Overhead costs"
            }
        
        ]).then(function(answer){
            var newDept = answer.newDept;
            var newOvrhd = parseFloat(answer.newOvrhd);

            connection.query(
                "INSERT INTO departments SET ?,?",[
                {
                dept_name: newDept
                },
                {
                ovrhd: newOvrhd  
                }
                ],
                function(error,result) {
                    if (error) throw error;
                    console.log("\nCompleted,",result.affectedRows,"rows updated.")
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

