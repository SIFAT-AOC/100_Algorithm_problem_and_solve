const minimumSum = function(num) {
    const arr = num.toString().split("").sort();
    const sum =  Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]) ;
    return sum;
};

console.log(minimumSum(2345));