// qn 1

// part a

// class Square{
//     constructor(length){
//          this.length = length;
//     }
//     calculateArea(){
//          return this.length ** 2; 
//     }
// }

// var SqArray = []

// for(var i = 0;i<10;i++){
//     randomNum = Math.floor(Math.random() * 11) + 10
//     SqArray[i]=new Square(randomNum)

// }

// process.stdout.write('Length\tArea')

// for(var i =0;i<10;i++){
//     console.log(SqArray[i].length + '\t' +SqArray[i].calculateArea())
// }

//question2

//part a
// class Square{
//     constructor(length){
//          this.length = length;
//     }
//     calculateArea(){
//          return this.length ** 2; 
//     }
// }
// var SqArray = []

// function createSquareArray(){
//     var len
//     var SqArray =[]

//     for(var i =0;i<10;i++){
//         len = 10+ Math.floor(Math.random()*11)
//         SqArray.push(new Square(len))
//     }
//     return SqArray
// }

// function printSquareArray(x) {
//     for (var i = 0; i < 10; i++) {
//         console.log(x[i].length + '\t' + x[i].calculateArea())
//     }
// }


// console.log('Length\tArea')
// var myArray = createSquareArray()
// printSquareArray(myArray)

//question3
var input = require('readline-sync');
//part a
class Contact {
    constructor(name, mobileNumber) {
        this.name = name
        this.mobileNumber = mobileNumber
    }

    getContactDetails() {
        return 'Name: ' + this.name + '\n' + 'Mobile Number: ' + this.mobileNumber
    }
}

class AddressBook {
    constructor() {
        this.myContact = [];  //class property
        this.myContact.push(new Contact("Homer", 98849959));
        this.myContact.push(new Contact("Marge", 84774744));
        this.myContact.push(new Contact("Lisa", 86994994));
        this.myContact.push(new Contact("Maggie", 94775883));
        this.myContact.push(new Contact("Bart", 88838848));
    }


    getContactAt(index) {
        return this.myContact[index]
    }

    getNumberOfContacts() {
        return this.myContact.length;
    }


    searchContact(name){
        for(var x=0;x<this.myContact.length;x++){
            if(name === this.myContact[x]){
                return this.myContact[x][1]
            }else{
                return 'not found!'
            }
        }
    }
}




var myAddress = new AddressBook()
console.log(myAddress)
// for (var i = 0; i < myAddress.getNumberOfContacts(); i++) {
//     console.log(myAddress.myContact[i].name)
// }
// console.log(myAddress.getContactAt(2))
// var userName = input.question('Please enter your name: ')

// console.log(myAddress.searchContact(userName))
