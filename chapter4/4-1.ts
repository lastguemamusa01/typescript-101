enum Weekdays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

enum WeekdaysAutoIncrement {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// converting temperature with enums

enum Direction {
    FtoC, CtoF
}

// declaring a string enum

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// You can use the union type as an alternative to enums. For example, the signature of the move() function could look like this:
function moveUnion(direction: 'Up' | 'Down' | 'Left' | 'Right') {  }

// Another alternative to enums is defining a custom type:
type DirectionCustomType = 'Up' | 'Down' | 'Left' | 'Right';
function moveCustomType(direction: DirectionCustomType) {}

// Declaring a string enum for monitoring actions

enum ProductsActionTypes {
    Search = 'Products Search',
    Load = 'Products Load All',
    LoadFailure = 'Product Load All Failure',
    LoadSuccess = 'Product Load ALll Success'
}

// const enums

const enum DirectionConstType {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let dayOff = Weekdays.Tuesday;

// get wednesday
console.log(WeekdaysAutoIncrement[3]);

function convertTemperature(temp: number, fromTo: Direction): number {
    return (Direction.FtoC === fromTo) ? (temp-32)* 5.0/9.0: temp * 9.0/5.0+32;
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);


// If the function that loads products fails...
console.log(ProductsActionTypes.LoadFailure);