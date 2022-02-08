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
var Person4 = /** @class */ (function () {
    function Person4() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
    }
    Person4.prototype.sayHello = function () {
        return "My name is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person4;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.department = '';
        _this.currentSalary = 42;
        return _this;
    }
    Employee.prototype.reviewPerformance = function () {
        this.sayHello();
        this.increasePay(5);
    };
    Employee.prototype.increasePay = function (percent) {
        this.currentSalary = this.currentSalary + this.currentSalary * percent;
    };
    return Employee;
}(Person4));
