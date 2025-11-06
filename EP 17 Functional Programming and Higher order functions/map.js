// here out calculate function is doing nothing but map, a function given by JS itself but we are doing it manualy which is a good practice.
// lets see hot it will look with map function

const radius = [5,2,3,4];

const area = function (radius){         // modular code for area
    return Math.PI*radius*radius;
}
const circumfrence = function (radius){         // modular code for circumfrence
    return Math.PI*radius*2;
}
const diameter = function (radius){         // modular code for diameter
    return radius*2;
}

console.log(radius.map(area));
console.log(radius.map(circumfrence));
console.log(radius.map(diameter));

// as we can see it is the exact same output.


// you may think that the calculate function took 2 arguments whereas map takes only one, then hoe is it similar?

// lets make the calculate function exactly the same as map by making it a property which is accessable by all the arrays in the code

Array.prototype.calculate = function (logic){  // this is our modified generic code
    const output = [];
    for(let i=0 ; i<this.length ; i++){
        output.push(logic(this[i]));
        }
        return output;
}

// here, this is a pointer to the array we attach out calculate function to

console.log(radius.calculate(area));
console.log(radius.calculate(circumfrence));
console.log(radius.calculate(diameter));

// as we can see, it gives same output