let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactListController = require('../controllers/contactList');//

//helper function for guard purpose
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the contact List page - READ Operation */
router.get('/', contactListController.displayContactList);

/* GET Route for displaying the Add page - READ Operation */
router.get('/add', requireAuth, contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactListController.processAddPage);

/* GET Route for displaying the Edit page - READ Operation */
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactListController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactListController.performDelete);

module.exports = router;