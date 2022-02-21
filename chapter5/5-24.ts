class Product524 {
    id: number;
   }
  
  function getProducts<T>(id?: T):
    T extends number ? Product524 : Product524[] {
       if (typeof id === 'number') {
         return { id: 123 } as any
       } else {
         return [{ id: 123 }, {id: 567}] as any
       }       
  }
  
  let result1 = getProducts(123);
  
  let result2 = getProducts();
  