class Person47 {
    name: string;
}

class Employee47 extends Person47 {
    department: number;
}

class Animal {
    breed: string;
    name: string; //name added
}

//declares and initializes a generic array with a concrete parameter

const workers47: Array<Person47> = [];

workers47[0] = new Person47();
workers47[1] = new Employee47();
// workers47[2] = new Animal();  // compile-time errors

// after add the name in animal , this is structural type system so no error
workers47[2] = new Animal();  

// also this is valid

workers47[3] = {name: 'Mary'};

/*
The error message would read “Property breed is missing in type Person,” and that makes sense, 
because if you declare a worker variable of type Animal but create an instance of the Person object that has no breed property, 
you wouldn’t be able to write worker.breed. Hence the compile-time error.
*/
//const worker: Animal = new Person(); // compilation error

