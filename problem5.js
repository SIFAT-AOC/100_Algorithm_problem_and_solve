function primeSum(prNumber){
       let primetotal = 0;
       for(let i=2 ; i<prNumber;i++){
        for(let j=2;j<prNumber; j++){
            if(i===j){
                primetotal+=i;
            }
            else if(i%j===0){
                break;
            }
        }
       
       }
       return primetotal;
}
console.log(primeSum(20));