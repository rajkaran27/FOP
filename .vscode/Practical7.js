// Question 4
// var club4 = new Object();
//     club4.name = 'Arts'
//     club4.members= 700,
//     club4.fees=50  

//Question 5
// var module =  {
//     code: 'ST0502',
//     abbr:'FOP',
//     year: '1',
//     tot_class:26,
//     tot_students:539,
//     computeDist(){
//         return (5/100) * this.tot_students
//     }
// }

// var class1 = {
//     class:'Z01',
//     students:20,
//     female:12,
//     male:8
// }

// console.log('Total number of classes taking ' + module.abbr + ': ' + module.tot_class)
// console.log((class1.female/module.tot_students)*100 + '%')
// console.log(module.computeDist())\\


// Question 7

// class Club{
//     constructor(name,members,fees){
//         this.name = name
//         this.members = members
//         this.fees = fees
//     }

//     foreignFee(){
//         return 1.1*this.fees
//     }
// }



// var club1 = new Club('Sports',1600,50)
// var club2 = new Club('Community Service',1200,0)
// var club3 = new Club('Foodies',800,100)


// console.log('Total fee for all clubs $' + (club1.fees +club2.fees + club3.fees ))
// console.log()
// console.log('The fee to join the ' + club1.name + ' club is $' + club1.fees + '.' + ' For foreigners, the fee is $' + 1.1*club1.fees + '.')
// console.log()
// console.log('The fee to join the ' + club2.name + ' club is $' + club2.fees + '.' + ' For foreigners, the fee is $' + 1.1*club2.fees + '.')
// console.log()
// console.log('The fee to join the ' + club3.name + ' club is $' + club3.fees + '.' + ' For foreigners, the fee is $' + 1.1*club3.fees + '.')



// console.log('The fee to join the ' + club1.name + ' club is $' + club1.fees + '.' + ' For foreigners, the fee is $' + club1.foreignFee() + '.')
// console.log()
// console.log('The fee to join the ' + club2.name + ' club is $' + club2.fees + '.' + ' For foreigners, the fee is $' + club2.foreignFee() + '.')
// console.log()
// console.log('The fee to join the ' + club3.name + ' club is $' + club3.fees + '.' + ' For foreigners, the fee is $' + club3.foreignFee() + '.')

// Question 8

// part a
// class Rectangle {
//     constructor(length,width){
//         this.length = length
//         this.width = width
//     }

//     getArea(){
//         return this.length*this.width
//     }

//     getPerimeter(){
//         return (this.length+this.length+this.width+this.width)
//     }
// }

// // part b

// var r1 = new Rectangle(10,5)

// console.log('Area of rectangle r1 is ' + r1.getArea())
// console.log('Perimeter of rectangle r1 is ' + r1.getPerimeter())

// Question 9

// part a
// class Circle {
//     constructor(radius){
//         this.radius = radius
//     }

//     getArea(){
//         return Math.PI*(this.radius**2)
//     }

//     enlargeCircle(){
//         return this.radius *3
//     }

//     shrinkCircle(){
//         return this.radius/2
//     }
// }
// part b

// var circle1 = new Circle(2)


// console.log('Area of circle1 with radius ' + circle1.radius + ' is ' + circle1.getArea())
// console.log('Circle is enlarged 3 times')
// circle1.radius=circle1.enlargeCircle()
// console.log('Area of circle1 with radius ' + circle1.radius + ' is ' + circle1.getArea())
// console.log('Circle is shrunk by halve')
// circle1.radius=circle1.shrinkCircle()
// console.log('Area of circle1 with radius ' + circle1.radius + ' is ' + circle1.getArea())


// question 10

// part a
class BankAccount{
    constructor(name, savings){
        this.name = name.toString()
        this.savings = savings.toFixed(2)
    }

    getBalance(){
        return this.name + ' has $' + this.savings
    }
}
// part b
var person1 = new BankAccount('Oliver Twist', 1000.00)
var person2 = new BankAccount('Richie Rich',100000.00)

console.log(person1.getBalance())
console.log(person2.getBalance())