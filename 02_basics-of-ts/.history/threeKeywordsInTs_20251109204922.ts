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

newUser.name = "Savid"
// newUser._id = "1234"

console.log(newUser);