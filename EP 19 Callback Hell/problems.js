// js is a single threaded language which performs just 1 action at a time and it waits for none.

console.log("Namaste");

// but what if we want to display it after 5000ms
// this is where callbacks come into picture

setTimeout(function (){
    console.log("Namaste JS Season 2");
},5000);



// lets take example of an ecommerce website to understand problems such as "Callback Hells" and "Inversion of Controll" 



// Callback Hell:-


// creating order, proceed to payment , show order summary and update the wallet at the end

const cart = ["shoes","shirt","pant","coat"];


api.createOrder(cart, function (){

    api.proceedToPayment(function (){

        api.showOrderSummary(function (){

            api.updateWallet()

        })
    });
});

// as we can see this code looks and works abscurdly as there are callback in callback in callback and so on

// such code is very hard to maintain and its also called pyramid of doom



// Inversion of Controll :-

api.makeOrder(cart, function(){

    api.proceedToPayment()

})

// here we gave away our controll to makeOrder API, and it is very risky as proceeed to payment is very important step,
// now its responsibility of makeOrder api to call proceedToPayment api, but what if it was busy? Like ther may be bugs in makeOrder api? What if it never calls ProceedToPayment? What if it calls the payment api multiple times?

// all these problems can occur as we gave away the control to an API