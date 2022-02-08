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
var Person34 = /** @class */ (function () {
    function Person34(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person34.prototype.sellStock = function (symbol, numberOfShares) {
        console.log("Selling ".concat(numberOfShares, " of ").concat(symbol));
    };
    return Person34;
}());
var Employee34 = /** @class */ (function (_super) {
    __extends(Employee34, _super);
    function Employee34(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
    }
    Employee34.prototype.sellStock = function (symbol, shares) {
        _super.prototype.sellStock.call(this, symbol, shares);
        this.reportToCompliance(symbol, shares);
    };
    Employee34.prototype.reportToCompliance = function (symbol, shares) {
        console.log("".concat(this.lastName, " from ").concat(this.department, " sold ").concat(shares, " shares of ").concat(symbol));
    };
    return Employee34;
}(Person34));
var empl = new Employee34('min ku', 'nam', 31, 'Full stack developer');
empl.sellStock('IBM', 100);
