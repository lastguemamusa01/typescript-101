// Declares the higher-order function
var outerFunc = function (someValue) {
    return function (multiplier) { return someValue * multiplier; };
};
// innerFunc is a closure that knows that someValue = 10.
var innerFunc = outerFunc(10);
// Invokes the returned function
var result = innerFunc(5);
// 50 as result
console.log(result);
// Invokes the function with no arguments
var noArgFunc = function () { return function (c) { return c + 5; }; };
// Invokes the function with a numeric argument
var numArgFunc = function (someValue) { return function (multiplier) { return someValue * multiplier; }; };
// Invokes the function with a string argument
var stringArgFunc = function (someText) { return function (padding) { return someText.length + padding; }; };
// compiler error: numFunc expects another signature
// const createSumString: numFunc<number> = () => (x:number) => 'Hello';
