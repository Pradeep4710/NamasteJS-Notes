// What is callback function in Javascript?
// => A callback function in JavaScript is a function that is passed as an argument to another function, and it is called after something happens or when a task is done.
// in callback we give the functionality of a function to some other function so the task  can be performed some time later in the code based on certain events.

setTimeout(function(){
    console.log("Timeout")
}, 2000);

function x(y){
    console.log("x");
    y();
}
x(function y(){   // here y is a callback function
    console.log("y");
})
// when we execute this code and check our call stack we notice that after x and y are printed on console, the callstack gets empty, but after 2000ms the anonymous function comes inside the call stack and gives "timeout" as output. 
// This is how javascript tries to avoid blocking the main thread of JS, as JS is a single threaded language we always try to make async funtions of operations which we know are going to take time and may block the flow of execution of code. With the help of callbacks and async operations we free out callstack for other operations to keep on executing while the operation which needs some time to execute gets completed in a different memory space


// JavaScript is a synchronous language and single-threaded language

// Blocking the main thread

// Power of Callbacks?


// Deep about event listeners
// document.getElementById("clickMe").addEventListener("click", function increment(){
//     console.log("Button clicked");
// })
// add a counter to it

function attachEvent(){  
// we enclose the counter and the function inside another function so its encapsulated and cannot be accessed from outside
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function increment(){
        console.log("Button clicked", ++count);
    });
}
attachEvent();  // we always need to return the closure function in order for it to work


// Closures Demo with Event Listeners 

// Garbage collectors

// whenever we create a closure of callback function, even tho it doesnt show on call stack but its assigned some memory and stays stored in browser which cannot be removed as it may be required later.
//Hence we shoul always use less callback functions  and free up memory to make the page more responsive