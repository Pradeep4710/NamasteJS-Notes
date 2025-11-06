// Lets see promise chaining

const cart = ["suit","pant","shoes","socks","belt"];

// createOrder(cart)
//     .then(function(orderId) {
//         console.log(orderId)
//     })
//     .then(function(){
//         proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo){
//         console.log(paymentInfo)
//     })
//     .catch(function(err){
//         console.log(err.message)
//     });

// the code above may look fine but it has a major issue, remember we always need to return whats being used in next chained promise as the argument? That is the issue, lets solve it.

createOrder(cart)
    .then(function(orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo)
    })
    .catch(function(err){
        console.log(err.message)
    });


    // the catch will handle any of the error occuring in any of the then methods above it, hence its recomended to use multiple catch methods in a very long promise chain in order to find the error faster

    // NOTE:- even id there are then methods under the catch they will still get executed, but their errors will not be handled by the catch method present above it

function createOrder(cart){

    const pr = new Promise(function(resolve, reject){ 
        if (!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err)
        }

        const orderId = "12345";
        if(orderId){
            setTimeout(function(){resolve(orderId)},5000);
        }
    })
    return pr;  
}

function proceedToPayment(){
    return new Promise(function(resolve, reject){
        resolve("Payment successful")
    });
}

function validateCart(cart){
    return true;
}

/*
Homework:-

createOrder,
proceeedToPayment,
showOrderSummary,
updateWallet

write code for this prom,ise chaining and make sure to return promises and also handle their errors

*/ 