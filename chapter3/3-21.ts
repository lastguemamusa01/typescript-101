class Product321 {
    id: number;
    description: string;
}

class ProductService321 {

    getProducts(): Product321[] {
        //the code for getting products
        //froma  real data source should go here

        return [];
    }

    getProductById(id: number): Product321 {
        //the code for getting products
        //froma  real data source should go here
        return {id:123, description: 'Good Product'};
    }
}

class MockProductService {
    getProducts(): Product321[] {
        // the code for getting hard-coded
        // products goes here

        return [];
    }

    getProductById(id: number): Product321 {
        return {id: 456, description: 'Not a real product'};
    }
}


const productService = new ProductService321();
const products = productService.getProducts();

