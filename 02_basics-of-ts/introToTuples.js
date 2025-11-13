"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userIds = [828, "717", "919"];
// array of fix length
var ids = ["0", 282, 919];
// use cases
var rgb = [171, 118, 219];
// since, tuple bss javascript ke array ke upar ek extra type layer add karta hai, isiliye yeh array ke saare operations ko support karta hai, aur yahi iska major drawback bhi hai ki tuple conceptual level par fixed length ka hone ka baawjood bhi technically grow kar sakta hai
rgb.push(818);
console.log(rgb);
// solutions
// make it readonly taaki push naa ho paaye
var ratings = [74, "Good", 64];
// now this is not allowed
// ratings.push("Bad")
console.log(ratings);
// use cases
// tuples with functions
function greetUser(_a) {
    var greeting = _a.greeting, userId = _a.userId;
    return [greeting, userId];
}
var res = greetUser({
    greeting: "Hello",
    userId: 123
});
var name = res[0], id = res[1];
console.log(res);
console.log(res.join(""));
var thor = ["Thor123", 8181];
// tuples ki values change bhi kar sakte hai, immutable nahi hai python ki tarah
thor[0] = "Superman818";
console.log(thor);
