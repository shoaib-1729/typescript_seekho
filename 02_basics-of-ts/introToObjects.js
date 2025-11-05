"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUserInDB(_a) {
    var name = _a.name, description = _a.description, isGoogleAuth = _a.isGoogleAuth;
    var newUser = {
        name: name,
        description: description,
        isGoogleAuth: isGoogleAuth,
    };
    return {
        status: "success",
        newUser: newUser,
        message: "user created successfully",
    };
}
var res = createUserInDB({ name: "Shoaib", description: "Software Engineer", isGoogleAuth: false });
console.log(res);
function createAnotherUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    return {
        status: "success",
        name: name,
        isPaid: isPaid,
        message: "user created successfully..."
    };
}
var randomUser = {
    name: "Rahul", isPaid: false, email: "demo@gmail.com"
};
console.log(createAnotherUser(randomUser));
