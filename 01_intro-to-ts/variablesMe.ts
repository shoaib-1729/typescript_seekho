let numberOne = 3

let numberTwo = "4"

let sum: string = numberOne + numberTwo;

// number
// typescript will automatically detect the type acc to the value intialized
let num1: number = 5 // bad practice
let num2= 5 // good practice

console.log(num1, num2);

// string
let str1: string = "Ni Haao!!" // bad practice
let str2= "Ni Haao!!" // good practice

console.log(str1, str2);


// boolean
let isLoggedIn: boolean = true // bad practice
let isPrime = false // good practice

console.log(isLoggedIn, isPrime);


console.log(sum);
console.log(typeof(sum));

export {};