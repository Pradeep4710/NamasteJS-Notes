// creating an rder using callback functions only

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// this can cause inversoin of controll, hence we use promises


// using promises to exewcute same operation
// const promise = createOrder(cart);

// promise is  nothing but an empty data object => {data: undefined}, it is initially empty but once the async operation of getting the promise data is completed then the promise object gets its value

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// once the promise gets executed, then the callbackattached to the promise gets executed automatically.

// promise is different from callback because in promise we attach a callback funtion to it and in nested callbacks we were passing the callback funtion in another function


// fetch() funtion => it is an inbuilt funtion given to us by the browser usig which we can retrieve data from the web

const GIT_API = "https://api.github.com/users/Pradeep4710" 
const user = fetch(GIT_API);

console.log(user);  

// it just shows a promise object but not the user name, because the promise is still in pending state, rewsult may varry in different browsers

user.then(function(data){
    console.log(data);
});


// lets try and solve the callbalckhell issue with the callbacks while implementing nested call

const cart = ["shoes" , "shirt" , "Pants"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showorderSummary(paymentInfo, function(){
            updateWallet;
        });
    });
});  // this method leads to inversion of controll and callback hell

const promise = createOrder(cart);

// lets apply promise chaining to overcome the problem 

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    return showorderSummary(paymentInfo)
})
.then(function (paymentInfo){
    return updateWallet(paymentInfo);
})

// we can also use arrow functions to perform promise chaining aswell which wil look like:-

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showorderSummary(paymentInfo))
    .then((paymentInfo) =>  updateWallet(paymentInfo));