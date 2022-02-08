var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
var WeekdaysAutoIncrement;
(function (WeekdaysAutoIncrement) {
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Monday"] = 1] = "Monday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Tuesday"] = 2] = "Tuesday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Wednesday"] = 3] = "Wednesday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Thursday"] = 4] = "Thursday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Friday"] = 5] = "Friday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Saturday"] = 6] = "Saturday";
    WeekdaysAutoIncrement[WeekdaysAutoIncrement["Sunday"] = 7] = "Sunday";
})(WeekdaysAutoIncrement || (WeekdaysAutoIncrement = {}));
// converting temperature with enums
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
// declaring a string enum
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// You can use the union type as an alternative to enums. For example, the signature of the move() function could look like this:
function moveUnion(direction) { }
function moveCustomType(direction) { }
// Declaring a string enum for monitoring actions
var ProductsActionTypes;
(function (ProductsActionTypes) {
    ProductsActionTypes["Search"] = "Products Search";
    ProductsActionTypes["Load"] = "Products Load All";
    ProductsActionTypes["LoadFailure"] = "Product Load All Failure";
    ProductsActionTypes["LoadSuccess"] = "Product Load ALll Success";
})(ProductsActionTypes || (ProductsActionTypes = {}));
var dayOff = Weekdays.Tuesday;
// get wednesday
console.log(WeekdaysAutoIncrement[3]);
function convertTemperature(temp, fromTo) {
    return (Direction.FtoC === fromTo) ? (temp - 32) * 5.0 / 9.0 : temp * 9.0 / 5.0 + 32;
}
console.log("70F is ".concat(convertTemperature(70, Direction.FtoC), "C"));
console.log("21C is ".concat(convertTemperature(21, Direction.CtoF), "F"));
// If the function that loads products fails...
console.log(ProductsActionTypes.LoadFailure);
