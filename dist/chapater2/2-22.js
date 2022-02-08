"use strict";
exports.__esModule = true;
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
// A class with an action type and payload
var SearchAction = /** @class */ (function () {
    function SearchAction(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
    return SearchAction;
}());
exports.SearchAction = SearchAction;
var SearchSuccessAction = /** @class */ (function () {
    function SearchSuccessAction(payload) {
        this.payload = payload;
        this.actionType = "SEARCH_SUCCESS";
    }
    return SearchSuccessAction;
}());
exports.SearchSuccessAction = SearchSuccessAction;
// A class with an action type but without a payload
var SearchFailedAction = /** @class */ (function () {
    function SearchFailedAction() {
        this.actionType = "SEARCH_FAILED";
    }
    return SearchFailedAction;
}());
exports.SearchFailedAction = SearchFailedAction;
function area(shape) {
    switch (shape.kind) {
        case "Rectangle": return shape.height * shape.width;
        case "Circle": return Math.PI * Math.pow(shape.radius, 2);
    }
}
var myRectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log("Rectangle's area is ".concat(area(myRectangle)));
var myCircle = {
    kind: "Circle",
    radius: 10
};
console.log("Circle's area is ".concat(area(myCircle)));
;
;
function foo(x) {
    if ("a" in x) {
        return x.a;
    }
    return x.b;
}
var myA = { a: 2 };
var myB = { b: "b" };
console.log("foo callin a result ".concat(foo(myA)));
console.log("foo callin B result ".concat(foo(myB)));
