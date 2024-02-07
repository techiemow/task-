let duplicate = function(nums){
    let ArrAfterDuplicate = []
    for(i=0;i<nums.length;i++){
      const item = nums[i];
      let IsUnique = true;
     
      
      for(j=0;j<ArrAfterDuplicate.length;j++){
         if(ArrAfterDuplicate[j]===item){
            console.log(ArrAfterDuplicate[j])
          IsUnique = false;
        break;
      }
    }
    if(IsUnique){
      ArrAfterDuplicate.push(item);
    }
  
    }
    return ArrAfterDuplicate
  
  }
  const numbers = [1,2,3,4,5,4,2,6];
  console.log(duplicate(numbers));