// Set up connection to the mysql database
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// then make the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// then export this connection for the ORM to use.
module.exports = connection;