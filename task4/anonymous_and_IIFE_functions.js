let ArrAfterDuplicate = ((array) =>{
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
          uniqueArray.push(array[i]);
      }
  }

  return uniqueArray;
})([1, 2, 3, 3, 4,7,9,10 ,5, 5]);

console.log(ArrAfterDuplicate)