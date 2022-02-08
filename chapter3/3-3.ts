class Person4 {
    public firstName ='';
    public lastName = '';
    private age = 0;

    protected sayHello(): string {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person4 {
    department = '';
    currentSalary = 42;

    reviewPerformance(): void {
        this.sayHello();
        this.increasePay(5);
    }

    increasePay(percent: number): void {
        this.currentSalary = this.currentSalary+this.currentSalary*percent;
    }
}