"use strict";
// enum class ki tarah hai, naam PascalCase mei likhna hai, enum humei constant ka collection banakar deta hai jise hum baad mei use kar sakte hai
Object.defineProperty(exports, "__esModule", { value: true });
var orderStatus = "success" /* DeliveryStatus.SUCCESS */;
console.log(orderStatus);
var bookOrder = function (name, orderStatus) {
    console.log("".concat(name, " order status = ").concat(orderStatus));
};
bookOrder("laptop", "pending" /* DeliveryStatus.PENDING */);
function getSeatNumber() {
    return 1;
}
function apiResponse() {
    return { type: "success" /* ApiResponseTypes.SUCCESS */, result: { message: "response fetched successfully..." } };
}
var res = apiResponse();
console.log(res);
