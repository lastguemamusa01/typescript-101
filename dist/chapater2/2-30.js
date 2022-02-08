var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    ;
    Dog.prototype.sayHello = function () {
        return 'Dog syas hello!';
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    ;
    Fish.prototype.dive = function (howDeep) {
        return "Diving ".concat(howDeep, " feet");
    };
    return Fish;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
}
var myDog = new Dog('Sammy');
var myFish = new Fish('Marry');
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
// talkToPet({ name: 'john'});   // this wont compiled
