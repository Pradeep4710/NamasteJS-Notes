// allthe code above is good but it is very repetetive, almost 90% of code in each function is same.

// there is a principal in coding world called DRY (Dont reppat yourself). 
// We can improve our code by adding modularity to our code.
// lets see it in action



// we will create modules of functions and then pass them in a generic function, lets try making a generic functions and add modularity to our code

const radius = [5,2,3,4];

const area = function (radius){         // modular code for area
    return Math.PI*radius*radius;
}

const circumfrence = function (radius){         // modular code for circumfrence
    return Math.PI*radius*2;
}


const calculate = function (radius, logic){  // this is out generic code
    const output = [];
    for(let i=0 ; i<radius.length ; i++){
        output.push(logic(radius[i]));
        }
        return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));

// as we can see the modularity makes it look much better and we do not need to write same code again and again, all we need to do is write new logic and pass it through our generic code
// also adds reusability to our code

const diameter = function (radius){         // modular code for diameter
    return radius*2;
}


console.log(calculate(radius, diameter));

// here out calculate function is doing nothing but map, a function given by JS itself but we are doing it manualy which is a good practice.
// lets see hot it will look with map function

// check map.js