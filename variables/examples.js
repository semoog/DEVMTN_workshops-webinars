// ALERTS
// alert("Thanks for your input!");

// VARIABLES

// • A variable name can't contain any spaces.
// • A variable name can contain only letters, numbers, dollar
//   signs, and underscores.
// • Though a variable name can't be any of JavaScript's
//   keywords, it can contain keywords. For example, userAlert
//   and myVar are legal.
// • Capital letters are fine, but be careful. Variable names are
//   case sensitive. A rose is not a Rose.

var myName = "Sebastian";
// console.log(myName);

myName = "semo";
// console.log(myName);

var myNationality;
myNationality = "DK";
// console.log(myNationality);

// __________________________________________

var originalNum = 10;
var newNum = originalNum + 5;
//  newNum =      10     + 5;

// originalNum = "10";
// newNum = originalNum + 5;
// //          "10"     + 5;

// console.log(newNum);

// __________________________________________

// MATH EXPRESSIONS

var newVar = 5 + 5;
var anotherVar = 5 * 4;

var combinedVar = newVar + anotherVar;
// console.log(combinedVar);

var remainder = 10 % 3;
// console.log(remainder);

// __________________________________________

var num = 0;

num++;
// console.log(num);

// __________________________________________

newNum = num++; // Won't work.
// console.log(newNum);
// console.log(originalNum);

newNum = ++num; // Will work.
// console.log(newNum);

// __________________________________________

var totalCost = 1 + 3 * 4; // PEMDAS
console.log(totalCost);
