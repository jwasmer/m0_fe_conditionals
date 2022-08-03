// Using the following variables:

// ```ruby
// goodDrivingRecord = true
// isOver25 = true
// ```

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var goodDrivingRecord = false
var isOver25 = false

if (goodDrivingRecord === true && isOver25 === true) {
  console.log(`You will receive a discount on your car rental!`)
}
else if (goodDrivingRecord === true || isOver25 === true) {
  console.log(`You will pay full price for your car rental.`)
}
else {
  console.log(`You need someone else to sign for your car rental :( `)
}
