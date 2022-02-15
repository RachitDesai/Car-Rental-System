const fs = require("fs");
const { callbackify } = require("util");

// Read users.json file
fs.readFile("customer.json", function (err, data) {

    // Check for errors
    if (err) throw err ;
    
         // Converting to JSON
        const cust = JSON.parse(data);
        console.log(cust); // Print users

});


var newCustDetails = {
    "customer": {
           "id": "5011",
           "name": "Rachit",
           "age": "51",
           "email": "rachit@gmail.com",
           "mobile": "9898026206"
    }
}

fs.writeFile("customer1.json",JSON.stringify(newCustDetails,null,2),err=>{
    if(err) throw err;
    console.log("File Successfully Written");
});





//routing feature
var http = require('http');
  
// Create a server object
http.createServer(function (req, res) {
      
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'}); 
      
    var url = req.url;
      
    if(url ==='/about') {
        res.write(' Welcome to the about us page. This is Rohit here,the Founder and CEO of royalaviation'); 
        res.end(); 
    }
    else if(url ==='/contact') {
        res.write('Thank you for showing interest in us. For contacting us drop a mail at rohitp2203@gmail.com, or leave a text at 6355380271'); 
        res.end(); 
    }
    else {
        res.write('Hello World!. Welcome to Royalaviation. A Flight Booking Web Application. We offer discounts for our soldiers and their families'); 
        res.end(); 
    }
}).listen(3000, function() {
      
    // The server object listens on port 3000
    console.log("Server started at port 3000");
});

