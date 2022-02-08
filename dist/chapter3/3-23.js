// implements the interface
var ProductService323 = /** @class */ (function () {
    function ProductService323() {
    }
    ProductService323.prototype.getProducts = function () {
        // the code for getting products
        // from a real data source goes here
        return [];
    };
    ProductService323.prototype.getProductById = function (id) {
        // the code for getting a product by id goes here
        return { id: 123, description: 'Good product' };
    };
    return ProductService323;
}());
var MockProductService323 = /** @class */ (function () {
    function MockProductService323() {
    }
    MockProductService323.prototype.getProducts = function () {
        // the code for getting hard-coded
        // products goes here
        return [];
    };
    MockProductService323.prototype.getProductById = function (id) {
        return { id: 456, description: 'Not a real product' };
    };
    return MockProductService323;
}());
// a factory function that uses the interface as a return type
function getProductService(isProduction) {
    if (isProduction) {
        return new ProductService323;
    }
    else {
        return new MockProductService323;
    }
}
var isProd = true;
var productService323 = getProductService(isProd);
var products323 = productService323.getProducts();
