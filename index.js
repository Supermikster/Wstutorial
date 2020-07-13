var server = require('ws').Server;
var s = new server({ port:3000 });
var name;

s.on('connection', function(ws){

    /*s.on('open', function(event){
        s.clients.forEach(function e(client){
            if(client != ws)
                client.send(JSON.stringify({
                    name: ws.personName,
                    data: message.data
                 }));
        });


    });*/

    
    ws.on('message', function(message){

        message = JSON.parse(message);

        

        if(message.type == "name"){
            
            ws.personName = message.data;
            console.log(message.data +": has been connected to the server!");
   
            return;
        }
    
        console.log(ws.personName+": " +message.data);

        s.clients.forEach(function e(client){
            if(client != ws)
                client.send(JSON.stringify({
                    name: ws.personName,
                    data: message.data
                 }));
        });

    });

    ws.on('close', function(){
        console.log("Uops i lost a client");

    });

});