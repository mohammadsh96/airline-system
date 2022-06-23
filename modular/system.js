'use strict';
const events = require('./events');
const {faker} = require('@faker-js/faker');



require('./pilot/pilot');
require('./manager/manager');

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
setInterval(() => { 
// setTimeout(() => {    
    events.emit('new-flight', flight);

// }, 10000)
}, 10000)
module.exports ={flight, allevent ,time};


