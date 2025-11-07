/**

* What is Async?
* What is Await?
* How async works behind the scenes?
* Example to use async/await
* Error Handling
* Interview quesitons
* Async Await vs Promise.then/.catch

*/


const p = new Promise((resolve, reject)=>{
    resolve("Promise resolved");
});

// async and await are used to handle promises

/* lets see how we ued to hadle the promises before async and await

function getData(){
    p.then((res) => console.log(res))
}

getData();
*/

// now lets see how async/await handles it

async function handlePromise(){
    const val = await p;
    console.log(val)
}

handlePromise()

// we use await in front of the promise that needs to be resolved

// await can only be used inside an async function  



// lets see how handling promises conventionally differ from handling promises using async await


const fn = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Some Value resolved");
    },3000)
});


function norm(){
    fn.then((res) => console.log(res))

    console.log("Res + olved")
}

norm();

// as we can see that the "Res + olved" is getting executed first and then the promise is getting resolved after some timeout , now what if we wanted to wait for the promise to gety resolved first and then execute the rest of the code inside the function?

 // lets see what happens with async/await


 async function stp(){
    const val = await fn;
    console.log("Namaste async");
    console.log(val)
 }

 stp()

 // as we can see, the function first waits for the function fn to get resolved and then continues to execute the rest of the code only when a value is returned from the awaited promise

 // what if there are 2 promises with 5 seconds and 10 seconds and we call promise with 10s first and then 5, both using await. then what happens?

 // Lets see

const ten = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("10s");
    },10000)
});

const fiv = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("5s");
    },5000)
});

async function mul(){
    const val1 = await ten;
    console.log("JS 1")
    console.log(val1)
    
    const val2 = await fiv;
    console.log("JS 2")
    console.log(val2)
}

mul()

// seems like our JS funciton is waiting for all the promises to get resolved and then returning all then values at once. but what if we reverse the order and call the function with 5 sec execution time first?

async function nul(){
    const val2 = await fiv;
    console.log("JS A")
    console.log(val2)

    const val1 = await ten;
    console.log("JS B")
    console.log(val1)
}

nul()

// Okay so the funciton doest wait for all the promises to get resolved, insted it works line by line like a normal js code only, so both the promises are getting resolved in the back end of JS engine and when the first function when get resolved at 5 seconds it gets resolved and after that  