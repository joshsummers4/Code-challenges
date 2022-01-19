//get values in an array up to the a value (n) 

function fizzbuzz() {
    //previous n was an argument
    const n = document.getElementById("fizzInput").value;
    let array = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            array.push("FizzBuzz");
        } else if(i % 3 === 0){
            array.push("Fizz");
        } else if(i % 5 === 0){
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    // previous just return array;
    document.getElementById("fizzOutput").innerHTML = array;
    document.getElementById("fizzInputValue").innerHTML = "The FizzBuzz numbers up to the value of " + n + " are:";
  }