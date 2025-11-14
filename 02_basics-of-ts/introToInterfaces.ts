// interface is like a class but with very limited powers, a contract for types 

// contract
interface User{
    readonly userId: number,
    name: string,
    email: string,
    isLoggedIn: boolean,
    getUserId: (username: string) => number,
    // another way to declare methods type signature
    // getUserId(username: string): number,
}



const user1: User={
    userId: 1,
    name: "sudeep",
    email: "sudeep@learner.com",
    isLoggedIn: true,
    getUserId: (name: string) => {
        return 141;
    }
}


const res = user1.getUserId("sudeep");
console.log(res);

console.log(user1);

// ------------------------------------------------------------------------------


// inheritance in interfaces
interface Student{
    readonly userId: number,
    name: string,
    email: string,
    isLoggedIn: boolean,
    getUserId: () => number,
}

interface Instructor extends Student{
    role: "admin" | "ta" | "learner"

}


const testUser: Instructor={
    userId: 572,
    name: "hritik",
    role: "admin",
    email: "hritik@instructor.com",
    isLoggedIn: true,
    getUserId: function() {
        return this.userId;
    }
}

console.log(testUser.getUserId());

// -------------------------------------------------------------------------------------

// merging in interfaces

type Client = {
    readonly userId: number,
    name: string,
    email: string,
    serviceValidity: () => string
}

interface Service{
    readonly serviceId: number,
    user: Client
}

interface Service{
    getServiceValidity(): string,
}


const sachinTendulkar: Service = {
    serviceId: 0,
    user: {
        userId: 582,
        name: "Sachin Tendulkar",
        email: "sachin_tendulkar@cricket.in",
        serviceValidity: () => {
            return "20th November 2027";
        },
    },
    getServiceValidity: function (){
        return `${this.user.name}'s service is valid`;
    }
}

console.log(sachinTendulkar.getServiceValidity())
console.log(sachinTendulkar.user.serviceValidity());