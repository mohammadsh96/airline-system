'use strict';
require('dotenv').config();
const io = require('socket.io-client');
const {faker} = require('@faker-js/faker');
let host = `http://localhost:${process.env.PORT}/`;
const uuid = require('uuid').v4;
const systemConnection = io.connect(host);
let flights= {
    event: "new-flight",
    time: faker.date.past(),
    Details:{
        airLine: 'Royal Jordanian Airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.name.firstName(),
        destination: faker.address.city()
    }
}


systemConnection.emit("get-all" ,flights)

setTimeout(() => {
    systemConnection.emit('new-flight',flights );
  
},1000)
    
    console.log(`Manager: new flight with ID :" ${flights.Details.flightID}" have been scheduled`);
   
    systemConnection.on('arrived', (payload)=>{

console.log("the manager notified by pilot for flight arrived");

console.log(payload);
    });
    

   

    systemConnection.on('massage', (payload)=>{

    console.log(`Manager: we're greatly thankful for the amazing flight, ${payload.Details.pilot}`);
})