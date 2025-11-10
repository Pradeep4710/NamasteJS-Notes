const cart = ["Shoes","Shirt","Pants"];

createOrder(cart)
    .then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){   // handling an error gracefully and avoiding red errors in console
    console.log(err.message);
    return null; // make sure tur return something in catch in order to continue the flow of promise chain otherwise the promises underneath will not work
})
// if theres a .then method after the catch statement, no matter what errors show up, the then statements underneath will occur no matter what
.then(function(orderId){
    console.log("Ashwathama hai mai, catch se fark nipadta BC.");
})

// Producer part of promise
  
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){

    if(!validateCart(cart)){
        const err = new Error("Cart is not valid!")
        reject(err);
    }
    const orderId = "12345";

    if(orderId){
        setTimeout(function(){
            resolve(orderId);
        }, 3000);
    }
    });

    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    // handle payment
    return new Promise(function(resolve, reject){
        // logic of payment
        resolve("Payment successful!")
    });
}