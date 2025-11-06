// even for the empty js code, js engine still does its work. 
// eg. "Window" object and its functions and variables
// eg. "This" keyword gets defined, which points to the window object

// => Check in console

// put a debugger on browser to see all this in action


// window object is considered as the global object

// global space => anything which is not enclosed inside a function in JS is considered to be in global space, eg:-

var a = 10; // inside global space

function infun(){
    var y = 10;  // outside global space and enclosed in function
}

// we can access "a" using "window" and "this" but not "b"

console.log(window.a);
console.log(this.a);
console.log(window.b);
console.log(this.b);