
let name2 = 'John Smith';
let padding: string | number;
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight?: Pound;
}

let patient: Patient = {
    name: 'Joe Smith',
    height: 5
}


function getFinalPrice(price: number, discount: number) { 
    return price - price/discount; 
}

function logError(errorMessage: string): void {
    console.error(errorMessage);
}

function calcTax(state: string, income: number, dependents: number) : number | undefined {
    if(state === 'NY') {
        return income * 0.06 - dependents * 500;
    } else if(state === 'NJ') {
        return income * 0.05 -dependents * 300;
    }
}

function padLeft(value: string, padding: string | number ): string {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}

class Person {
    firstName: string;
    lastName: string;
    age: number;
}

class PersonWithContructor {
    constructor(public firstName: string, public lastName: string, public age: number) {};
}

class block {
    readonly nonce: number;
    readonly hash: string;

    constructor (
        readonly index:  number,
        readonly previousHash: string,
        readonly timestamp: number,
        readonly data: string
    ) {
        this.nonce = nonce;
        this.hash = hash;
    }
}

const p = new Person();
p.firstName = "min ku";
p.lastName = "Smith"
p.age = 25;

const pImproved = new PersonWithContructor("aldo","sam",30);

console.log(getFinalPrice(100,10)); 
