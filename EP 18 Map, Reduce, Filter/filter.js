// used to filter values inside an array filtered based on some logic

const arr = [1,2,3,4,5,6];

// filter odd

const output = arr.filter((x)=> x%2 !=0 );    // use this method as much as u can
 console.log(output);


// filter even

const outeve = arr.filter((x)=> {  // you dont need to include braces and return statement if the condition is just one liner , it will still work but try to make shorter and easy to understand 
    return x%2 ==0 
});

 console.log(outeve);

 // greater than 4

function greaterthanfour(x) { // this is the worst way to write as it takes a lot of space just to perform 1 function
    return x > 4;
}

const four =  arr.filter(greaterthanfour);

console.log(four);



// Tricky filter() question
// Find first name of all the people whose age is less than 30

const users = [
    {firstName:"Shakti" , lastName:"Maan" , age:83},
    {firstName:"Dead" , lastName:"Pool" , age:25},
    {firstName:"Iron" , lastName:"Man" , age:28},
    {firstName:"Captain" , lastName:"America" , age:69}
]

const young = users.filter(x=> x.age<30);

console.log(young);

// we can chain map, filter and reduce with each other, hence we can also applyother functions on it right away

const yng = users.filter(x=> x.age<30).map((x)=> x.firstName);

console.log(yng);

// we can actually use reduce function right away on it insted of applying filter and then reduce

const filtered = users.reduce(function (acc, curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(filtered);