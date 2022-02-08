var Product321 = /** @class */ (function () {
    function Product321() {
    }
    return Product321;
}());
var ProductService321 = /** @class */ (function () {
    function ProductService321() {
    }
    ProductService321.prototype.getProducts = function () {
        //the code for getting products
        //froma  real data source should go here
        return [];
    };
    ProductService321.prototype.getProductById = function (id) {
        //the code for getting products
        //froma  real data source should go here
        return { id: 123, description: 'Good Product' };
    };
    return ProductService321;
}());
var MockProductService = /** @class */ (function () {
    function MockProductService() {
    }
    MockProductService.prototype.getProducts = function () {
        // the code for getting hard-coded
        // products goes here
        return [];
    };
    MockProductService.prototype.getProductById = function (id) {
        return { id: 456, description: 'Not a real product' };
    };
    return MockProductService;
}());
var productService = new ProductService321();
var products = productService.getProducts();
