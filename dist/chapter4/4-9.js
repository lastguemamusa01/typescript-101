// Declares a generic interface that takes one type as a parameter
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.compareTo = function (value) {
        return this.width * this.height - value.width * value.height;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.compareTo = function (value) {
        // the algorithm for comparing triangles goes here
        return 1;
    };
    return Triangle;
}());
var Programmer = /** @class */ (function () {
    function Programmer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    ;
    Programmer.prototype.compareTo = function (value) {
        return this.salary - value.salary;
    };
    return Programmer;
}());
var rect1 = new Rectangle(2, 5);
var rect2 = new Rectangle(2, 3);
var prog1 = new Programmer("John", 20000);
var prog2 = new Programmer("Alex", 30000);
rect1.compareTo(rect2) > 0 ? console.log("rect1 is bigger") :
    rect1.compareTo(rect2) == 0 ? console.log("rectagles are equals") :
        console.log("rect1 is smaller");
prog1.compareTo(prog2) > 0 ? console.log("".concat(prog1.name, " is richer")) :
    prog1.compareTo(prog2) == 0 ? console.log("".concat(prog1.name, " and ").concat(prog2.name, " earn the same amounts")) :
        console.log("".concat(prog1.name, " is poorer"));
