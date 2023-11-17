// Given an array of integers, find the maximum sum of any contiguous subarray of the array.

function maxSubarraySum(arr) {
    let maxSoFar = 0;
    let maxEndingHere = 0;
  
    for (let i = 0; i < arr.length; i++) {
      maxEndingHere += arr[i];
  
      if (maxSoFar < maxEndingHere) {
        maxSoFar = maxEndingHere;
      }
  
      if (maxEndingHere < 0) {
        maxEndingHere = 0;
      }
    }
  
    return maxSoFar;
  }
  