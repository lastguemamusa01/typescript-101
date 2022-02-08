class Person34 {
    constructor(public firstName: string, public lastName: string, private age: number) {}

    sellStock(symbol: string, numberOfShares: number) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}

class Employee34 extends Person34 {
    constructor( firstName: string, lastName: string, age: number, public department: string) {
        super(firstName, lastName, age);
    }

    sellStock(symbol: string, shares: number) {
        super.sellStock(symbol,shares);
        this.reportToCompliance(symbol, shares);
    }

    private reportToCompliance(symbol: string, shares: number) {
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
    }
}

const empl = new Employee34('min ku', 'nam', 31, 'Full stack developer');
empl.sellStock('IBM',100);