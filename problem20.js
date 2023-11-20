// confirm the ending 
// if target string is present in the last of the string 
// it will return true otherwise it will return false

function confirmEnding(str, target) {

    return str.slice(str.length - target.length) == target;
}

console.log(confirmEnding("Bastian", "n"));