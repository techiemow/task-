console.log("-------------The countries with a population of less than 2 lakhs--------------------------------------")
console.log();
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    let Population = countries.filter(EachCountry => EachCountry.population<=200000);
    
    for (let i = 0; i < Population.length; i++) {
        console.log(`${i + 1}: ${Population[i].name.common}`);
    }
};
