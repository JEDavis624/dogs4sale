var express = require('express');
var router = express.Router();
var Dog = require("../models/dog.js")



router.get("/", function (req, res) {
  Dog.all(function(data) {
    var hbsObject = {
      dog: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/api/dogs', function (req, res) {
  console.log(req)
  Dog.create()
})

router.delete("/api/dogs/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  Dog.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;