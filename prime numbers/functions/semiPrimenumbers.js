function primeFinder2(number) {
  let primeNums = [];
  for(let i= 2; i <= number; i++){
      for(let j = 2; j<= i; j++){
          if((i%j) == 0){
              primeNums.push(i);
          }
      }
  }
  //remove all duplicate values
  var primeArr = primeNums.filter(function(item, i, arr) {
      return (item !== arr[i-1] && item !== arr[i+1]);
  });
  return primeArr;
}

function semiPrimeCount() {
    let num = document.getElementById("semiInput").value;
    // check for prime numbers 
    let primeArray = primeFinder2(num);
    //check semi primes
    let semiArray = [];
    for(let i = 0; i < primeArray.length; i++){
      for(let j = i; j < primeArray.length; j++){
        let multiple = primeArray[i]*primeArray[j];
        if(multiple < num){
          semiArray.push(multiple);
        }
      }
    }
    semiArray = semiArray.sort(function(a, b){return a - b}).toString();
    document.getElementById("semiOutput").innerHTML = semiArray;
    document.getElementById("semiInputValue").innerHTML = "The semi-prime numbers up to " + num + " are:";
}