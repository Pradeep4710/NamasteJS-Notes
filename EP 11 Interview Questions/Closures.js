// What is closure? 
// => Closure is the combination of a function bundled with its lexical scope.

function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    // let a =10;  it will still work as var a is still in closure of inner()
    return inner;
}

outer()(); // helps to execute the returned funciton immediately.

// we can also return inner() inside and then just outer() outside


// what if outer funciton has an argument?

function ouuter(b){
    let a = 10;
    function iner(){
        console.log(a,b);
    }
    return iner;
}

let closure = ouuter("hello world");

closure();

// what if we enclose even the outer function? Will inner be able to access new variables in the outer most function closure?

function oouutt(){
    var c = 3;
        function outt(b){
        let a = 10;
            function inn(){
                console.log(a,b);
            }
        return inn;
    }
    return outt;
}

let clo = (oouutt())("Hello World"); 
clo();

// using the double () approach so we can call the inner function using some argument which is  needed to run

// What if theres a global variable with conflicting name? 

let a = 69;

// It does not affect as the variable reference in its closure or lexical scope

// if the same named variable was nowhere to be found in the lexical scope then it would have gone to the global scope after following the scope chain





// Advantages of closures??
/*
1. Function Curry
2. Module pattern
3. Helps in data hiding and encapsulation
4. used in higher order function like memoise and ones
*/


// what is data hiding and encapsulation?
/*
Data hiding - Applying data privacy to some particular data to avoid its direct use by any other function or method in the rest of the code.
This process of hiding the vulnurable data is also called encapsulation
eg:-
*/

function counter(){
    var count = 0;
    return function incrementCount(){
        count++;
        console.log(count);
    }
}

// now this count variable cannot be directly accessed from outside the function closure

// to access the count we need to make a new variable 

var count1 = counter();
count1();
count1();

// What if we create 2 variables? Will it affect the original counter variable?

var count2 = counter();
count2(); count2();  count2(); count2();

// No, it will create a completely new counter and will not affect the values



// is this code for counter good and scalable?
// no, we should rather use a constructor function for more scalable counter

function Ccounter(){
    var count =0;
    this.incrementCount = function(){
        count++;
        console.log(count)
    }
    this.decrementCount = function(){
        count--;
        console.log(count)
    }
}

var ccount1 = new Ccounter();  // as it is a constructor function, we need to use the new keyword

ccount1.incrementCount();
ccount1.incrementCount();
ccount1.decrementCount();


// disadvantages of closures

/**
 * Highly memory demanding as everytime a closure is formed it consumes a lot of memory
 * Sometimes the closed over variables are not garbage collected
 * This can lead to memory leaks as it doesnt get garbage collected and it can pile up and slow down browser if not handled properly
 */

// What is garbage collector?
// It is a program in the javascrep engine which frees up the unutilised memory, it takes out the unused variables out of the memory when it considers them not relavant to the code anymore.

// Relation between garbage collector and closures?


function ab(){
     var x = 0;
     var z = 6;  // gets garbage collected by the V8 engine smart garbage collector
     return function bc(){
        console.log(x);
     }
}

ab();

 // here x gets garbage collected after the code gets executed

let y = a();

// now that we have assigned the code of y closure, the garbage value does not get collected even if the y is not used at all.

// but in new and advanced browser have smart garbage collectors


// what is smart garbage collector in browsers?
// The smart garbage collector in the V8 engine will even tho keep the values and code of function b but it will remove the variable z from the context as it does not get accessed even in the function, so if we check the console and the context in the browser we will se that there is no memory allocated  to Z. This is how the new V8 JS engine manages the memory with smart garbage collector