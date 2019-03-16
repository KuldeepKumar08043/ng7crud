const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Business = new mongoose.Schema({
    person_name: {
        type: String
    },
    business_name: {
        type: String
    },
    business_gst_number:{
        type: Number
    }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);