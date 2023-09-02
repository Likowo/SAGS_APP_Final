require('dotenv').config();
require('./database');

const Service = require('../models/Services');
// const Item = require('../models/Item');

(async function() {

    await Service.deleteMany({});
    const services = await Service.create([
        {
            serviceName:"Food Handler Training/Proctor",
            serviceType:"Training",
            beingOffered: true
            },
            {
            serviceName:"Food Manager Training/Proctor",
            serviceType:"Training",
            beingOffered: true
            },
            {
            serviceName:"Notory Public",
            serviceType:"Official or Legal Witness",
            beingOffered: true
            },
            {
            serviceName:"DJ Services",
            serviceType:"Entertainment",
            beingOffered: true
            }            
    ]);

    console.log(services)

    process.exit();
})()