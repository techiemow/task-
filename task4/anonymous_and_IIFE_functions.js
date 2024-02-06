let  convertToTitleCase = function(stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
      let words = stringArray[i].split(' '); 
      for (let j = 0; j < words.length; j++) {
        // Capitalize the first letter of each word and append the rest of the word
        words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
      }
      stringArray[i] = words.join(' ');
    }
    return stringArray;
}
const stringArray = ["hello world", "full stack mern", "how are you"];
console.log(convertToTitleCase(stringArray));

  
