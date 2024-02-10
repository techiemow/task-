console.log("-----------Print the details (Name, Capital, Flag) of all Countries using forEach function-----------")
console.log();
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
let countries = JSON.parse(xhr.responseText);
countries.forEach((country,index) => {
console.log();
console.log(`${index+1}: Country :"${country.name.common}"       
        Capital :"${country.capital}        
        Flag :"${country.flag}"`);
    });
};
