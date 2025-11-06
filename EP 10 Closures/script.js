// Closure => Function along with its lexical environment forms the closure of that function

// we can use functions as parameter for functions and also we can return a function as an output from a function

function x(){
    var a = 5;
    return function y(){
        console.log(a);
    }
}

var z = x();
console.log(z);

// the console.log(z) will return the function y

z(); 

// even tho the x function no longer exists, but the y function stored inside z, remembers its lexical scope

// hence when we assign a variable the value of a funciton, we not only assign the function code to it, it gets assigned the closure of that function i.e. the lexical scope of that function.

// what happens when u try to access the variables present at 2 different levels? Will it return value?

function b(){
    var c = 5;
    function d(){
        var e = 15;
        function f(){
            console.log(c,e);
        }
        f();
    }
    d();
}
b();

// answer is yes, none of the variables in lexical scope go to garbage collector