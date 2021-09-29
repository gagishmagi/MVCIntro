var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("in GET!!!")

  res.render('index', { title: 'Express'  });
});

router.post('/', function(req,res,next){
  console.log("in POST!!!")
  res.send("Success!!!");
});


module.exports = router;
