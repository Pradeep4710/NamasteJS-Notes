console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("end");

// Till here the code works fine, now lets add some code which will take much more than 5 seconds, will the timeout be executed 5000ms only? Lets see.

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate <= startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While loop ends");

// as we can see, the while loop blocks our main thread and taked quiet a bit longer than 5000ms, but still it first completes the while loop, then print "While loop ends" and only after that, the Callback gets consolelogged

// so basically timeout will not wait for 5000 ms at most and will get printed for sure, but insted it ensures that the piece of code will wait at least 5000 ms and may take much longer too