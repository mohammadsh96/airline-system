'use strict';
require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`;

const systemConnection = io.connect(host);

systemConnection.on('took-off', tookOff);

function tookOff(payload) {

  
        console.log(` Pilot: flight with ID : " ${payload.flightID} "  took-off `);

        // console.log(payload);
}

systemConnection.on('arrived', arrived);

function arrived(payload) {
   
        console.log(` Pilot: flight with ID : " ${payload.flightID} "  has arrived `);
        
        console.log("----------------------------------------------------------------");
        systemConnection.emit("massage" , payload)
}


















