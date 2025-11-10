// unions — combination of data types
// keep this as strict as possible, don't try to overkill
var ids = 123;
ids = "617";
console.log(ids);
function createUser(user) { }
createUser({
    _id: 123,
    name: "Shoaib",
    email: "shoaib@dev.com"
});
createUser({
    _id: "123",
    name: "Himanshu",
    email: "himanshu@dev.com"
});
var redmi = {
    _id: 123,
    name: "Xiomi",
    pixels: "100px",
};
console.log(redmi);
// another use case
var userIds = ["724", "929", "827"];
userIds = [782, 838, 763, 922];
console.log(userIds);
// but mix type nahi kar sakte hai, ya toh poora string hoga ya toh poora number hoga
// agar dono mix karna hai toh?
var newIds = [738, "593", 193, "828"];
var currentLocation = "state";
currentLocation = "city";
// another use case
function codeName(name) {
    if (typeof name === "string") {
        return name.toLowerCase();
    }
    return name.valueOf();
}
console.log(codeName("SummerXyz"));
console.log(codeName(732));
