"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var myValue = addTwo(4);
console.log(myValue);
function toUpper(val) {
    return val.toUpperCase();
}
var res = toUpper("shoaib");
console.log(res);
var isSignupUser;
var signupUser = function (name, email, isVerified) {
    isSignupUser = true;
    return isSignupUser;
};
var result = signupUser("Shoaib", "shoaib@dev.com", true);
console.log(result);
var isSigninUser;
var signinUser = function (name, email, isUserVerified) {
    if (isUserVerified === void 0) { isUserVerified = true; }
    isSigninUser = true;
    return isSigninUser;
};
signinUser("Raghav", "raghav@store.com");
// functions with return type
// what if no return is specified ?
function doubleNum(num) {
    // this could return a string which is wrong here, since this should return a number
    return " ";
    // return num * 2
}
var val = doubleNum(8);
console.log(val);
// correct syntax
function tripleNum(num) {
    return num * 3;
}
console.log(tripleNum(5));
// arrow function syntax
var isEven = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
};
console.log(isEven(9));
// ....
// special scenerios while handling functions in typescript
// case of no return
// typescript is smart enough to detect what is being returned, so is these cases we can reply on typescript 
function sayHello() {
    console.log("Hello, Welcome Home...");
}
sayHello();
// when multiple types of values are being returned - use union types
function welcomeUserMsg(gender) {
    if (gender === "Male") {
        return 'Namaste';
    }
    else if (gender === "Female") {
        return 1;
    }
    else {
        return true;
    }
}
var val1 = welcomeUserMsg("Male");
var val2 = welcomeUserMsg("Female");
var val3 = welcomeUserMsg("Others");
console.log(val1, val2, val3);
// case of native functions 
// map
var items = ["Aloo", "Matar", "Tamatar", "Pepsi"];
var mappedItems = items.map(function (item) { return ({
    billedItems: item
}); });
console.log(mappedItems);
var filteredItems = items.filter(function (item) {
    return item === "Aloo" || item === "Matar" || item === "Tamatar" ? true : false;
});
console.log(filteredItems);
