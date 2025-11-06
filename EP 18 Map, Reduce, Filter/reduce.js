// .reduce() takes an array and reduces it to one value by applying a function that combines each element with an accumulated result.

const arr = [5,2,4,1,3];

// find sum of array 

// how we used to do:-

function findSum(arr){
    let sum = 0;
    for (let i=0 ; i<arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

// Now lets see using reduce fintion 

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

// here acc, curr and ,"0" are accumulator, current value and the initial value of the accumulator



// lets try and understand with another example, lets find max value in array

// traditional way

function findMax(arr){
    let max = 0;
    for (let i=0 ; i<=arr.length ; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

// With the help of reduce 

const outmax = arr.reduce(function max(acc, curr){
    if(acc < curr){
        acc = curr;
    }
    return acc;
},0);

console.log(outmax);


// Tricky reduce() qustion
// Find number of people are of a particular age?

const users = [
    {firstName:"Shakti" , lastName:"Maan" , age:23},
    {firstName:"Dead" , lastName:"Pool" , age:45},
    {firstName:"Iron" , lastName:"Man" , age:45},
    {firstName:"Captain" , lastName:"America" , age:53}
]

// we will be using reduce here because we need to find one object with different unique values of count of individual values

const ages = users.reduce(function (acc, curr){
    if(acc[curr.age]){ // if there is another value present acc is present then it will work
        acc[curr.age] = ++ acc[curr.age]
    }
    else{  // else it will just assign it 1
        acc[curr.age] = 1 ;
    }
    return acc;
},{}); 

console.log(ages);

// Here we are using empty object here because the accumulator is an array of object and not just a number, hence we use an empty object as an initial value so it can easily hold values inside it and doesnt cause anysyntax error