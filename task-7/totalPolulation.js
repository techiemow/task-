console.log("-----------Print The Total Population Of Countries Using Reduce Function----------");
console.log()
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    let TotalPopulation = countries.reduce((prevcountry,CurrentCountry) => prevcountry + CurrentCountry.population ,0 );
    console.log('Total Population Of The Countries :',TotalPopulation)
};