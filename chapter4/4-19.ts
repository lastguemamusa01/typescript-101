// Declares the higher-order function
const outerFunc = (someValue: number) =>
(multiplier: number) => someValue * multiplier;

// innerFunc is a closure that knows that someValue = 10.
const innerFunc = outerFunc(10);

// Invokes the returned function
let result = innerFunc(5);

// 50 as result
console.log(result);


type numFunc<T> = (arg: T) => (c: number) => number;

// Invokes the function with no arguments
const noArgFunc: numFunc<void> = () => (c:number) => c+5;

// Invokes the function with a numeric argument
const numArgFunc: numFunc<number> = (someValue: number) => (multiplier:number) => someValue * multiplier;

// Invokes the function with a string argument
const stringArgFunc: numFunc<string> = (someText: string) => (padding: number) => someText.length + padding;

// compiler error: numFunc expects another signature
// const createSumString: numFunc<number> = () => (x:number) => 'Hello';