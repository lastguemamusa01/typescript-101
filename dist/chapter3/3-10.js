var ProductService310 = /** @class */ (function () {
    function ProductService310() {
    }
    ProductService310.prototype.getProducts = function (product) {
        if (typeof product === "number") {
            console.log("Getting the product info for id ".concat(product));
            return { id: product, description: 'great product' };
        }
        else if (typeof product === "string") {
            console.log("getting the product with description ".concat(product));
            return [
                { id: 123, description: product },
                { id: 179, description: product }
            ];
        }
        else {
            return { id: -1, description: 'Error: getProduct() accept only number or string as args' };
        }
    };
    return ProductService310;
}());
var prodService310 = new ProductService310();
console.log(prodService310.getProducts(123));
console.log(prodService310.getProducts('blue jeans'));
