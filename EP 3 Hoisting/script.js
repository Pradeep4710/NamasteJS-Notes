// even if we put a debugger while inspecting the code on browser, we will notice that the memory allocaation gets done even before we actully execute the code itself, this is due to the nature of "Execution Context", which works in 2 phases i.e  Memory allocation phase and Code execution phase. This phenomenon causes the hoisting property of javascript.

// var is stored as undefined in the memory and functions are stored as the whole code inside that function in the memory space



getName();  // shows "Namaste Javascript" as code is saved in memory and gets executed
console.log(x);  // shows undefined
console.log(getName); // shows the code inside function

var x = 7;

function getName(){
    console.log("Namaste JavaScript")
}

// if we use hoisting on an arrow funciton, it will treat the arrow function as a varible and show it as undefined

console.log(getname2);

var getname2 =()=>{
    console.log("Hoisted function");
}

// if we do not initialise the variable throughout the code, its memory will not be stored and if we call that variable it will show as not defined instead of undefined.

// calling a variable before declaration - Hoisting, and shows "undefined"
// calling a variable thats not declared in the entirity of code - causes error and shows "not defined"

console.log(y);