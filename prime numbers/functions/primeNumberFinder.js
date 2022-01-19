function primeFinder() {
    let n = document.getElementById("primeInput").value;
    // check for prime numbers 
    let primeNums = [];
    for(let i= 2; i <= n; i++){
        for(let j = 2; j<= i; j++){
            if((i%j) == 0){
                primeNums.push(i);
            }
        }
    }
    //remove all duplicate values
    var primeArray = primeNums.filter(function(item, i, arr) {
        return (item !== arr[i-1] && item !== arr[i+1]);
    });
    //return primeArray;
    //add to the web page
    let prime = primeArray.toString();
    document.getElementById("primeOutput").innerHTML = prime;
    document.getElementById("primeInputValue").innerHTML = "The prime numbers up to " + n + " are:";
    
}

//console.log(primeFinder(20))
