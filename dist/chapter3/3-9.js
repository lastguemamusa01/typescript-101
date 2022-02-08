var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function (id) {
        if (typeof id === 'number') {
            console.log("Getting the product info for ".concat(id));
        }
        else {
            console.log("Getting all products");
        }
    };
    return ProductService;
}());
var prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts();
