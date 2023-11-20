// find the largest Word from a String
function findLongestWordLength(str) {
    let storeString = str.split(' ');
    console.log(storeString);
    let emptYaRRAY = storeString[0];
    for(let i=0;i < storeString.length;i++){
        if(storeString[i].length > emptYaRRAY.length){
            emptYaRRAY = storeString[i];
        }
    }
    return emptYaRRAY;
  }
  
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// find the largest number from the 2D array
function largestOfFour(arr) {
    let storeEle = [];
    for(let i=0;i<arr.length;i++){
       
        for(let j =0;j<arr[i].length;j++){
            let largestNum = arr[i][j][0];
           for(let k=0;k<arr[i][j].length;k++) {
        if(arr[i][j][k] > largestNum){
            largestNum =arr[i][j][k];
        }
    }
    storeEle[i] = largestNum;
        }
        
    }
  return storeEle;
}

console.log(largestOfFour(
    [

    [
        [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]

    ],
    [
        [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]

    ]
]

));