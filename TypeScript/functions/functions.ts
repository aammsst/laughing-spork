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
    return callback(); // it's inferred that the return type of the function foo2 is number
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

// Generic functions
// Example taken from TS Handbook
function firstElement<Type>(arr: Type[]): Type | undefined {
    // This function can receive generic types, and return a type that corresponds to the type it received
    return arr[0];
}

const s = firstElement(["a","b","c"]); // string
const n = firstElement([1,2,3]); // number
const b = firstElement([true, false, true]); // boolean
const u = firstElement([]); // undefined

// Iference
function myMap<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    // This function can infer the types used as inputs and outputs
    return arr.map(func);
}

const parse = myMap(["1", "2", "3"], (n)=>parseInt(n)); // here we send string[] and receive number[]
console.log(parse);
const unParse = myMap([1,2,3], (n)=>n.toString()); // Here we send number[] and receive string[] with the same function myMap
console.log(unParse);

// Constraints
// We can use a constraint to limit the kinds of types that a parameter can accepts
function longest<Type extends { length: number }>(a: Type, b: Type) {
    // This function returns the longer of two values, if it exists
    // We use extends to constrain the type parameter to a type that has the length property
    if (a.length > b.length) { // that constrain allows us to acces the .length property of a and b
        return a;
    } else if (a.length < b.length){
        return b;
    } else {
        return "same length!";
    }
}

const longerArr = longest([1,2], [3,2,1]);
console.log(longerArr);
const longerStr = longest("Fabri", "NoFabri");
console.log(longerStr);
// This last function won't allow us to use a number or a boolean type since those types do not have a length property
