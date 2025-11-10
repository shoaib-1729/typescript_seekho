// type alias

// creating type of our own

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
 name:"Shoaib",
    email:"shoaib@dev.com",
    isLoggedIn:true,
    }
}









