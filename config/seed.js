require('dotenv').config();
require('./database');

const Service = require('../models/Services');
// const Item = require('../models/Item');

(async function() {

    await Service.deleteMany({});
    const services = await Service.create([
        {
            id:"",
            serviceName:"Food Handler Training/Proctor",
            serviceType:"Training",
            beingOffered: true
            },
            {    
            id:"",
            serviceName:"Food Manager Training/Proctor",
            serviceType:"Training",
            beingOffered: true
            },
            {
            id:"",
            serviceName:"Notory Public",
            serviceType:"Official or Legal Witness",
            beingOffered: true
            },
            {
            id:"",
            serviceName:"DJ Services",
            serviceType:"Entertainment",
            beingOffered: true
            }            
    ]);

    console.log(services)

    process.exit();
})()