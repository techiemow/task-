console.log("-------------------Print the Countires that uses US dollars as Currency------------------");
console.log();
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    let usDollarCountries = countries.filter(country => country.currencies && country.currencies.USD);
  for(let i=0;i<usDollarCountries.length;i++){
    console.log(`${i+1} :${usDollarCountries[i].name.common}`);
  }
};
