var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usersList = [
    {firstName : "Yuri"}, 
    {firstName : "Nitsan"}, 
    {firstName : "Fares"}, 
    {firstName : "Harduf"},
    {firstName : "Shay"},
    {firstName : "Ran"}, 
    {firstName : "David"}];

  res.render('users', { title: 'Users List' ,users: usersList})
  // res.send('respond with a resource');
});

module.exports = router;
