let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about-me', indexController.displayAboutPage);

/* GET Products page. */
router.get('/project', indexController.displayProductsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact-me', indexController.displayContactPage);

/* GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for procession the Login page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Registration page*/
//router.get('/register', indexController.displayRegisterPage);

/* POST Route for procession the Registration page*/
//router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;

