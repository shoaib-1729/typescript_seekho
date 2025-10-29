"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberOne = 3;
var numberTwo = "4";
var sum = numberOne + numberTwo;
// number
// typescript will automatically detect the type acc to the value intialized
var num1 = 5; // bad practice
var num2 = 5; // good practice
console.log(num1, num2);
// string
var str1 = "Ni Haao!!"; // bad practice
var str2 = "Ni Haao!!"; // good practice
console.log(str1, str2);
// boolean
var isLoggedIn = true; // bad practice
var isPrime = false; // good practice
console.log(isLoggedIn, isPrime);
console.log(sum);
console.log(typeof (sum));
