class ProductService {

    getProducts(): void;
    getProducts(id: number): void;
    getProducts(id?: number): void {
        if (typeof id === 'number') {
          console.log(`Getting the product info for ${id}`);
        } else { 
          console.log(`Getting all products`);
        }
    }
}

const prodService = new ProductService();

prodService.getProducts(123);

prodService.getProducts();