var userinput=require('readline-sync');

do{
    var num = userinput.questionInt('Enter a number:');

    if (isNaN(num) || num>200 || num<100)
        console.log('Error! Please enter a number between 100 and 200')
    else
        console.log('Input Accepted: End of Program!')
}while(num>200 || num<100)



