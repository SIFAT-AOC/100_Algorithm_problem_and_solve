/*
give an array of integers , replace all the occurrences of elementToReplace with subtractionElement

example : 
For inputArray = [1,2,1] , elementToReplace = 1 and subtractionElement = 3 , the output should be arrayReplace(inputArray , elementToReplace , subtractionElement) = [3,2,3]
*/

function replaceArray(inputArray, elementToReplace , subtractionElement){
    inputArray.forEach((element , index) => {
        if(element === elementToReplace){
            inputArray[index] = subtractionElement
        }
    });
    console.log(inputArray);
}

replaceArray([1,2,1],1,3)

