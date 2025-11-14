// interface is like a class but with very limited powers, a contract for types 
var user1 = {
    userId: 1,
    name: "sudeep",
    email: "sudeep@learner.com",
    isLoggedIn: true,
    getUserId: function (name) {
        return 141;
    }
};
var res = user1.getUserId("sudeep");
console.log(res);
console.log(user1);
var testUser = {
    userId: 572,
    name: "hritik",
    role: "admin",
    email: "hritik@instructor.com",
    isLoggedIn: true,
    getUserId: function () {
        return this.userId;
    }
};
console.log(testUser.getUserId());
var sachinTendulkar = {
    serviceId: 0,
    user: {
        userId: 582,
        name: "Sachin Tendulkar",
        email: "sachin_tendulkar@cricket.in",
        serviceValidity: function () {
            return "25th April 2025";
        },
    },
    getServiceValidity: function () {
        return "".concat(this.user.name, "'s service is valid");
    }
};
console.log(sachinTendulkar.getServiceValidity());
console.log(sachinTendulkar.user.serviceValidity());
