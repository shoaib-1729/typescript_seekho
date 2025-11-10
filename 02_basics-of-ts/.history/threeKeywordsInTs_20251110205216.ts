type User= {
    readonly _id: string
    name: string
    email: string,
    isLoggedIn: boolean
}

const newUser: User = {
    _id:"5463",
    name:"Shoaib",
    email:"shoaib@dev.com",
    isLoggedIn:false
}

// _id readonly hai, cannot be changed
// newUserOne._id = "1234"


newUser.name = "Savid"
newUser.email = "savid@dev.com"
newUser.isLoggedIn = true


console.log(newUser);

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

// this is possible
newCar._id.push("7182")

// this is not possible - kyuki diff. address ko point out kar raha
// newCar._id= ["", ""]


newCar.name = "Suzuki"
newCar.price = "20L"

console.log(newCar);


// ---------------------------------------------------------

// ? keyword

type Book = {
    name: string
    genre: string
    price: string

    // here publisher is optional
    publisher?: string
}


function purchaseBook(book: Book){
    return book;

}


const res = purchaseBook({
    name: "Alchemist",
    genre: "Fiction",
    price: "200",
})

console.log(res);