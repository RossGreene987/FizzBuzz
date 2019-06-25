const readline = require('readline-sync');

function divCheck(big, small){
    return (big%small === 0)
}

function fizzbuzz(){

    for(let i=1; i<101; i++){
        if(i%15 === 0) {
            console.log("FizzBuzz");
        } else if (divCheck(i,3)){
            console.log("Fizz");
        } else if (divCheck(i,5)){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzbuzz();

function printArray(array){
    let toPrint = ''
    array.forEach(function(element) { toPrint += element; });
    console.log(toPrint)
}

function numbInput(){
    let answer;
    do {
        answer = readline.prompt("What should I go up to?")
    } while (+answer == 0)
    return answer
}

function fizzbuzz2(){
    let n = numbInput("What should I go up to?")
    for(let i=1; i<n+1; i++) {
        let toPrint = [];
        let is11 = divCheck(i,11)
        if (is11) {
            toPrint.push('Bong');
        }
        if (divCheck(i, 3) && !is11){
            toPrint.push('Fizz');
        }
        if (divCheck(i, 13)){
            toPrint.push('Fezz');
        }
        if (divCheck(i, 5) && !is11) {
            toPrint.push('Buzz');
        }
        if (divCheck(i, 7) && !is11) {
            toPrint.push('Bang');
        }

        if (toPrint.length ===  0){
            console.log(i);
        } else {
            if (divCheck(i, 17) && !is11) {
                toPrint.reverse()
            }
            printArray(toPrint)
        }
    }
}

fizzbuzz2(1000)

