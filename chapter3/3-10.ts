interface Product {
    id: number;
    description: string;
}

class ProductService310 {

    getProducts(description: string) : Product[];
    getProducts(id: number) : Product;
    getProducts(product: number | string): Product[] | Product {
        if(typeof product === "number") {
            console.log(`Getting the product info for id ${product}`);
            return { id: product, description: 'great product'};
        } else if(typeof product === "string") {
            console.log(`getting the product with description ${product}`);
            return [
                { id: 123, description: product},
                { id: 179, description: product}
            ];
        } else {
            return {id: -1, description: 'Error: getProduct() accept only number or string as args'};
        }
    }
   
}

const prodService310 = new ProductService310();

console.log(prodService310.getProducts(123));
console.log(prodService310.getProducts('blue jeans'));
