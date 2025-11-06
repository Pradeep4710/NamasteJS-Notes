var a = 5;
let b = 6;
const c = 7;

{
    var a = 50;  // this variable will overrites/Shadows the variable inside the block
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a); 

// You will notice that even outside the scope the value of "a" gets modified because both the "a" variables were declared in the global memory using var

// to overcome this issue let and const were introduced in ES6

console.log(b);
console.log(c);

// it was possible because the b and c declared inside the block had block scope hence did not modify the global scope values

// Shadowing can also be seen in the case of functions

function x(){
    var a = 30;
    console.log(window.a);
    window.a = 20;
}

x();
console.log(a);

// value of a inside the function also affected the global value of a

// ILLEGAL SHADOWING

let g = 69;
{
// var g = 6; 
}
// when we try to shadow the same named variable when the variable declared afterwards is crossing the boundries of its block, hence we cant declare g by using let first and then var, whereas it is possible the other way around. i.e declare g with var first and then inside the block declare it with let, then the g inside block will not cross the boundry.
// same is the case with const
