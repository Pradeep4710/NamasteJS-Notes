
console.log(a);
var a = 6;

// memory gets allocated to a even before the line 3 is executed, hence if we console.log a before its declaration it will show undefined.

console.log(a); // now the console shows 6.

// hence undefined can be considered as a place holder for a variable which is kept for the time being until the variable is assigned some other value.

var b;
console.log(b);

// so even after declaring a variable, and not given any value, it will still show undefined as the value of variable never got updated.

// javascript is a loosely typed language or weakly typed language, as here we can assign any value to the variables be it string int bool etc unlike java and c++ where we need to assign specific value to the specific keywords of variables.

console.log("---------------------------------------------");

// lets take example of loose behaviour, hoisting and undefined variable

console.log(c); // undefined
var c;
console.log(c); // undefined
c=10;
console.log(c); // 10
c="Hello World!";
console.log(c); // "Hello World!"


// NOTE: Its not a good practice to assign any variable the value "undefined" , its a special keyword and it is not considered a good practice to do such thing

var why = undefined;  // you stupid
console.log(why);  // what did u expect? popcorns?