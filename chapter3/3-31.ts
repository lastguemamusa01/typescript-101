// Declares a method signature that should be implemented by a class

interface Flyable {
    fly(howHigh: number): boolean;
    land(): boolean;
}

interface Swimmable {
    swim(howFar: number): void;
}

interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    break(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}

class Car implements MotorVehicle {
    startEngine(): boolean {
        return true;
    };

    stopEngine(): boolean {
        return true;
    }

    break(): boolean {
        return true;
    }

    accelerate(speed: number): void {
        console.log('Driving faster');
    }

    honk(howLong: number): void {
        console.log('beep beep yeah');
    }
}

class SecretServiceCar extends Car implements Flyable, Swimmable {
    fly(howHigh: number) {
        return true;
    }

    land() {
        return true;
    }

    swim(howFar: number): void {
        console.log('swimming udner the sea');
    }
}

// type inference. We could explicitly declare the type of car as follows
const car = new Car();
car.startEngine();