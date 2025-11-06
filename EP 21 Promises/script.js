// consumer part of promise

const cart = ["suit","pant","shoes","socks","belt"];

const promise = createOrder(cart); // returns orderdD
console.log(promise);

promise.then(function(orderId) {
    console.log(orderId)
    //proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message)
})


// Producing part of promise


function createOrder(cart){
    
    // create order > validate Car > order ID > success | failure
    const pr = new Promise(function(resolve, reject){   // promise constructor
        // these resolve and reject are given to us by JS we just need to define them
        if (!validateCart(cart)){
            const err = new Error("cart is not valid"); // creating a dummy error
            reject(err)
            // we should not just display a red error in browser console and always handle the reject part of promise too by using .catch
        }

        // logic to create order
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){resolve(orderId)},5000);
        }
    })
    return pr;  
}

function validateCart(cart){ // making the validate function true by default in order to see the promise work
    return true;  // we can put false here for checking the reject part of the promise
}

// we can write the logic to check validity of cart in this function