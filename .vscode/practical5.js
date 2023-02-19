// question 5

// var input = require('readline-sync');

// var marks = new Array(6);
// var avg,total=0,count=0,stud;


// for (var i=0;i<6;i++) {
//     stud = input.questionInt('Enter marks for student #' + (i+1) + ':')
//     marks[i] =stud
//     // marks.push(stud)
//     total+=stud
//         if (stud>80)
//             count+=1
// }

// avg=total/marks.length

// console.log(count + ' students scored A grade')
// console.log('The average mark is ' + avg)
// ------------------------------------------------------------------------------------------------
// question 7

// var intArray = [1,2,3,4,5]
// var intArray= new Array(5)
// var numbers = 0 ,highest=0;
// for(var i=0;i<intArray.length;i++) {
//     numbers = Math.floor(Math.random()*12)+0
//     intArray[i] = numbers
//         if (numbers> intArray[i])
//             highest += Math.max(intArray)
// }
// process.stdout.write('Elements of int array : ' + intArray)
// console.log('\nHighest Value: ' + highest)

// ------------------------------------------------------------------------------------------------
// question 3

// var intArr = new Array (10);

// for (var i = 0;i<intArr.length;i++) {
//     intArr[i] = Math.floor(Math.random()*10) +1
// }

// var biggest = intArr[0], biggestIndex = 0;

// for(var a=0;a<intArr.length;a++) {
//     if(intArr[a] > biggest)
//         biggest = intArr[a]
//         biggestIndex=i
// }
// console.log('The largest number is ' + biggest)
// console.log(biggest + ' is stored at array index# ' + biggestIndex)
// ------------------------------------------------------------------------------------------------
// question 4

// var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
// var days=['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

// for(var i=0;i<month.length;i++) {
//     console.log(month[i] + ' has ' + days[i] + ' days.')
// }

// ------------------------------------------------------------------------------------------------
// question 8

var intArray = new Array(50)

for(var i=0;i <intArray.length;i++) {
    intArray[i] = Math.floor(Math.random()*100) + 1
}

console.log('Original Array : \n' + intArray)

var evenArray = new Array()
var oddArray = new Array()

for(var i=0;i <intArray.length;i++) {
    if(intArray[i] % 2 == 0)
        evenArray.push(intArray[i])
    else if (intArray[i] % 2 != 0) 
        oddArray.push(intArray[i])
}

console.log('Even numbers:\n' + evenArray)
console.log('Odd numbers:\n' + oddArray)
// ------------------------------------------------------------------------------------------------

// question 6

// var list1 = [12, 56, 76, 32, 12, 34];
// var list2 = [12, 56, 76, 32, 12, 34];
// var equal=0;//counts number of equal pairs of elements


// if(list1.length == list2.length){
//     for(var i = 0;i<list1.length;i++) {
//         if (list1[i] !== list2[i])
//              equal++; //adding 1 to equal both elements are same
//     }
// }

// if(equal==6)
//     console.log('Two lists are strictly identical.')
// else
//     console.log('Two lists are not identical.')
  
