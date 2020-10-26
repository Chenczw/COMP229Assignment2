let mongoose = require('mongoose');

// create a model class
let contactListModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "contactList"
});

module.exports = mongoose.model('Contact_List', contactListModel);