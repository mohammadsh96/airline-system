'use strict';
require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`;

const systemConnection = io.connect(host);




systemConnection.on('flight',(payload)=>{
        console.log("                      ");
 console.log(`  'Pilot:Sorry i didn't catch this flight ID 332u443673r32yuf463'.`);

});
systemConnection.on("new-flight", (payload) =>{
        console.log("                      ");
            
        console.log("the pilot got  notified by manager for the new-flight");
        
       systemConnection.emit("get-all")
                })   
        //      systemConnection.emit("took-off" );
        // systemConnection.emit("arrived" ); 
        
        
        systemConnection.on('took-off',(payload)=>{
                console.log("                      ");
                       console.log(` Pilot: flight with ID : " ${payload.Details.flightID} "  took-off `);
            
                   });
            
                   systemConnection.on('arrived', (payload) => {
                        console.log("                      ");
                       console.log(` Pilot: flight with ID : " ${payload.Details.flightID} "  has arrived `);
                       
                       
                       });  
             
          












        








