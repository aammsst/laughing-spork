// functions as parameters
function foo(callback: ()=>number): number {
    console.log("fooo");
    const number = callback();
    console.log(`the number received is ${number}\nand it's square root is:`);
    return Math.sqrt(number);
}

function bar(): number {
    console.log("bar");
    return Math.random()*10;
}

console.log(foo(bar));
