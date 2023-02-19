var input = require('readline-sync')

// Name: M.Rajkaran
// Class: DIT/1A/04
// Admin: 2109039

// only three external functions
// check wording of menus and submenus

//Function to check name 
//learnt from freecodecamp.org
// validation statistics for invalids
function Namecheck(name) {
    if (name != '') {
        var Name1 = name[0].toUpperCase()
        var restName = name.slice(1)
        restName = restName.toLowerCase()
        return name = Name1 + restName
    }
}

function MonthCheck(Month) {
    var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for (var i = 0; i < monthArray.length; i++) {
        if (Month === monthArray[i]) {
            return true
        }
    }
}

// Member class
class Member {
    constructor(Name, Membership = 'Ruby', Joined = new Date(), DOB, Points) {
        this.Name = Name
        this.Membership = Membership
        this.Joined = Joined
        this.DOB = DOB
        this.Points = Points
    }


    getDetails() {

        return '\n' + 'Name: ' + this.Name + '\n' + 'Membership Type: ' + this.Membership + '\n' + 'Date Joined: ' + this.Joined + '\n' + 'Date of Birth: ' + this.DOB + '\n' + 'Points Earned: ' + this.Points + '\n'

    }
}

class MemberGroup {
    constructor() {
        this.InfoArr = []
        this.InfoArr.push(new Member('Leonardo', 'Gold', '1 Dec 2019', '1 Jan 1980', 1400))
        this.InfoArr.push(new Member('Catherine', 'Ruby', '14 Jan 2020', '28 Oct 1985', 250))
        this.InfoArr.push(new Member('Luther', 'Gold', '29 Apr 2020', '16 Mar 1992', 3350))
        this.InfoArr.push(new Member('Bruce', 'Diamond', '3 Jun 2020', '18 Mar 1994', 40200))
        this.InfoArr.push(new Member('Amy', 'Gold', '5 Jun 2020', '31 May 2000', 500))
    }


    deleteMemb(name) {
        console.log(this.InfoArr[name])
    }


    // Method to addmember
    addMember(name, date) {
        var today = String(new Date())
        today = today.slice(8, 11) + today.slice(4, 7) + today.slice(10, 15)
        this.InfoArr.push(new Member(name, 'Ruby', today, date, 0))
    }

    // Method to see if input matches names in array
    MembCheck(Name) {
        for (var l = 0; l < this.InfoArr.length; l++) {
            if (Name === this.InfoArr[l].Name) {
                return true
            }
        }
    }

    // Method to find the index of the name input
    toFindIndex(Name) {
        for (var k = 0; k < this.InfoArr.length; k++) {
            if (Name === this.InfoArr[k].Name) {
                return k
            }
        }
    }

    displayDetails(name) {
        for (var l = 0; l < this.InfoArr.length; l++) {
            if (name === this.InfoArr[l].Name) {
                console.log('\nName: ' + this.InfoArr[l].Name)
                console.log('Membership type: ' + this.InfoArr[l].Membership)
                console.log('Date Joined: ' + this.InfoArr[l].Joined)
                console.log('Date of Birth: ' + this.InfoArr[l].DOB)
                console.log('Points Earned: ' + this.InfoArr[l].Points + '\n')
            }
        }
    }
}


// variable declaration
var input = require('readline-sync');
var nameValid = /[^a-zA-Z]/
var validChoice = /\-?\d+\.\d+/g
const MembGrp = new MemberGroup()
const MembMain = new Member()


console.log(Date.parse(new Date()))
