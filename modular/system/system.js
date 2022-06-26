'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3030;
const {faker} = require('@faker-js/faker');
const ioServer = require('socket.io')(PORT);
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  } 
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let  time = h + ":" + m + ":" + s;
let allevent = ["took-off", "new-flight", "arrived" , "massage"]

let flight = {
    event: allevent[1],
    time: time,
    Details: "any" ,
    airLine: 'Royal Jordanian Airlines',
    flightID: faker.datatype.uuid(),
    pilot: faker.name.firstName(),
    destination: faker.address.city()
}

ioServer.on('connection', (socket) => {
    console.log('connected ', socket.id);
      
    // setInterval(() => { 
        setTimeout(() => {    
            ioServer.emit('new-flight', flight);
        console.log({
            event: allevent[1],
            time: time,
            Details: "any" ,
            airLine: 'Royal Jordanian Airlines',
            flightID: faker.datatype.uuid(),
            pilot: faker.name.firstName(),
            destination: faker.address.city()
        });
            setTimeout(() => {
                console.log({
                    event: allevent[0],
                    time: time,
                    Details: "any" ,
                    airLine: 'Royal Jordanian Airlines',
                    flightID: faker.datatype.uuid(),
                    pilot: faker.name.firstName(),
                    destination: faker.address.city()
                });
                ioServer.emit('took-off', flight);
               
               }, 4000)
    
        
        setTimeout(() => { 
            console.log({
                event: allevent[2],
                time: time,
                Details: "any" ,
                airLine: 'Royal Jordanian Airlines',
                flightID: faker.datatype.uuid(),
                pilot: faker.name.firstName(),
                destination: faker.address.city()
            });
            ioServer.emit('arrived', flight);
        }, 7000) 
        setTimeout(() => { 
            
            ioServer.emit("massage", flight); 
        }, 8000)
        // }, 10000)
      
        }, 10000)

   });
    
    //namespace
    
    const pilotAirLine = ioServer.of('/airline');
    pilotAirLine.on('connection', (socket) => {
    console.log('connected to AirLine', socket.id);
    setTimeout(() => {
                
        pilotAirLine.emit('took-off', flight);
       
       }, 4000)

       setTimeout(() => { 
            
        pilotAirLine.emit('arrived', flight);
    }, 7000)
        
    
});


