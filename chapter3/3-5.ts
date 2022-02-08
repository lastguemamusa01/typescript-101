abstract class Person35 {
    
    constructor(public name: string) {};
    
    changeAddress(newAddress: string) {
        console.log(`Changing address to ${newAddress}`);
    }

    protected giveDayOff() {
        console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number) {
        this.giveDayOff();
        this.increasePay(percent);
    }

    abstract increasePay(percent: number): void;

}

class Employee35 extends Person35 {
    
    increasePay(percent: number) {
        console.log(`Incresing the salary of ${this.name} by ${percent}`);
    }

}

class Contractor extends Person35 {
    
    increasePay(percent: number) {
        console.log(`Incresing the hourly rate of ${this.name} by ${percent}`);    
    }

}

const workers: Person35[] = [];

workers[0] = new Employee35('John');
workers[0] = new Contractor('may');

workers.forEach(worker => worker.promote(5));


