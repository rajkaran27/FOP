// Name: M.Rajkaran
// Class: DIT/1A/04
// Admin: 2109039

//Function to check name 
//learnt from freecodecamp.org
function Namecheck(name) {
    if (name != '') {
        var Name1 = name[0].toUpperCase()
        var restName = name.slice(1)
        restName = restName.toLowerCase()
        return name = Name1 + restName
    }
}

// function to check month
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
// MemberGroup class
class MemberGroup {
    constructor() {
        this.InfoArr = []
        this.InfoArr.push(new Member('Leonardo', 'Gold', '1 Dec 2019', '1 Jan 1980', 1400))
        this.InfoArr.push(new Member('Catherine', 'Ruby', '14 Jan 2020', '28 Oct 1985', 250))
        this.InfoArr.push(new Member('Luther', 'Gold', '29 Apr 2020', '16 Mar 1992', 3350))
        this.InfoArr.push(new Member('Bruce', 'Diamond', '3 Jun 2020', '18 Mar 1994', 40200))
        this.InfoArr.push(new Member('Amy', 'Gold', '5 Jun 2020', '31 May 2000', 500))
    }

    // Method to addmember
    addMember(name, date) {
        var today = String(new Date())
        today = today.slice(8, 11) + today.slice(4, 7) + today.slice(10, 15)
        this.InfoArr.push(new Member(name, 'Ruby', today, date, 0))
    }

    // Method to see if input matches names
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

