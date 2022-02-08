function printMe(content) {
    console.log(content);
    return content;
}
// using generic types in fat arrow functions
var printMeFatArrow = function (content) {
    console.log(content);
    return content;
};
var a = printMe("Hello");
var aArrow = printMeFatArrow("hello");
// You could also invoke these functions specifying the types explicitly in angle brackets:
// But using explicit types is not required here, as the Typescript compiler will infer the type of a as string and b as Person.
var aArrow2 = printMe("hello");
var Person413 = /** @class */ (function () {
    function Person413(name) {
        this.name = name;
    }
    return Person413;
}());
var b = printMe(new Person413('joe'));
var bArrow = printMeFatArrow(new Person413('min ku nam'));
// the generic pair class
var Pair = /** @class */ (function () {
    function Pair() {
    }
    return Pair;
}());
// generaic pair with contructor
var PairContructor = /** @class */ (function () {
    function PairContructor(key, value) {
        this.key = key;
        this.value = value;
    }
    return PairContructor;
}());
function compare(pair1, pair2) {
    return pair1.key === pair2.key && pair1.value === pair2.value;
}
var p1 = new PairContructor(1, "Apple");
// type inference
var p2 = new PairContructor(1, "Orange");
// comparing apples to oranges
// when you call generic function, specific the type for generic
console.log(compare(p1, p2));
var p3 = new PairContructor("first", "Apple");
var p4 = new PairContructor("first", "Apple");
// comparing apples to apples
// this is not recommended
console.log(compare(p3, p4));
