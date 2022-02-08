var Gansta = /** @class */ (function () {
    function Gansta() {
    }
    Gansta.prototype.shoot = function () {
        Gansta.totalBullets--;
        console.log("Bullet left: ".concat(Gansta.totalBullets));
    };
    Gansta.totalBullets = 100;
    return Gansta;
}());
var g1 = new Gansta();
var g2 = new Gansta();
g1.shoot();
g2.shoot();
