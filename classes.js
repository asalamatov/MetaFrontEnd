class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?  ', this.lightsOn);
    }
    getSelf () {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed status: ", this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational");
    }
}

var myNewTrain = new Train("red", false);
console.log(myNewTrain.getPrototype());
var highSpeedTrain1 = new HighSpeedTrain(40, true, 'white', true);
console.log(highSpeedTrain1);
console.log(highSpeedTrain1.toggleLights());
console.log('************');
console.log(highSpeedTrain1.getPrototype());