class Gansta {
    static totalBullets = 100;

    shoot() {
        Gansta.totalBullets--;
        console.log(`Bullet left: ${Gansta.totalBullets}`);
    }
}

const g1 = new Gansta();
const g2 = new Gansta();

g1.shoot();
g2.shoot();
