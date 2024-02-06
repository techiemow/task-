let convertToTitleCase = (strings) => {
    for (let i = 0; i < strings.length; i++) {
      let words = strings[i].split(' '); 
      for (let j = 0; j < words.length; j++) {
        // Capitalize the first letter of each word and append the rest of the word
        words[j] = words[j].charAt(0).toUpperCase()+words[j].slice(1);
      }
      strings[i] = words.join(' ');
    }
   console.log(strings);
}
const stringArray = ["hello world", "full stack mern", "how are you"];
convertToTitleCase(stringArray);

