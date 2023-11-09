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
arrayQuotes = []

const server = http.createServer((req, res) => {
    loadChuck((data) => {

      arrayQuotes.push(data.value)
      console.log(arrayQuotes);
      html = [];
      html.push("<ul>")
      for(let i = 0; i < arrayQuotes.length; i++) {
        html.push(`<li>${arrayQuotes[i]}</li>`);
      }
      html.push("</ul>")


      res.setHeader("Content-Type", "text/html");
      res.end(html.join(""));
  
    });
    
  });
  
  server.listen(port, function(){

    console.log("Server is running http://localhost:" + port);
})