const fs = require("fs");
const path = require("path");


function loadChuck(){
    const url = "https://api.chucknorris.io/jokes/random";
        fetch(url).then(response => response.json()).then(data => console.log(data))
    };
loadChuck()

    module.exports = {
        loadChuck
      };