// Block is a space enclosed by {} . It is a "Compound Statement"

// We group multiple statement in a block so we can use it at place where JavaScript expects just one statement.

{
    // Compund Statement
    var a = 10;
    console.log(a);
}

// for example, an if codition, it expects a single statement inside the brackets (). But if we need multiple statements then we can goup it inside a scope/ block. eg:-

if(true){
    var v = 5;
    v++;
    console.log(v);
}

// we can even see how hoisting works in a block scope bu putting debugger on line 21

{
    var p = 10;
    let q = 20;
    const r = 30;

    console.log(p);
    console.log(q);
    console.log(r);
}

console.log(p);
console.log(q);
console.log(r);

// after doing so, we can see that q and r are placed in a block scope whereas the p is put into global scope, hence only p is accessable and while printing q and r outside it shows an error

// block scope => memory space reserved for the block

// hence we can access p even outside the block but not q and r

// if we put a debugger right after the block containing p q r, we can see the blovk scope is removed from the browser scope and only global remains, hence making it impossible to  access values which were inside the block scope.


// NOTE: Block scopes also follow lexical scope chain pattern.