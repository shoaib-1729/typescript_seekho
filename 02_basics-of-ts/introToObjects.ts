
function createUserInDB({name, description, isGoogleAuth}:{name: string, description: string, isGoogleAuth: boolean}): {}{
    
   const newUser = {
    name,
    description,
    isGoogleAuth,
}
    return {
        status: "success",
        newUser,
        message: "user created successfully",
    }
}

const res = createUserInDB({name: "Shoaib", description: "Software Engineer", isGoogleAuth: false})
console.log(res)

function createAnotherUser({name, isPaid}:{name: string, isPaid: boolean}):{}{
    return {
        status: "success",
        name,
        isPaid,
        message: "user created successfully..."
    }
}

let randomUser = {
    name: "Rahul", isPaid: false, email: "demo@gmail.com"
}

console.log(createAnotherUser(randomUser))

export {}