// functions as parameters

// Example taken from typescript handbook
function greeter(fn: (a: string) => void) {
    // Function that receives a type function that returns a type void
    // That function will be given a string as follows
    fn("Hello, world!");
}

function printToConsole(s:string) {
    // This function receives a string and returns a
    // type void
    console.log(s);
}

// both functions returns type void, it means they don't return nothing
greeter(printToConsole);

// We can use type alias to name a function type
type GreetFn = (a: string) => void;

function greeter2(fn: GreetFn) {
    fn("Hi from greeter2");
}

greeter2(printToConsole);

// Example taken from bbprogramer
function foo(callback: ()=>number): number {
    // This function receives a type function with no parameters, that returns a type number
    // and then returns a type number as well
    console.log("this is foo function");
    const number = callback();
    console.log(`foo function received ${number}\nand it's square root is:`);
    return Math.sqrt(number);
}

function bar(): number {
    // This function just returns a random number
    console.log("this is the bar function");
    return Math.round(Math.random()*10);
}

console.log(foo(bar));

// insted of any number, the callback function 
// can also receive a costum value

function foo2(callback: () => 2) {
    // now, foo2 receives a function with no parameters that returns 2
    console.log("this is foo2");
    return callback(); // it's infeered that the return type of the function foo2 is number
}

function bar2(): 2 {
    // for some reason, the return type of these can not be number
    // even when it returns a 2
    console.log("bar2");
    return 2;
}

console.log(foo2(bar2));
console.log("type of the return of foo2: ", typeof(foo2(bar2))); // this should be number

// This can be use with more than a custom value, if instead of just a number you use type unions
function foo3(callback: () => 2 | 3 | 5) {
    // foo3 accepts functions that can return 2, 3 or 5
    console.log("foo3");
    const numberReceived = callback();
    console.log(`foo3 has received a function that returns ${numberReceived}`)
    return numberReceived;
}

function bar3(): 2 | 3 {
    console.log("bar3");
    return 3;
}

console.log(foo3(bar3));
