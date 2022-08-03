// ## Mild

// Write a JavaScript program that defines a variable that stores an
// Number. The program should print out the String "even" if the Number
// is even, and the String "odd" if the Number is odd.

var number = 11

if (number <= 0) {
  console.log("Please enter an integer greater than zero.")
}
else if (number % 2 === 0) {
  console.log("Even")
}
else if (number % 2 === 1) {
  console.log("Odd")
}
else {
  console.log("Please enter an integer greater than zero.")
}


console.log(number % 2)
