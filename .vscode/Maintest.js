function Namecheck(x) {
    var Name1 = x[0].toUpperCase()
    var restName = x.slice(1)
    restName = restName.toLowerCase()
    return x = Name1 + restName
}


// variable declaration
var input = require('readline-sync');
var nameValid = /[^a-zA-Z]/
var validChoice = /\-?\d+\.\d+/g

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
    constructor(Name, Membership, Joined, DOB, Points) {
        this.Name = Name
        this.Membership = Membership
        this.Joined = Joined
        this.DOB = DOB
        this.Points = Points
    }

    getDetails() {

        return '\n' + 'Name: ' + this.Name + '\n' + 'Membership Type: ' + this.Membership + '\n' + 'Date Joined: ' + this.Joined + '\n' + 'Date of Birth: ' + this.DOB + '\n' + 'Points Earned: ' + this.Points + '\n'

    }

    getName() {
        return 'Name: ' + this.Name
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
        this.InfoArr.push(new Member('Raj', 'Diamond', '3 Jun 2020', '31 May 2000', 40200))
        this.InfoArr.push(new Member('pj', 'Gold', '5 Jun 2020', '31 May 2000', 500))
        this.InfoArr.push(new Member('YOUR MOM', 'Gold', '1 Dec 2019', '1 Jan 1980', 250))
    }

    addMember(name, date) {
        var today = new Date().toUTCString()
        today = today.slice(5, 16)
        this.InfoArr.push(new Member(name, 'Ruby', today, date, 0))
    }

    MembCount(Membersh) {
        for (var l = 0; l < MembGrp.InfoArr.length; l++) {
            if (Membersh === MembGrp.InfoArr[l].Membership) {
                process.stdout.write(MembGrp.InfoArr[l].Name)

            }
        }
    }

    MembCheck(Name) {
        for (var l = 0; l < MembGrp.InfoArr.length; l++) {
            if (Name === MembGrp.InfoArr[l].Name) {
                return true
            }
        }
    }

    toFindIndex(Name) {
        for (var k = 0; k < MembGrp.InfoArr.length; k++) {
            if (Name == MembGrp.InfoArr[k].Name) {
                return k
            }
        }
    }


    displayDetails(name) {
        for (var l = 0; l < MembGrp.InfoArr.length; l++) {
            if (name === MembGrp.InfoArr[l].Name) {
                console.log('\nName: ' + MembGrp.InfoArr[l].Name)
                console.log('Membership type: ' + MembGrp.InfoArr[l].Membership)
                console.log('Date Joined: ' + MembGrp.InfoArr[l].Joined)
                console.log('Date of Birth: ' + MembGrp.InfoArr[l].DOB)
                console.log('Points Earned: ' + MembGrp.InfoArr[l].Points + '\n')
            }
        }
    }





}

const MembGrp = new MemberGroup()
const MembMain = new Member()


var pointsMember = input.question('\nPlease enter member\'s name: ')
pointsMember = Namecheck(pointsMember)


// checks if name input is valid and if member exists
while (true) {
    if (nameValid.test(pointsMember) || pointsMember == '') {
        console.log('Please enter a valid name!')
        pointsMember = input.question('Please enter member\'s name: ')
        pointsMember = Namecheck(pointsMember)
    } else if (MembGrp.MembCheck(pointsMember) != true) {
        console.log('Member does not exist.')
        pointsMember = input.question('Please enter member\'s name: ')
        pointsMember = Namecheck(pointsMember)
    } else {
        break;
    }
}

var amtSpent = input.question('Please enter amount spent: ')
amtSpent = parseFloat(amtSpent).toFixed(2)
//checks if amount entered is a valid amount
while (true) {
    if (isNaN(amtSpent) || amtSpent <= 0) {
        console.log('Please enter a valid amount!')
        amtSpent = input.question('Please enter amount spent: ')
        amtSpent = parseFloat(amtSpent).toFixed(2)
    } else {
        break;
    }
}



// adds points to the member
if (amtSpent <= 50.0) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 10
} else if (amtSpent <= 100) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 50
} else if (amtSpent <= 200) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 100
} else if (amtSpent <= 500) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 200
} else if (amtSpent <= 1000) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 500
} else if (amtSpent <= 2500) {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 1000
} else {
    MembGrp.InfoArr[MembGrp.toFindIndex(pointsMember)].Points += 2000
}


//Checks through all members' points to update their membership type if needed
for (var i = 0; i < MembGrp.InfoArr.length; i++) {

    if (MembGrp.InfoArr[i].Points < 500) {
        MembGrp.InfoArr[i].Membership = 'Ruby'
    } else if (MembGrp.InfoArr[i].Points < 5000) {
        MembGrp.InfoArr[i].Membership = 'Gold'
    } else if (MembGrp.InfoArr[i].Points < 20000) {
        MembGrp.InfoArr[i].Membership = 'Platinum'
    } else {
        MembGrp.InfoArr[i].Membership = 'Diamond'
    }
}

MembGrp.displayDetails(pointsMember)