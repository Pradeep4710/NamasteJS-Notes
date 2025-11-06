// Tricky question

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