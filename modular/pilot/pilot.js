'use strict';
const events = require('../events');
require('../manager/manager');
const flight = require('../system')


let count =1;

console.log(" wait 10 seconds to see ... ⏳🙂")

setInterval(() =>{
    if(count<10){
    if(count == 1) {
    console.log(count , "🙂");
    
}
if(count == 2) {
    console.log(count , "😀");
    
}
if(count == 3) {
    console.log(count , "🤨");
    
}
if(count == 4) {
    console.log(count , "😛");
   
}
if(count == 5) {
    console.log(count , "😌");
    
}
if(count == 6) {
    console.log(count , "🥱");
    
}
if(count == 7) {
    console.log(count , "😴");
    
}
if(count == 8) {
    console.log(count , "😫");
    
}
if(count == 9) {
    console.log(count , "😍");
    
}


}
count++;
}  , 999);

events.on('took-off', tookOff);
function tookOff(payload) {
   
        console.log(` Pilot: flight with ID : " ${payload.flightID} "  took-off `);

        console.log(payload);
}



events.on('arrived', arrived);
function arrived(payload) {
   
        console.log(` Pilot: flight with ID : " ${payload.flightID} "  has arrived `);
        console.log(payload);
        console.log("----------------------------------------------------------------");
        events.emit("massage" , flight)
}








module.exports ={tookOff,arrived}









