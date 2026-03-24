var express = require('express');
var router = express.Router();
var controllerDatabase = require('../controllers/database');

/* GET customers listing. */
router.get('/', function(req, res) {
  controllerDatabase.getFirst10Customers().then((result) => {
    res.render('customers', { 
        title: 'Customers',
        Customers: result 
    });
  }).catch((err) => {
    console.log("Error getting customers from MongoDB " + err);
    res.send("Error getting customers from MongoDB " + err);
  });
});

module.exports = router;
