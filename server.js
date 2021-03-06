var express = require("express");


var PORT = process.env.PORT || 8080;

var app = express();

//Requiring our models for syncing
var db = require('./models/dog.js');

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

app.use(routes);

// Starts server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});




/// BASIC CRUD FUCTIONALITY
/// create read update delete
/// this functionality occurs within our routes
/// we use Sequelize model to create a dog model 
/// in each route we perform a sequelize action relative to
/// the CRUD method we are replicating