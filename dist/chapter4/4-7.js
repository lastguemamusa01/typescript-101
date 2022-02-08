var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person47 = /** @class */ (function () {
    function Person47() {
    }
    return Person47;
}());
var Employee47 = /** @class */ (function (_super) {
    __extends(Employee47, _super);
    function Employee47() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee47;
}(Person47));
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
//declares and initializes a generic array with a concrete parameter
var workers47 = [];
workers47[0] = new Person47();
workers47[1] = new Employee47();
// workers47[2] = new Animal();  // compile-time errors
// after add the name in animal , this is structural type system so no error
workers47[2] = new Animal();
// also this is valid
workers47[3] = { name: 'Mary' };
/*
The error message would read “Property breed is missing in type Person,” and that makes sense,
because if you declare a worker variable of type Animal but create an instance of the Person object that has no breed property,
you wouldn’t be able to write worker.breed. Hence the compile-time error.
*/
//const worker: Animal = new Person(); // compilation error
