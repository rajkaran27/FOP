var input = require('readline-sync');

var userName = input.question('Please enter your name:');

console.log('Hello ' + userName + '!');

var userSalary = input.questionInt('Please enter your current salary:');

if (userSalary < 1000) {
    newSalary = userSalary * 1.2
} else if (userSalary < 2000) {
    newSalary = userSalary * 1.15
} else if (userSalary >= 2000) {
    newSalary = userSalary * 1.10
}

var increment = newSalary - userSalary ;

console.log('Here\'s the result...');

console.log('Current Salary:\t\t Increment:\t\t New Salary:');

console.log('\t$' + userSalary + '\t\t\t$' + increment  + '\t\t\t$' + newSalary);

