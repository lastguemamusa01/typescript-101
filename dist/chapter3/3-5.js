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
var Person35 = /** @class */ (function () {
    function Person35(name) {
        this.name = name;
    }
    ;
    Person35.prototype.changeAddress = function (newAddress) {
        console.log("Changing address to ".concat(newAddress));
    };
    Person35.prototype.giveDayOff = function () {
        console.log("Giving a day off to ".concat(this.name));
    };
    Person35.prototype.promote = function (percent) {
        this.giveDayOff();
        this.increasePay(percent);
    };
    return Person35;
}());
var Employee35 = /** @class */ (function (_super) {
    __extends(Employee35, _super);
    function Employee35() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee35.prototype.increasePay = function (percent) {
        console.log("Incresing the salary of ".concat(this.name, " by ").concat(percent));
    };
    return Employee35;
}(Person35));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contractor.prototype.increasePay = function (percent) {
        console.log("Incresing the hourly rate of ".concat(this.name, " by ").concat(percent));
    };
    return Contractor;
}(Person35));
var workers = [];
workers[0] = new Employee35('John');
workers[0] = new Contractor('may');
workers.forEach(function (worker) { return worker.promote(5); });
