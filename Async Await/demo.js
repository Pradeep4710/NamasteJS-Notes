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


// Async/await always returns a promise, if it returns a value, then it first wraps the value inside a promise and then return that promise

// if we return a promise from the async/await, it will return that promise itself

async function getData(){
    return p;
}


const dataPromise = getData();

// console.log(dataPromise) => this will return a promise so lets get the data to print directly

dataPromise.then((res)=> console.log(res));