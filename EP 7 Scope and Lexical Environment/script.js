function a(){
    console.log(b); // it can access b
    var x = 3;

    c();
    function c(){
        console.log(b);  // it can access b
    }
}

var b =10;
a();

console.log(x); // shows not defined as it cant access x

// check notes as well  to see how it actually works using the Lexical Scope and Lexical chain and the actual environment