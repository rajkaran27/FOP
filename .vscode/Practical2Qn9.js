var input = require('readline-sync');

var tempF = input.question('Enter the temperature in Fahrenheit:')
var tempC = 5/9 * (tempF - 32)

if (20 > tempC || tempC >25) {
    console.log('Not room temperature')   
} else if ( 20 < tempC <=25) {
    console.log('The current room temperature is ' + tempC + ' degrees Celcius.')
}

