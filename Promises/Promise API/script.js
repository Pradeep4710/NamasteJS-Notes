// Promise.all() = it returns an array of values if all the promises get resolved and an error if any of the promises get rejected

const p1 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p1 Success!"), 3000)
})
const p2 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("p2 Success!"), 1000);
    setTimeout(()=> reject("p2 Failed!"), 1000);
})
const p3 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p3 Success!"), 2000);
})

Promise.all([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err); // we can show error inside the console using console.error as well
});

 


// Promise.allSettled  => it returns an object

const p4 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p4 Success!"), 6000)
})
const p5 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("p2 Success!"), 1000);
    setTimeout(()=> reject("p5 Failed!"), 4000);
})
const p6 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p6 Success!"), 5000);
})

Promise.allSettled([p4, p5, p6])
.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});



// Promise.race() => returns the first settled promise gets returned (no matter if its rejected or resolved)

const p7 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p7 Success!"), 9000)
})
const p8 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("p2 Success!"), 1000);
    setTimeout(()=> reject("p8 Failed!"), 8000);
})
const p9 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p9 Success!"), 7000);
})

Promise.race([p7, p8, p9])
.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});



// promise.any() => returns the bvery first promise to get resolved

const p10 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p10 Success!"), 12000)
})
const p11 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("p2 Success!"), 1000);
    setTimeout(()=> reject("p11 Failed!"), 10000);
})
const p12 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("p12 Success!"), 11000);
})

Promise.any([p10, p11, p12])
.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});


// if all of them are rejected then the method will give us an aggregate error

const p13 = new Promise(function(resolve, reject){
    setTimeout(()=> reject("p13 Failed!"), 13000)
})
const p14 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("p2 Success!"), 1000);
    setTimeout(()=> reject("p14 Failed!"), 14000);
})
const p15 = new Promise(function(resolve, reject){
    setTimeout(()=> reject("p15 Failed!"), 15000);
})

Promise.any([p13, p14, p15])
.then(res => {
    console.log(res);
})
.catch((err)=>{
    console.error(err);
});

// if we want to check errors as well and not just an aggregate error message, we can use console.error(err.errros);