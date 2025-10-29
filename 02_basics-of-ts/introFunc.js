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
