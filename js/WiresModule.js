// colors = blue, yellow, red, black, white

// serial number

const colors = ["blue", "red"];

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
                let copyArray = [...this.wires];
                if (this.wires.every((e) => e.color !== "red")) {
                    this.wires[1].correctWire = true;
                    console.log("first condition procced");
                } else if (this.wires[2].color === "white") {
                    this.wires[2].correctWire = true;
                    console.log("second condition procced");
                } else if (
                    copyArray.map((e) => e.color).indexOf("blue") !==
                    copyArray.map((e) => e.color).lastIndexOf("blue")
                ) {
                    console.log("third condition procced");
                    let indexOfLastBlue = copyArray
                        .map((e) => e.color)
                        .lastIndexOf("blue");
                    this.wires[indexOfLastBlue].correctWire = true;
                } else {
                    this.wires[2].correctWire = true;
                    console.log("fourth condition procced");
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