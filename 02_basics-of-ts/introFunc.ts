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

// functions with return type

// what if no return is specified ?

function doubleNum(num: number){

    // this could return a string which is wrong here, since this should return a number
    return " "

    // return num * 2
}

const val = doubleNum(8)
console.log(val);


// correct syntax
function tripleNum(num: number): number{
    return num * 3
}

console.log(tripleNum(5))

// arrow function syntax
const isEven = (num: number): boolean => {
    if(num%2==0){
        return true
    }

    return false
}

console.log(isEven(9))

// ....

// special scenerios while handling functions in typescript
// case of no return

// typescript is smart enough to detect what is being returned, so is these cases we can reply on typescript 
function sayHello(): void{
    console.log("Hello, Welcome Home...")
}

sayHello()

// when multiple types of values are being returned - use union types
function welcomeUserMsg(gender: string): string | number | boolean{
    if(gender === "Male"){
        return 'Namaste'
    }

    else if(gender === "Female"){
        return 1
    }

    else{
        return true
    }
}

const val1 = welcomeUserMsg("Male")
const val2 = welcomeUserMsg("Female")
const val3 = welcomeUserMsg("Others")

console.log(val1, val2, val3)

// case of native functions

// map
const items = ["Aloo", "Matar", "Tamatar", "Pepsi"]


// specifying the return type is a good practice
const mappedItems = items.map((item: string): {} => ({
    billedItems: item
}))

console.log(mappedItems)


// filter
const filteredItems = items.filter((item): boolean => {
    return item === "Aloo" || item === "Matar" || item === "Tamatar" ? true : false;
})

console.log(filteredItems)



export {}