    // Method to display details of name entered
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

//RegEx to test for special characters in names
var nameValid = /[^a-zA-Z]/

//RegEx to test for float in integer input
var validChoice = /\-?\d+\.\d+/g
const MembGrp = new MemberGroup()
const MembMain = new Member()

// For option 2 in submenu to compare ages
// stores all DOB year in an array
var datearray = []
for (var i = 0; i < MembGrp.InfoArr.length; i++) {
    MembGrp.InfoArr[i].DOB = parseInt(MembGrp.InfoArr[i].DOB.slice(6))
    datearray.push(MembGrp.InfoArr[i].DOB)
}

// Main Menu
console.log('Welcome to XYZ Membership Loyalty Programme!')
// Validation of names to ensure no special characters are entered
var userName = input.question('Please enter your name: ')
while (true) {
    if (nameValid.test(userName) || userName == '') {
        console.log('Please enter a valid name!')
        userName = input.question('Please enter your name: ')
    } else {
        break;
    }
}
// Menu options
var userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

while (userChoice != 6) {

    // vaildation of input
    if (isNaN(userChoice) || userChoice <= 0 || userChoice > 6 || validChoice.test(userChoice)) {

        console.log('Please enter a valid input.')
        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

    }
    // Option 1
    else if (userChoice == 1) {
        // Loop to print out all members detail
        for (var i = 0; i < MembGrp.InfoArr.length; i++) {
            console.log(MembGrp.InfoArr[i].getDetails())
        }

        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

    }
    // Options 2 
    else if (userChoice == 2) {
        displayMember = input.question('\nPlease enter member\'s name: ')
        displayMember = Namecheck(displayMember)

        // Checks if the name input is valid/ matches names in array
        while (true) {
            if (nameValid.test(displayMember) || displayMember == '') {
                console.log('\nPlease enter a valid name!')
                displayMember = input.question('Please enter member\'s name: ')
                displayMember = Namecheck(displayMember)
            } else if (MembGrp.MembCheck(displayMember) != true) {
                console.log('\nMember does not exist.')
                displayMember = input.question('Please enter member\'s name: ')
                displayMember = Namecheck(displayMember)
            } else {
                break;
            }
        }

        // print the details of the name
        MembGrp.displayDetails(displayMember)

        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

    }
    else if (userChoice == 3) {

        // enters a submenu to manage members
        var MembMenu = input.question('\t\tPlease select your choice: ' + '\n\t\t1. Delete existing member\n\t\t2. Add new member\n\t\t3. Exit\n\t\t>> ')

        while (MembMenu != 3) {

            if (isNaN(MembMenu) || MembMenu <= 0 || MembMenu > 3 || validChoice.test(MembMenu)) {

                console.log('Please enter a valid input!')
                MembMenu = input.question('\t\tPlease select your choice: ' + '\n\t\t1. Delete existing member\n\t\t2. Add new member\n\t\t3. Exit\n\t\t>> ')

            }
            else if (MembMenu == 1) {

                var deleteName = input.question('\n\t\tPlease enter member\'s name: ')
                deleteName = Namecheck(deleteName)

                //checks if name entered is valid and if it is an existing member
                while (true) {
                    if (nameValid.test(deleteName) || deleteName == '') {
                        console.log('\n\t\tPlease enter a valid name!')
                        deleteName = input.question('\t\tPlease enter member\'s name: ')
                        deleteName = Namecheck(deleteName)
                    }
                    else if (MembGrp.MembCheck(deleteName) != true) {
                        console.log('\t\tMember does not exist.')
                        deleteName = input.question('\n\t\tPlease enter member\'s name: ')
                        deleteName = Namecheck(deleteName)
                    } else {
                        break;
                    }
                }

                //finds the index of the name entered
                var deleteInd = MembGrp.toFindIndex(deleteName)
                // deletes the object
                MembGrp.InfoArr.splice(deleteInd, 1)
                console.log('\t\tMember has been deleted.\n')

                MembMenu = input.question('\t\tPlease select your choice: ' + '\n\t\t1. Delete existing member\n\t\t2. Add new member\n\t\t3. Exit\n\t\t>> ')
            }
            else if (MembMenu == 2) {

                var addName = input.question('\n\t\tPlease enter member\'s name: ')
                addName = Namecheck(addName)

                // checks if input is valid/ if member already exists in database
                while (true) {
                    if (nameValid.test(addName) || addName == '') {
                        console.log('\n\t\tPlease enter a valid name!')
                        addName = input.question('\t\tPlease enter member\'s name: ')
                        addName = Namecheck(addName)
                    }
                    else if (MembGrp.MembCheck(addName)) {
                        console.log('\t\tMember\'s name exists in database. Please enter a new name.')
                        addName = input.question('\n\t\tPlease enter member\'s name: ')
                        addName = Namecheck(addName)
                    } else {
                        break;
                    }
                }

                var addDOB = input.question('\t\tPlease enter member\'s date of birth: ')
                var inpDate = parseInt(addDOB.slice(0, 2))
                var inpMonth = addDOB.slice(3, 6)

                //Checks if date entered is Valid
                while (true) {
                    if (MonthCheck(inpMonth) == false) {
                        console.log('\t\tPlease enter a valid date! E.g. 1 Jan 2000')
                        addDOB = input.question('\t\tPlease enter member\'s date of birth: ')
                        inpDate = parseInt(addDOB.slice(0, 2))
                        inpMonth = addDOB.slice(3, 6)
                    } else if (inpDate > 31) {
                        console.log('\t\tPlease enter a valid date! E.g. 1 Jan 2000')
                        addDOB = input.question('\t\tPlease enter member\'s date of birth: ')
                        inpDate = parseInt(addDOB.slice(0, 2))
                        inpMonth = addDOB.slice(3, 6)
                    } else if (addDOB == '' || isNaN(Date.parse(addDOB))) {
                        console.log('\t\tPlease enter a valid date! E.g. 1 Jan 2000')
                        addDOB = input.question('Please enter member\'s date of birth: ')
                        inpDate = parseInt(addDOB.slice(0, 2))
                        inpMonth = addDOB.slice(3, 6)
                    }
                    else {
                        break;
                    }
                }

                //adds member into array
                MembGrp.addMember(addName, addDOB)
                //display new member

                MembGrp.displayDetails(addName)

                MembMenu = input.question('\t\tPlease select your choice: ' + '\n\t\t1. Delete existing member\n\t\t2. Add new member\n\t\t3. Exit\n\t\t>> ')
            } else if (MembMenu == 3) {
                break;
            }
        }

        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')


    }

    else if (userChoice == 4) {

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

        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

    }
    else if (userChoice == 5) {

        var subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')

        while (subChoice != 6) {

            // validate input
            if (isNaN(subChoice) || subChoice <= 0 || subChoice > 6 || validChoice.test(subChoice)) {
                console.log('\t\tPlease enter a valid input.')
                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')
            }

            else if (subChoice == 1) {

                var MembType = input.question('\n\t\tEnter Membership Type: ')
                Membtype = Namecheck(MembType)

                while (true) {
                    if ((MembType == 'Diamond' || MembType == 'Ruby' || MembType == 'Gold' || MembType == 'Platinum') == false) {
                        console.log('\t\tPlease enter a valid membership type.')
                        MembType = input.question('\n\t\tEnter Membership Type: ')
                        Membtype = Namecheck(MembType)
                    } else {
                        break;
                    }
                }

                var name = ''

                for (var i = 0; i < MembGrp.InfoArr.length; i++) {
                    if (MembType === MembGrp.InfoArr[i].Membership) {
                        name += MembGrp.InfoArr[i].Name + ' '
                    }
                }
                console.log('\n\t\tMember(s) of membership type ' + MembType + ': ' + name + '\n')

                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')
            }

            else if (subChoice == 2) {

                name = ''

                for (var i = 0; i < datearray.length; i++) {
                    var young = Math.max(...datearray)
                    if (datearray[i] == young) {
                        name += MembGrp.InfoArr[i].Name + ' '
                    }
                }
                console.log('\n\t\tYoungest member(s): ' + name)

                name = ''

                for (var i = 0; i < datearray.length; i++) {
                    var old = Math.min(...datearray)
                    if (datearray[i] == old) {
                        name += MembGrp.InfoArr[i].Name + ' '
                    }
                }
                console.log('\t\tOldest member(s): ' + name)

                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')
            }

            else if (subChoice == 3) {

                // pushing all points of members in an array
                var pointsarray = []
                for (var i = 0; i < MembGrp.InfoArr.length; i++) {
                    pointsarray.push(MembGrp.InfoArr[i].Points)
                }

                name = ''

                // to find who has highest number of points (Multiple names allowed)
                for (var i = 0; i < pointsarray.length; i++) {
                    var highest = Math.max(...pointsarray)
                    if (pointsarray[i] == highest) {
                        name += MembGrp.InfoArr[i].Name + ' '
                    }
                }
                console.log('\n\t\tHighest points: ' + name)

                name = ''

                // to find who has lowest number of points (Multiple names allowed)
                for (var i = 0; i < pointsarray.length; i++) {
                    var lowest = Math.min(...pointsarray)
                    if (pointsarray[i] == lowest) {
                        name += MembGrp.InfoArr[i].Name + ' '
                    }
                }
                console.log('\t\tLowest points: ' + name)


                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')
            }

            else if (subChoice == 4) {

                var countR = 0, countD = 0, countG = 0, countP = 0

                // counting how many members are in each membership type
                for (var i = 0; i < MembGrp.InfoArr.length; i++) {
                    if (MembGrp.InfoArr[i].Membership == 'Ruby') {
                        countR += 1
                    } else if (MembGrp.InfoArr[i].Membership == 'Diamond') {
                        countD += 1
                    } else if (MembGrp.InfoArr[i].Membership == 'Gold') {
                        countG += 1
                    } else if (MembGrp.InfoArr[i].Membership == 'Platinum') {
                        countP += 1
                    }
                }

                console.log('\n\t\tRuby: ' + countR + '\n' + '\t\tGold: ' + countG + '\n' + '\t\tPlatinum: ' + countP + '\n' + '\t\tDiamond: ' + countD)
                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')

            }

            else if (subChoice == 5) {

                var PointR = 0, PointD = 0, PointG = 0, PointP = 0

                for (var i = 0; i < MembGrp.InfoArr.length; i++) {
                    if (MembGrp.InfoArr[i].Membership == 'Ruby') {
                        PointR += MembGrp.InfoArr[i].Points
                    } else if (MembGrp.InfoArr[i].Membership == 'Diamond') {
                        PointD += MembGrp.InfoArr[i].Points
                    } else if (MembGrp.InfoArr[i].Membership == 'Gold') {
                        PointG += MembGrp.InfoArr[i].Points
                    } else if (MembGrp.InfoArr[i].Membership == 'Platinum') {
                        PointP += MembGrp.InfoArr[i].Points
                    }
                }
                console.log('\n\t\tRuby: ' + PointR + '\n' + '\t\tGold: ' + PointG + '\n' + '\t\tPlatinum: ' + PointP + '\n' + '\t\tDiamond: ' + PointD)
                subChoice = input.question('\n\t\tPlease select an option from the sub-menu:\n\t\t 1. Display names of (all) a certain type of members only.\n\t\t 2. Display the name of the youngest and oldest member in the system.\n\t\t 3. Display the name of members with the highest and lowest points earned.\n\t\t 4. Display total number of members in each membership type.\n\t\t 5. Display the total points in each membership type.\n\t\t 6. Return to main-menu\n\t\t >> ')
            }

            else if (subChoice == 6) {
                break;
            }
        }

        userChoice = input.question('\nHi ' + userName + ', please select your choice:\n\t 1. Display all members\' information\n\t 2. Display member information\n\t 3. Manage Members\n\t 4. Update points earned\n\t 5. Statistics\n\t 6. Exit\n\t >> ')

    }


}
console.log('Thank you & goodbye!')