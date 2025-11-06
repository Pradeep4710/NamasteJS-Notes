a(); // a called
// b(); // gives error

// Function statement  - it supports hoisting
function a(){
    console.log("a called");
}
a();


// Function expression   -    it does not support hoisting
var b = function (){
    console.log("b called");
}           // calling function with a value
b();


// Function Declaration
// it is nothing but function statement, these are both the same things


// Anonymous Function  - function without a name or identity, hence it sometimes gives syntax error on its own. These functions are used when the functions are used as values
// function (){}    // This will give error
var c = function (){
    console.log("c made using anonymous funcitons");   // this is the way we use anonymous funcitons
}
c();


// Named Function Expression - when we implement the function expression but insted of using anonymous function we use named funciton

var d = function abc(){
    console.log("d is called, made using named function");
}
d();  // works
// abc(); // gives error, this named function cannot be called as its not defined in a global scope and is being treated as a local variable


// Difference between parameters and Arguments
// parameters are the identifiers or the labels we use when we define the function, whereas arguments are the values we assign and pass in the function while calling them are called arguments.
function paraArg(param1, param2){
    console.log(param1, param2);
}
paraArg("Argument 1","Argument 2");


// First class Funcitons
// The ability of a programming language to treat functions as values, allowing them to be assigned to variables, passed as arguments, and returned from other functions, is known as first-class functions support.
function sayHello() {
  console.log("Hello!");
}

function callFunction(func) {
  func();                  // calling the function passed as argument
}

callFunction(sayHello); // passing a function as a value


// Arrow Functions