var newUser = {
    _id: "5463",
    name: "Shoaib",
    email: "shoaib@dev.com",
    isLoggedIn: false
};
// _id readonly hai, cannot be changed
// newUserOne._id = "1234"
newUser.name = "Savid";
newUser.email = "savid@dev.com";
newUser.isLoggedIn = true;
console.log(newUser);
var newCar = {
    _id: ["2727", "8727", "7282", "9393"],
    name: "Mahindra",
    price: "10L",
    color: "Black",
    owner: "Shoaib"
};
// this is possible
newCar._id.push("7182");
// this is not possible - kyuki diff. address ko point out kar raha
// newCar._id= ["", ""]
newCar.name = "Suzuki";
newCar.price = "20L";
console.log(newCar);
