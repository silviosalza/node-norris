
const fetchData = () => {
    fetch("https://api.chucknorris.io/jokes/random").then(response => responde.json()).then(data => console.log(data))
};
fetchData();