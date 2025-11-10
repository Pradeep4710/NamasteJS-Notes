// #1 
// Promise.all => used to make multiple API calls all at once.

// the time taken to feth all the data for promises will not be the sum of time taken for all thepromises to resolve but, it would just be the timetaken by the api thet takes the longest to resolve.

// lets take an example where we need to call p1 p2 p3 p4 where they take 1 2 3 4 seconds to resolve respectively, now instead of taking 10 seconds as it would take when we call apis 1 by 1, it would just take 4 seconds and return all at once. (assuming all the promises get resolved without any errors)

// syntax => Promise.all[p1,p2,p3,p4]

// output => [val1, val2, val3, val4] => it will return the array of values (in the same order)

// Now what if one or more promise does not resolve?

// => The output will be error => It will be the same error which is returned by that one particular api that does not get resolved.

// In conclusion, Promise.all method will get rejected in a totality even one of the promise gets rejected and will not wait for otherpromises to get resolved

// What if we want to atleast retrieve the promise that do get resolvedand all of it does not get cancelled due to a few apis getting rejected.






// #2 
// Promise.allSettled => It waits for all te promises to get settled (resolved or rejected) and then after that, it will return the array including the equal number of values insidethe array as the number of promise calls 
// Lets consider p1 p2 p3 taking 3s 2s and 1s and lets assume p2 to get rejected.

// so after 3 seconds the output will be  => [val1, err, val3]  // (in the same order)






// #3 
// Promise.race => As the name suggests, its a race and the promise that gets settled(reject orresolved) first , the result will be consist of only that promise.

// output => Value of the first settled value. (be it error or some value)





// #4 
//Promise.any => whenever the very first promise gets resolved, the result will be the value of that particular promise.

// what if all the calls get rejected? 

// => output will be an aggrigated error. (containing errors of all the promises in an array)