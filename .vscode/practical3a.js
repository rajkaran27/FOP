// Question 3
var userinput=require('readline-sync');
var num1=userinput.question('Please enter first number: ');
var num2=userinput.question('Please enter second number: ');

num1=parseInt(num1)
num2=parseInt(num2)


if (isNaN(num1) || isNaN(num2)) {
    console.log('Sorry, wrong input. Please try again.');
} else {
    if((num1>num2))
        console.log("1st number is bigger");
    else if(num2>num1)
        console.log('2nd number is bigger');
    else
        console.log('both are the same')
    // else if (num2==num1) REDUNDANT CODE
    //     console.log('both are the same')
} 
// Question 4
var userinput=require('readline-sync');
var userScore=userinput.question('Please enter score:');
var grade;
userScore=parseInt(userScore)

if (isNaN(userScore) || userScore<0 || userScore>100)
    console.log('Error');
else 
    if (userScore>=80)
        grade = 'A';
     else if (userScore >= 70) 
        grade = 'B';
     else if (userScore >= 60) 
        grade = 'C';
     else if (userScore >= 50) 
        grade = 'D';
     else if (50>userScore) 
        grade = 'F';
    
    console.log('Your grade is ' + grade)  
// Question 6
var input = require('readline-sync');
var status=input.question('Please enter C for Citizen or F for Foreigner: ');
var salary=input.question('Please enter your annual income: ');
var tax;
salary=parseInt(salary);
status=status.toUpperCase(); // to make all uppercase

if(isNaN(salary) || salary<0 || status !='C' || status !='F')
    console.log('Error');
else 
    if (status == 'C')
        if (salary<10000)
            tax = 100;
         else if (salary<=25000) 
            tax = 0.05 * salary; 
        else 
            tax = 0.15 * salary;
        else if (status == 'F')
        
        if (salary<8000)
            tax = 150;
        else if (salary<=15000)
            tax = 0.1 * salary
        else
            tax = 0.2 * salary
if (status == 'C')
    status = 'Citizen'
else (status == 'F')
    status = 'Foreigner'

console.log('Tax computed for ' + status + ' status for ' + salary + ' is ' + tax);
// Question 8
var userInput = require('readline-sync');
var rank, prize;

rank=userInput.question('Please enter your rank: ');


if (isNaN(rank) || (rank<=0))
    console.log('Please enter a valid rank!');
else {
    rank=parseInt(rank); //only parseInt when in valid block
    switch (rank) {
        case 1: prize=1000;
                break;
        case 2: prize=800;
                break;
        case 3: prize=700;
                break;
        case 4: prize=300;
                break;
        case 5: prize=300;
                break;
        default: prize=20;
    }
    console.log('Your prize money is $' + prize );
}

