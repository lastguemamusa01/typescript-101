// Declares a method signature that should be implemented by a class
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    ;
    Car.prototype.stopEngine = function () {
        return true;
    };
    Car.prototype["break"] = function () {
        return true;
    };
    Car.prototype.accelerate = function (speed) {
        console.log('Driving faster');
    };
    Car.prototype.honk = function (howLong) {
        console.log('beep beep yeah');
    };
    return Car;
}());
var SecretServiceCar = /** @class */ (function (_super) {
    __extends(SecretServiceCar, _super);
    function SecretServiceCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretServiceCar.prototype.fly = function (howHigh) {
        return true;
    };
    SecretServiceCar.prototype.land = function () {
        return true;
    };
    SecretServiceCar.prototype.swim = function (howFar) {
        console.log('swimming udner the sea');
    };
    return SecretServiceCar;
}(Car));
// type inference. We could explicitly declare the type of car as follows
var car = new Car();
car.startEngine();
