
console.log(a);  // undefined
console.log(b);  // says not initialised and a reference error

var a = 10;
let b = 100;

// it happens because in case of var, the memory gets assigned to the variable inside the global scope or window itself, but in case of let and const, they do get allocated space, but they are not stored in the global space but insted in a sperate space, hence they cannot be accessed until or unless they are initialised but allocating some value to them. Hence we can say that let and const are allocated memory and hoisted, but cannot be accessed due to them being in the temporal dead zone.

// Temporal Dead Zone - Time when the variable is declared using let or const but is yet to be initialised some value is called a temporal dead zone

// we can see this in action if we put debugger fist on line 1 and then on line 7 in the browser console

var c = 10;  
c = 1000;  // no error
var c = 100;  // no error

let d = 10;
d = 100;   // no error
// let d = 1000;  // throws error of variable already declared in same block

const e = 10;
e = 100;  // throws syntax error as "Missing initializer in const declaration"

// hence we need to assign value to the const variable with the declaration itself

// const e = 1000;  // throws error of variable already declared in same block



/* NOTE:-
Type error :- Violating the type and characteristic of a vriable, eg re assigning value to const
Syntax error :- Either a missing code or wrong piece of code or also duplicacy of variables
Reference error :- When JS tries to find a variable in memory space which is unaccessable
*/

/* Rankings :-
1. const    // use as much as possible
2. let      // use if const cannot be applied
3. var      // dont use it now
*/


// How to avoid Temporal Zone?
// Do the initialization and declarations at the top of your Javascript code.