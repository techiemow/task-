let MedianOfArr = function(nums1,nums2){
  let mergearr = nums1.concat(nums2).sort((a,b) => a-b)
  const len = mergearr.length;
  let median = 0;
  if(len%2===0){
    let mid1 = len / 2 - 1;
    let mid2 = len / 2;
    median = (mergearr[mid1]+mergearr[mid2])/2
  }
  else{
    let mid = Math.floor(len/2);
   median = mergearr[mid]; 
    }
return (median);
} 
let OriginalArr1 = [3,2,1,9];
let OriginalArr2 = [8,10,11,5];
console.log('median of the two sorted array of same size: ',MedianOfArr(OriginalArr1,OriginalArr2));