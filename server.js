var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// require the connection.js object

var connection = require("./connection.js");

// connect to the database

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});