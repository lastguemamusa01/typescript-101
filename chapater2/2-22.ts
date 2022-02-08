// A class with an action type and payload
export class SearchAction {
    actionType = "SEARCH";
    constructor(readonly payload: {searchQuery: string}) {}
}

export class SearchSuccessAction {
    actionType = "SEARCH_SUCCESS";
    constructor(public payload: {searchResults: string[]}) {}
}
  
// A class with an action type but without a payload
export class SearchFailedAction {
    actionType = "SEARCH_FAILED";
}
  
export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;

// the discrimintant is kind

  interface Rectangle {
    kind: "Rectangle";
    width: number;
    height: number;
  }

  interface Circle {
    kind: "Circle";
    radius: number;

  }
  
  // The Shape type is a discriminated union, and both Rectangle and Circle have a com- mon property, kind. Depending on the value in the kind property, 
  // we can calculate the area of the Shape differently.

  type Shape = Rectangle | Circle;

  function area(shape: Shape): number {
      switch(shape.kind) {
          case "Rectangle": return shape.height * shape.width;
          case "Circle": return Math.PI * shape.radius ** 2;
      }
  }

  const myRectangle: Rectangle = { 
      kind: "Rectangle",
      width: 10,
      height: 20
  }

  console.log(`Rectangle's area is ${area(myRectangle)}`);

  const myCircle: Circle = {
      kind: "Circle",
      radius: 10
  };

  console.log(`Circle's area is ${area(myCircle)}`);


// The in type guard acts as a narrowing expression for types.

interface A { a: number };
interface B { b: string };

function foo(x: A | B) {
    if("a" in x) {
        return x.a;
    }
    return x.b;
}

const myA: A = { a: 2};
const myB: B = { b: "b"};


console.log(`foo callin a result ${foo(myA)}`);
console.log(`foo callin B result ${foo(myB)}`);
