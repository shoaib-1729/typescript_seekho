// unions — combination of data types

// keep this as strict as possible, don't try to overkill
let ids: string | number = 123;

ids = "617";

console.log(ids);

// special scenarios while handling functions in typescript

type User = {
    _id: number | string
    name: string
    email: string
    isLoggedIn?: boolean
}


function createUser(user: User){}

createUser({
    _id:123,
    name:"Shoaib",
    email:"shoaib@dev.com"
})

createUser({
    _id:"123",
    name:"Himanshu",
    email:"himanshu@dev.com"
})


type specs={
    _id:number
    name: string
}

type camera={
    pixels: string,
    quality?: string
}

type smartPhone = specs & camera

let redmi: smartPhone = {
    _id: 123,
    name: "Xiomi",
    pixels: "100px",
}

console.log(redmi);

// another use case
let userIds: string[] | number[] = ["724", "929", "827"]

userIds = [782, 838, 763,922]

console.log(userIds);

// but mix type nahi kar sakte hai, ya toh poora string hoga ya toh poora number hoga
// agar dono mix karna hai toh?

let newIds: (string | number)[] = [738, "593", 193, "828"]


// another use case
type location = "state" | "city" | "country"

let currentLocation: location = "state"
currentLocation = "city"

// another use case
function codeName(name: string | number){
    if(typeof name === "string"){
        return name.toLowerCase()
    }

    name.valueOf()

}

codeName("SummerXYZ")
codeName(732)