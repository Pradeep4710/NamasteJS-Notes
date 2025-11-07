// Destructuring is a technique in JS using which Taking values from arrays or properties from objects and set them as local variables. Using this technique, we can make our js ode more cocise and readable.



// Leyts see an example of Array destructuring

// conventional approach:-
const arr = ['🍕','🍔','🍟'];

// const pizza = arr[1];
// const burger = arr[2];
// const fries = arr[3];

// this approach is very repetittive and takes alot of lines of code, to solve which we use the technique called destructuring

// using single line of code 

const [pizza, burger, fries] = [arr];

console.log(arr[1])

// if we want to name just a single variable and leave the rest as blank then we can just use comas and leave the spaces empty and assign the value to the element we want to name, eg. :-

// const [, , fries] = [arr];
// in  the code above the first 2 elements will not get any name assigned to them whereas the fries i.e the 3rd element will get the name assigned as 'fries';



// if we ant to assign names to just the starting few variables and leave the rest as is then we can use the spread operator(...rest) after assigning a few names;

//eg:-    const [pizza, ...rest] = [arr];







// In addition of arrays, destructuring also applies on objects:-


const obj = {
    banana:'🍌',
    apple:'🍎',
    mango:'🥭'
}

const banana = obj.banana;
const apple= obj.apple;
const mango = obj.mango;

// just like in case of arrays, we can insted of using multiple lines f code can just assign the variable values in a single line using the concept of destructuring.

// const{banana, apple, mango} = obj

// we can also rename the the object 
// caont{banana: minions} = obj 