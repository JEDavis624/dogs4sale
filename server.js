var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Requiring our models for syncing
var db = require('./models');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/dogsController.js");

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function(){
  console.log(`App listening on Port ${PORT}!`);
});