// colors = blue, yellow, red, black, white

// serial number

const colors = ["blue", "yellow", "red", "white", "black"];

class WiresModule {
    constructor(numberOfWires) {
        this.numberOfWires = numberOfWires;
        this.wires = [];
    }

    makeWires() {
        for (let i = 1; i <= this.numberOfWires; i++) {
            let randomIndex = Math.floor(Math.random() * colors.length);
            let randomColor = colors[randomIndex];
            let wire = new Wire(randomColor);
            this.wires.push(wire);
        }
        console.log(this.wires);
    }
    setCorrectWire() {
        switch (this.numberOfWires) {
            case 3:
                if (this.wires.every((e) => e.color !== "red")) {
                    this.wires[1].correctWire = true;
                }
        }
        console.log(this.wires);
    }
}

class Wire {
    constructor(color) {
        this.color = color;
        this.correctWire = false;
    }
}