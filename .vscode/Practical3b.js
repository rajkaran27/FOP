// Question 2
var userinput=require('readline-sync');
var s='';


for(var i=25;i>=0; i-=5)
    if(i==25)
        s+=i;
    else
        s+='-' +i;
    
console.log(s);
    
// Question 3
var userinput=require('readline-sync');

for(var i=1; i<=12; i++) {
    console.log(i + ' x 5 = ' + (i*5));
}
// Question 4
var userinput=require('readline-sync');
var num,sum = 0,ave;

for(var i=1;i<=5;i++) {
    num=userinput.question('number' + i + ':')
    num=parseInt(num);
    if (isNaN(num)){
        console.log('Please enter a number!');
    }
    else
        sum+=num;
        
}

console.log('Sum of numbers: ' + sum);
console.log('Average of the numbers: ' + (ave=sum/(i-1)));