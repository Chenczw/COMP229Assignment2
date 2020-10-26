let mongoose = require('mongoose');

// create a model class
let contactListModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "business_contact_list"
});

module.exports = mongoose.model('Business_Contact_List', contactListModel);