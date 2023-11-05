function reverseString(str) {
    // Check if the input string is empty or null
    if (str === null || str === "") {
      return str;
    }
  
    // Split the string into an array of characters
    const charArray = str.split("");
  
    // Reverse the array
    charArray.reverse();
  
    // Join the array back into a string
    const reversedString = charArray.join("");
  
    // Return the reversed string
    return reversedString;
  }
  