console.log((function(words){
   let palindromes = [];
 for (let word of words){
    let reverse = '';
    for ( let index =word.length-1; index>=0; index--){
        reverse += word[index];
    }

    if (word === reverse){
        palindromes.push(word);
    }
  }
   return palindromes;

})(['malayalam','level','hi','radar']));
