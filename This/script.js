//The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.



"use strict"  // turn strict more on/off to see different behaviour of this keyword in different circumstances


// this in Global scope

console.log(this); 
// this in global scpe will always return the GlobalObject (window object)


// this inside a function

function x(){
    console.log(this)
}
x(); 
// the value will depend on strict/non strict mode, nonstrict -> window/global object, strict -> undefined 


// this in strict mode - (this substitution)
// this substitution -> if the value of this keyword is undefined or null, then thiss will be replaced with global object
// only in non strict mode 


//this value depends on how this keyword is called (window)
x();   // shows undefined (in strict mode)
window.x();  // shows window object (even inside strict mode)


// this inside an object's method
const student1 = {
    name: "Rahul",
    printName: function(){
        console.log(this.name)
    },
};

student1.printName();   // here the this keyword points to the object itself

const student2 = {
    name: "Jessika"
};



// call apply bind methods (sharing methods):-

// how can we share the function printName with another object (student2)?
// we can use the funciton .call() and uverrice the original method call
student1.printName.call(student2)  // value of this becomes student2



// this inside arrow functions
const obj = {
    a: 10,
    x: function(){
        console.log(this)
    }
}
obj.x(); // the output shows x:10 and x:f where f is a shorthand of funciton.

// whereas if we use arrow funciton then....
const obj1 = {
    a: 10,
    x:() => {
        console.log(this)
    },
};
obj1.x(); // here the value of this becomes window object
//Why does this happen?
// Arrow functions do not have their own this.
// Instead, they inherit this from the surrounding (lexical) scope where they were defined.


// this inside nested arrow funcitions
const obj2 = {
    a: 10,
    x:function() {
        const y = ()=>{
            console.log(this)
        }
        y()
    },
};
obj2.x(); // now if we see, the output of this becomes the obj2, why is that so?
// This is because the arrow funciton has been enclosed within the outer function and its context becomes the lexical context of the this keyword. Hence in case of nested functions for this keyword takes the value of the outer object/function


// this inside DOM
// check HTML 