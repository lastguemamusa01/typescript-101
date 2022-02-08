// declares a custom type using a interface
interface Product {
    id: number;
    description: string;
}

// declare an API as an interface
interface IProductService {
    getProducts(): Product[];
    getProductById(id: number): Product;

}

// implements the interface
class ProductService323 implements IProductService {

    getProducts(): Product[]{
        // the code for getting products
        // from a real data source goes here
        return []; 
    }
    
    getProductById(id: number): Product {
        // the code for getting a product by id goes here
        return { id: 123, description: 'Good product' };
    }

}

class MockProductService323 implements IProductService {
    getProducts(): Product321[] {
        // the code for getting hard-coded
        // products goes here

        return [];
    }

    getProductById(id: number): Product321 {
        return {id: 456, description: 'Not a real product'};
    }
}

// a factory function that uses the interface as a return type
function getProductService(isProduction: boolean): IProductService {
    if(isProduction) {
        return new ProductService323;
    } else {
        return new MockProductService323;
    }
}



const isProd = true;
const productService323: IProductService = getProductService(isProd);
const products323 = productService323.getProducts();

