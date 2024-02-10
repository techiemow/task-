console.log("---------------The Countries From Asian Continent/Region ----------------------");
console.log();
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    let AsianCountries = countries.filter(country => (country.region === 'Asia' || country.continents === 'Asia'));
    
    for (let i = 0; i < AsianCountries.length; i++) {
        console.log(`${i + 1}: ${AsianCountries[i].name.common}`);
    }
};
