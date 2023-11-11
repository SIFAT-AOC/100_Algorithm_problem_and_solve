/*
Problem: Given an array of integers, find the longest contiguous subarray whose sum is less than or equal to a given target value.

Input:

An array of integers, nums
A target value, target
Output:

The length of the longest contiguous subarray whose sum is less than or equal to target, or -1 if no such subarray exists.
*/
const nums = [1, 2, 3, 4, 5];
const target = 10;

// Output: 4

function longestSubarrayLessOrEqual(nums, target) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxLength = -1;
  
    while (right < nums.length) {
      sum += nums[right];
  
      while (sum > target) {
        sum -= nums[left];
        left++;
      }
  
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    }
  
    return maxLength;
  }
  
  const result = longestSubarrayLessOrEqual(nums, target);
  console.log(result);
  