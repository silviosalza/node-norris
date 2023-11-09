//1. importo libreria http necessaria per creare un server, esiste già nativamente in Node, la importiamo e basta
const http = require("http");
//importo libreria dotenv
const dotenv = require("dotenv");
 //la avvio
 dotenv.config();
 //usiamo la 3000 di default, prevediamo la possibilità di passare la porta come variabile d'ambiente
 const port = process.env.PORT || 3000;
 
 
 function htmlResponse(res,content){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content)
}

//2. Creo Server

/**
 *
 */
const server = http.createServer(function(req, res){
    // if(req.url=== "/favicon.ico") req.writeHead((404).end())
    htmlResponse(res, `<h1>Funziona
    </h1>`)
    
    })
    
    server.listen(port, function(){
    
        console.log("Server is running http://localhost:" + port);
    })