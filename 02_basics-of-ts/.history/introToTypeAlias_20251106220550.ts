// type alias

// creating type of our own — for example we have to use certain type of data at multiple places then we can use type alias

type User = {
    name: string;
    email: string;
    isLoggedIn: boolean;
}


function createUser(user: User): void{
    console.log(user);
}

createUser({
    name:"Shoaib",
    email:"shoaib@dev.com",
    isLoggedIn:false,
})

function createAnotherUser(user: User): User{
    return {
    name:"Sumit",
    email:"sumit@dev.com",
    isLoggedIn:true,
    }
}


const res = createAnotherUser({
    name:"",
    email:"",
    isLoggedIn:true,
})

console.log(res);


export {}












