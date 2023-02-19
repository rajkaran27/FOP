var input = require('readline-sync')

var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;

var inpdate = input.question('Enter date of birth: ')

while(true){
    if(date_regex.test(inpdate)){
        console.log('True')
    }else{
        console.log('Enter proper date')
        inpdate = input.question('Enter date of birth: ')
    }
}
