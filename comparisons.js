// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log(`Is numberTeachers less than numberStudents?`, numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(`Is numberTeachers strictly equal to stringTeachers?`, numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(`Is numberTeachers not equal to numberStudents?`, numberStudents !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log(`Is numberStudents greater than or equal to 20?`, numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(`Is numberStudents greater than or equal to 21?`, numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log(`Is numberStudents less than or equal to 20?`, numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log(`Is numberStudents less than or equal to 21?`, numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This code compares whether or not the first value, 4, is less than the second value, 9.
// If it is, it returns a boolean result of true. If it isn't, it returns false.
// This code will return true, which the console will output.

var books = 3;
console.log(4 < books);
// This code assigns the number value 3 to the variable "books".
// This code then compares whether the number 4 is less than the number value assigned to "books".
// This code will return false, which the console will output.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// This code assigns the numbers 6 and 2 to the variables "friends" and "siblings".
// It then compares whether the value assigned to friends is greater than the value assigned to siblings.
// It will return true, and the console will output that.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// The values 9 and 8 are assigned to the variables "attendees" and "meals".
// The two values are then compared, the code checking whether they are unequal.
// If they are unequal, the console outputs a result of true. If they are equal, it outputs false.
// The values are unequal, so the console will output true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line evaluated to true because I defined "puppy" as less than or equal to 1 year of age.
