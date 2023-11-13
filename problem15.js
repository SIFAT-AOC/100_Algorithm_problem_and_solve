// Write a JavaScript function to reverse an array in place.
function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // return array.reverse();
  }
  const array = [1, 2, 3, 4, 5];

  reverseArray(array);
  
  console.log(array); // [5, 4, 3, 2, 1]
    