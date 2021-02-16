/* 
    This is a practice to understand
    Javascript basics
*/

// Declaring Variables

const firstName = 'Saman' // String
let lastName = 'Rashidi'
let nickName
let age = 31 // Number
let isSleeping = false // Boolean
const skills = ['Valorant', 'Overwatch', 'Developer'] // Array
let generalInfo = {
    weight: 75,
    height: 182,
    hairColor: 'Black',
    isAlive: true
} // Object

// Reassign the variable
nickName = 'MadVorteX' // String

// Print Output
console.log('First Name : ' + firstName) // First Name : Saman
console.log('Last Name : ' + lastName) // Last Name : Rashidi
console.log('NickName : ' + nickName) // NickName : MadVorteX
console.log('Age : ' + age) // Age : 31
console.log('Sleeping : ' + isSleeping) // Sleeping : false
console.log('Skills : ' + skills) // Skills : Valorant,Overwatch,Developer
console.log('General Info : ' + generalInfo) // General Info : [object Object]
console.log('Weight : ' + generalInfo.weight) // Weight : 75
