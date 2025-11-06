"use strict";
// type alias
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log(user);
}
createUser({
    name: "Shoaib",
    email: "shoaib@dev.com",
    isLoggedIn: false,
});
function createAnotherUser(user) {
    user.name = "Sumit";
    user.email = "sumit@dev.com";
    user.isLoggedIn = true;
    return user;
}
var res = createAnotherUser({
    name: "",
    email: "",
    isLoggedIn: true,
});
console.log(res);
function makeCourse(courseName) {
    console.log(courseName);
}
makeCourse("TypeScript");
