

// function isEvenNum(num) {
//     if (num%2 ==0)
//         console.log(num + ' is even.')
//     else
//         console.log(num + ' is odd')
// }

// for(var i = 0; i<=4;i++){
//     isEvenNum(Math.floor(Math.random()*10)+1)
// }




// function createArr(x) {
//    var modules = new Array();
//    for (var i = 1; i <= x; i++) {
//       modules.push(input.question('Enter module ' + i + ': '));
//    }
//    console.log(modules[1] + modules[0]);
// }


// function  allMultiple(num1,num2,x){

//    for(var i = 0 ; i<(); i++){
//       if(num1%x== 0)
//        process.stdout.write(num1 + ' ')
//        num1++
//    }

// }
// console.log(allMultiple(15,35,5))

// function prinTable(){

//    for(var i = 0;i<=12;i++){
//       console.log(5 + ' x ' + i  +  ' = ' + (i*5))
//    }
   
// }

// var input = require('readline-sync');

// function getInput() {
//    var rank = parseInt(input.question('Please enter your rank: '))
//    return rank
// }


// function printPrize(rank) {
//    var prize;
//    switch (rank) {
//       case 1:
//          prize = 1000;
//          break;
//       case 2:

//          prize = 800;
//          break;
//       case 3:
//          prize = 700;
//          break;
//       case 4:
//       case 5:
//          prize = 300;
//          break;
//       default:
//          prize = 20;
//    }
//    console.log('Your prize money is: $' + prize);
// }
// printPrize(getInput());



function getInput(s) {
   num = input.question('Please enter ' + s + ' integer: ');
   return num
}


function findMax(num1,num2){
   if(num1>num2){
      console.log('1st number is bigger')  
   }
   else if (num2>num1){
      console.log('2nd number is bigger')  
   }
   else{
      console.log('The 2 numbers are equal')  
   }
      
}

var input = require('readline-sync');

var num1 = getInput('1st')
var num2 = getInput('2nd')

findMax(num1,num2)

findMax(getInput('1st'),getInput('2nd'))


