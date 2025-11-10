// unions — combination of data types

// keep this as strict as possible, don't try to overkill
let ids: string | number = 123;

ids = "617";

console.log(ids);

// special scenarios while handling functions in typescript

type User = {
    _id: string
    name: string
    email: string
    isLoggedIn: boolean
}

type UserDetails = {

}

function createUser(){

}
