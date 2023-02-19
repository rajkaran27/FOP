function Namecheck(x){
    var Name1 = x[0].toUpperCase()
    var restName = x.slice(1)
    restName = restName.toLowerCase()
    return x = Name1 + restName
}


// variable declaration
var input = require('readline-sync');
var nameValid = /[^a-zA-Z]/
var validChoice = /\-?\d+\.\d+/g


// Member class
class Member {
    constructor(Name,Membership,Joined,DOB,Points){
        this.Name =  Name
        this.Membership  =  Membership 
        this.Joined =  Joined
        this.DOB =  DOB
        this.Points =  Points
    }

    getDetails() {
        
        return '\n' + 'Name: ' +  this.Name + '\n' + 'Membership Type: '  +   this.Membership + '\n' + 'Date Joined: ' + this.Joined + '\n' + 'Date of Birth: ' + this.DOB + '\n' + 'Points Earned: ' + this.Points + '\n' 
        
    }

    
}

class MemberGroup {
    constructor(){
        this.DetArr = []
        this.DetArr.push(new Member('Leonardo','Gold','1 Dec 2019', '1 Jan 1980', 1400))
        this.DetArr.push(new Member('Catherine','Ruby','14 Jan 2020','28 Oct 1985',250))
        this.DetArr.push(new Member('Luther','Gold','29 Apr 2020','16 Mar 1992',3350))
        this.DetArr.push(new Member('Bruce','Diamond','3 Jun 2020','18 Mar 1994',40200))
        this.DetArr.push(new Member('Amy','Gold','5 Jun 2020','31 May 2000',500))
    }

    addMember(name,date){
        this.DetArr.push(new Member(name,'Ruby',new Date(),date,0))
    }

    MembCount(x){
        for (var l = 0; l < MembGrp.DetArr.length; l++) {
            if (x === MembGrp.DetArr[l].Membership) {
                console.log(MembGrp.DetArr[l].Name)
                
            }
        }
    }

    MembCheck(x){
        for (var l = 0; l < MembGrp.DetArr.length; l++) {
            if(x === MembGrp.DetArr[l].Name){
                return true
            }
        }
    }

}


const MembGrp= new MemberGroup()
const MembMain = new Member ()

// var numba = 0
// var pointsMember = input.question('Please enter member\'s name: ')
// for (var k = 0; k < MembGrp.DetArr.length; k++) {
//     if (pointsMember == MembGrp.DetArr[k].Name) {
//         console.log(MembGrp.DetArr[k].Name)
//         var numberNote = 0
//         numberNote += k
//     }
// }
// var amtSpent = input.question('Please enter amount spent: ')

// if(amtSpent<= 50){
//     Membgrp.DetArr[numberNote].Points+=10
// }
// else if(amtSpent> 50.01 && amtSpent< 100){
//     Membgrp.DetArr[numberNote].Points+=50
// }
// else if(amtSpent> 100.01 && amtSpent< 200){
//     Membgrp.DetArr[numberNote].Points+=100
// }
// else if(amtSpent> 200.01 && amtSpent< 500){
//     Membgrp.DetArr[numberNote].Points+=200
// }
// else if(amtSpent> 500.01 && amtSpent< 1000){
//     Membgrp.DetArr[numberNote].Points+=500
// }
// else if(amtSpent> 1000.01 && amtSpent< 2500){
//     Membgrp.DetArr[numberNote].Points+=1000
// }
// else if(amtSpent>= 2500.01){
//     Membgrp.DetArr[numberNote].Points+=2000
// }
// else{
//     console.log('No points earned')
// }











