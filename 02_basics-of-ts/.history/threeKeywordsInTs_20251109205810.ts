type User= {
    readonly _id: string
    name: string
    email: string,
    isLoggedIn: boolean
}

const newUserOne: User = {
    _id:"5463",
    name:"Shoaib",
    email:"shoaib@dev.com",
    isLoggedIn:false
}

// _id readonly hai, cannot be changed
// newUserOne._id = "1234"


newUserOne.name = "Savid"
newUserOne.email = "savid@dev.com"
newUserOne.isLoggedIn = true


console.log(newUserOne);

// what if: _id array of ids ho, kya woh phir bhi change ho sakta hai?
type Car= {
    readonly _id: Array<string>
    name: string
    price: string
    color: string
    owner: string
}

const newCar: Car = {
    _id:["2727", "8727","7282", "9393"],
    name:"Mahindra",
    price:"10L",
    color:"Black",
    owner:"Shoaib"
}

newCar._id.push("717")
newCar.name = "Suzuki"
newCar.price = "20L"

console.log(newCar);
