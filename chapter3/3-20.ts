interface Flyable extends MotorVehicle{
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

class SecretServiceCar320 implements Flyable, Swimmable {
  
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
