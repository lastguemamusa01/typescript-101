var SecretServiceCar320 = /** @class */ (function () {
    function SecretServiceCar320() {
    }
    SecretServiceCar320.prototype.startEngine = function () {
        return true;
    };
    ;
    SecretServiceCar320.prototype.stopEngine = function () {
        return true;
    };
    SecretServiceCar320.prototype["break"] = function () {
        return true;
    };
    SecretServiceCar320.prototype.accelerate = function (speed) {
        console.log('Driving faster');
    };
    SecretServiceCar320.prototype.honk = function (howLong) {
        console.log('beep beep yeah');
    };
    SecretServiceCar320.prototype.fly = function (howHigh) {
        return true;
    };
    SecretServiceCar320.prototype.land = function () {
        return true;
    };
    SecretServiceCar320.prototype.swim = function (howFar) {
        console.log('swimming udner the sea');
    };
    return SecretServiceCar320;
}());
