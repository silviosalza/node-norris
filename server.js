//1. importo libreria http necessaria per creare un server, esiste già nativamente in Node, la importiamo e basta
const http = require("http");
//importo libreria dotenv
const dotenv = require("dotenv");
//importo funzioni da utilities
const loadChuck = require("./utilities")


 //la avvio, deve essere seguito prima di accedere elle variabili d'ambiente
 dotenv.config();
 //usiamo la 3000 di default, prevediamo la possibilità di passare la porta come variabile d'ambiente
 const port = process.env.PORT || 3000;


 //importo le funzioni da utilities
 
//2. Creo Server

const server = http.createServer((req, res) => {
    loadChuck((data) => {
      
      res.setHeader("Content-Type", "text/html");
  
      res.end(`<h2>${data.value}</h2>`);
    });
  });
  
  server.listen(port, function(){

    console.log("Server is running http://localhost:" + port);
})