const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    serviceName:{ type: String, required: true}, 
    serviceType:{ type: String, required: true},
    beingOffered: Boolean
})


module.exports = mongoose.model("Services", servicesSchema)