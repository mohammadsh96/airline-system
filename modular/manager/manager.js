'use strict';
require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`;

const systemConnection = io.connect(host);


systemConnection.on('new-flight', newFlight);

function newFlight(payload) {


    console.log("->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(`Manager: new flight with ID :" ${payload.flightID}" have been scheduled`);
        // console.log(payload); 

}


systemConnection.on('massage', managerMassage);

function managerMassage(payload){
    console.log(`Manager: we're greatly thankful for the amazing flight, ${payload.pilot}`);
}
