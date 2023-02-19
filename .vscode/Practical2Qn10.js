var input = require('readline-sync');


var firstNum = input.questionInt('Enter first number:');

var secNum = input.questionInt('Enter second number:');


console.log(firstNum + ' + ' +  secNum + ' = ' + (firstNum+secNum));

if ((firstNum % secNum) > 0) {
    result = 'false' 
}
else if ((firstNum % secNum) == 0){
    result = 'true'
}



console.log(firstNum + ' divisible by ' + secNum + '? ' + result);