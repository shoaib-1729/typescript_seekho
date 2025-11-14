// enum class ki tarah hai, naam PascalCase mei likhna hai, enum humei constant ka collection banakar deta hai jise hum baad mei use kar sakte hai

// there are string enums and numeric enums
// more on TS DOCS: https://www.typescriptlang.org/docs/handbook/enums.html

const enum DeliveryStatus {
    SUCCESS= "success",
    PENDING= "pending",
    FAILED= "failed",
    success= "success"
}

const orderStatus = DeliveryStatus.SUCCESS
console.log(orderStatus);

const bookOrder = (name: string, orderStatus: DeliveryStatus) => {
    console.log(`${name} order status = ${orderStatus}`)
}

bookOrder("laptop", DeliveryStatus.PENDING)

// some use cases
const enum SeatAllotment{
    // not allowed, enums must be initialized with constant expressions
    // DEMO=getSeatNumber(),
    DEMO=1,
    UPPER="upper",
    MIDDLE="middle",
    LOWER=0
}

function getSeatNumber(){
    return 1
}


// api response types
const enum ApiResponseTypes{
SUCCESS= "success",
PENDING= "pending",
FAILED= "failed",
}

function apiResponse(){
    return {type: ApiResponseTypes.SUCCESS, result:{message: "response fetched successfully..."}}
}

const res = apiResponse()
console.log(res);

export {}