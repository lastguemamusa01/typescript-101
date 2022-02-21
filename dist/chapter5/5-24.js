var Product524 = /** @class */ (function () {
    function Product524() {
    }
    return Product524;
}());
function getProducts(id) {
    if (typeof id === 'number') {
        return { id: 123 };
    }
    else {
        return [{ id: 123 }, { id: 567 }];
    }
}
var result1 = getProducts(123);
var result2 = getProducts();
