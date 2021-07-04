class Ninja {
    constructor(name, health = 20, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const sensei1 = new Sensei("Hyabusa");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();