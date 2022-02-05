function getFinalPrice(price: number, discount: number) { 
    return price - price/discount; 
}

console.log(getFinalPrice(100,10)); 

// this code in typescript will throw compilation error
// but in javascript prints NaN in runtime
//console.log(getFinalPrice(100,"10")); 

