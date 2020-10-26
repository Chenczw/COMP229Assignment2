let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('users', { title: 'Users'});
  res.send('respond with a resource');
});

module.exports = router;
