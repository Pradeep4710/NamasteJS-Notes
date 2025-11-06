// how js deals with reused variable name

var x = 1;

a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var y = 100;
    console.log(y);
}

// output comes out to be 10 100 1, due to global execution context. Check notebook