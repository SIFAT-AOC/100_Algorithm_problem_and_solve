// Problem: Find the largest element in an array using JavaScript and a Divide and Conquer approach
function findLargestElement(arr, start, end) {
    // Base case: If the array contains only one element, return it.
    if (start === end) {
      return arr[start];
    }
  
    // Divide the array into two halves.
    const mid = Math.floor((start + end) / 2);
  
    // Recursively find the largest elements in the left and right halves.
    const leftMax = findLargestElement(arr, start, mid);
    const rightMax = findLargestElement(arr, mid + 1, end);
  
    // Compare and return the larger of the two maximums.
    return Math.max(leftMax, rightMax);
  }
  
  // Example usage:
  const arr = [12, 34, 45, 9, 8, 67, 23];
  const largestElement = findLargestElement(arr, 0, arr.length - 1);
  console.log("The largest element in the array is:", largestElement);
  