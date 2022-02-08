function printMe<T> (content: T): T {
    console.log(content);
    return content;
}

// using generic types in fat arrow functions
const printMeFatArrow = <T> (content: T): T => {
    console.log(content);
    return content;
}

const a = printMe("Hello");
const aArrow = printMeFatArrow("hello");
// You could also invoke these functions specifying the types explicitly in angle brackets:
// But using explicit types is not required here, as the Typescript compiler will infer the type of a as string and b as Person.
const aArrow2 = printMe<string>("hello");

class Person413{
    constructor(public name: string){}
}

const b = printMe(new Person413('joe'));
const bArrow = printMeFatArrow(new Person413('min ku nam'));

// the generic pair class
class Pair<K, V> {
    key: K;
    value: V;
}

// generaic pair with contructor

class PairContructor<K, V> {
    constructor(public key: K, public value: V){}
}

function compare <K, V> (pair1: PairContructor<K,V>, pair2: PairContructor<K,V>): boolean {
    return pair1.key === pair2.key && pair1.value === pair2.value;
}

let p1: PairContructor<number, string> = new PairContructor(1,"Apple");

// type inference
let p2 = new PairContructor(1,"Orange");

// comparing apples to oranges
// when you call generic function, specific the type for generic
console.log(compare<number,string>(p1,p2));

let p3 = new PairContructor("first","Apple");
let p4 = new PairContructor("first","Apple");

// comparing apples to apples
// this is not recommended
console.log(compare(p3,p4));






