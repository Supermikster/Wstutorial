
var name = prompt('What is your name?');

var sock =  new WebSocket("ws://localhost:3000/");

    sock.onopen = function(){
        
        sock.send(JSON.stringify({
            type: "name",
            data: name
        }));
        if(sock.onopen){ 
            log.innerHTML += "You: has been connected to the server!"+"<br>";
    } 
}
var log = document.getElementById('log');

    sock.onmessage = function(event){
        console.log(event);  
            var json = JSON.parse(event.data);
                log.innerHTML += json.name+": "+json.data+"<br>";
                        
}
    
    document.querySelector('button').onclick = function(){

        var text = document.getElementById('text').value;
            sock.send(JSON.stringify({
                type:"message",
                data: text
            }));
                if (document.getElementById('text').value == '')
                { 
                    alert("Enter your message");
                }else{ 
                    log.innerHTML +="You: "+text+"<br>";
                    document.getElementById('text').value ="";
                    }
}
    document.addEventListener("keydown", check, false);

        function check (Key){
            if (event.keyCode == "13"){
                var text = document.getElementById('text').value;
                    sock.send(JSON.stringify({
                        type:"message",
                        data: text
                    }));
                if (document.getElementById('text').value == '')
                { 
                    alert("Enter your message");
                }else{ 
                    log.innerHTML +="You: "+text+"<br>";
                    document.getElementById('text').value ="";
                     }
            }
                    
        }

               

   