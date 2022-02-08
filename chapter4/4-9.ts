// Declares a generic interface that takes one type as a parameter

interface Comparator <T> {
    compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {

    constructor(private width: number, private height: number) {}

    compareTo(value: Rectangle): number {
        return this.width * this.height - value.width * value.height;
    }
}

class Triangle implements Comparator<Triangle> {
    compareTo(value: Triangle): number {
        // the algorithm for comparing triangles goes here
        return 1;
    }
}

class Programmer implements Comparator<Programmer> {
 
    constructor(public name: string, private salary: number){};

    compareTo(value: Programmer): number{
        return this.salary - value.salary;
    }
}

const rect1: Rectangle = new Rectangle(2,5);
const rect2: Rectangle = new Rectangle(2,3);
const prog1:Programmer = new Programmer("John",20000);
const prog2: Programmer = new Programmer("Alex",30000);

rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger"):
rect1.compareTo(rect2) == 0 ? console.log("rectagles are equals"):
console.log("rect1 is smaller"); 

prog1.compareTo(prog2) > 0 ? console.log(`${prog1.name} is richer`) : 
prog1.compareTo(prog2) == 0? console.log(`${prog1.name} and ${prog2.name} earn the same amounts`) :
console.log(`${prog1.name} is poorer`);




