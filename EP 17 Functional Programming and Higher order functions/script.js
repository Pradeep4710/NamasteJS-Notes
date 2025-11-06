// Higher Order Functions:-
// Function which takes another function as an argument OR returns a function is known as higher-order-function
// example:-

function x(){
    console.log("Namaste");
}

function y(x){
    x();
}

// here x is a callback funtion and y is the higher order funciton


// lets calculate area of 4 circles with the help of higher order functions

const radius = [3,2,6,4];

const calculateArea = function (radius){
    const output = [];
    for(let i =0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

const calculateCircumfrence = function (radius){
    const output = [];
    for(let i = 0 ; i<radius.length ; i++){
        output.push(Math.PI*radius[i]*2)
    }
    return output;
}

console.log(calculateCircumfrence(radius));

const calculateDia = function (radius){
    const output = [];
    for(let i = 0 ; i<radius.length ; i++){
        output.push(radius[i]*2)
    }
    return output;
}

console.log(calculateDia(radius));


// allthe code above is good but it is very repetetive, almost 90% of code in each function is same.

// there is a principal in coding world called DRY (Dont reppat yourself). 
// We can improve our code by adding modularity to our code.
// lets see it in action

// check modular.js