// Map => it is a function used to transform each and every element of an array and return a new array;

const arr = [5,4,3,1];

function double(x){
    return x*2;
}

const output = arr.map(double);

console.log(output);

function binary(x){
    return x.toString(2);
}

const bin = arr.map(binary);

console.log(bin);

/* 
NOTE:-

to convert an array to binary we can use .toString(2) function

Similarly :-
x.toString(2)   // Binary (base-2)
x.toString(8)   // Octal (base-8)
x.toString(10)  // Decimal (base-10, default)
x.toString(16)  // Hexadecimal (base-16)


And for specific base or number systems we can use:-


function convert(x, base) {
    return x.toString(base);
}

console.log(convert(15, 2));   // "1111"  (binary)
console.log(convert(15, 8));   // "17"    (octal)
console.log(convert(15, 10));  // "15"    (decimal)
console.log(convert(15, 16));  // "f"     (hexadecimal)

*/


// Insted of writing the code seperately we can also just write function inside the map() function

const tripple = arr.map(function tri(x){
    return x*3;
})

console.log(tripple);


// Similar can be done with arrow functions 


const half = arr.map((x)=>{
    return x/2;
})

console.log(half);

// in case of array function if the function contains only 1 return statement or code, we can avoid adding braces and return statement too, we can directly write the functionality and it will work

const hal = arr.map((x)=> x/2);

console.log(hal);

// as we can see it looks much better and is a perfectly valid javascript code




// Tricky map() qustion
// Create/Find a list made of full names of users

const users = [
    {firstName:"Shakti" , lastName:"Maan" , age:23},
    {firstName:"Dead" , lastName:"Pool" , age:45},
    {firstName:"Iron" , lastName:"Man" , age:36},
    {firstName:"Captain" , lastName:"America" , age:53}
]


const fullNames = users.map( x => x.firstName + " " + x.lastName );

console.log(fullNames);