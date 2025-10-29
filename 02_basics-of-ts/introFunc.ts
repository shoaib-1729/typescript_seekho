// functions

function addTwo(num: number){
    return num + 2
}


let myValue = addTwo(4)
console.log(myValue);


function toUpper(val: string){
    return val.toUpperCase()
}

const res = toUpper("shoaib")
console.log(res)

let isSignupUser:boolean;
const signupUser = (name: string, email: string, isVerified: boolean) => {
     isSignupUser = true
    return isSignupUser;
}

const result = signupUser("Shoaib", "shoaib@dev.com", true)
console.log(result)


let isSigninUser:boolean;
const signinUser = (name: string, email: string, isUserVerified: boolean = true) =>{
    isSigninUser = true;

    return isSigninUser;
}

signinUser("Raghav", "raghav@store.com")

export {}