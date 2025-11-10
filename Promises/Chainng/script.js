// Consumer Part of the promise

const cart = ["Shoes","Shirt","Pants"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
})
.catch(function(err){   // handling an error gracefully and avoiding red errors in console
    console.log(err.message);
})

// Producer part of promise
  
function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
    // create order
    // validate cart
    // orderId

    if(!validateCart(cart)){
        const err = new Error("Cart is not valid!")
        reject(err);
    }
    // if cart is valid => create order
    const orderId = "12345";

    if(orderId){
        setTimeout(function(){
            resolve(orderId);
        }, 3000);
    }
    });        // promise constructor

    return pr;
}

function validateCart(cart){
    return false;
}