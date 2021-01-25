// colors = blue, yellow, red, black, white

// serial number

const colors = ["blue", "red", "yellow", "black", "white"];

class WiresModule {
    constructor(numberOfWires, serialNumber) {
        this.numberOfWires = numberOfWires;
        this.wires = [];
        this.serialNumber = serialNumber;
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
        let copyArray = [...this.wires];
        console.log(this.serialNumber);
        switch (this.numberOfWires) {
            case 3:
                if (noRedWires(copyArray)) {
                    this.wires[1].correctWire = true;
                    console.log("first condition procced");
                } else if (this.wires[2].color === "white") {
                    this.wires[2].correctWire = true;
                    console.log("second condition procced");
                } else if (has2WiresOfColor(copyArray, "blue")) {
                    console.log("third condition procced");
                    let indexOfLastBlue = copyArray
                        .map((e) => e.color)
                        .lastIndexOf("blue");
                    this.wires[indexOfLastBlue].correctWire = true;
                } else {
                    this.wires[2].correctWire = true;
                    console.log("fourth condition procced");
                }
                break;
            case 4:
                if (
                    has2WiresOfColor(copyArray, "red") &&
                    isSerialNumberOdd(this.serialNumber)
                ) {
                    console.log("first condition procced");
                    let indexOfLastRed = copyArray.map((e) => e.color).lastIndexOf("red");
                    this.wires[indexOfLastRed].correctWire = true;
                } else if (this.wires[3].color === "yellow" && noRedWires(copyArray)) {
                    console.log("second condition procced");
                    this.wires[0].correctWire = true;
                } else if (hasOnlyOneOfColor(copyArray, "blue")) {
                    console.log("third condition procced");
                    this.wires[0].correctWire = true;
                } else if (has2WiresOfColor(copyArray, "yellow")) {
                    console.log("fourth condition procced");
                    this.wires[3].correctWire = true;
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

const has2WiresOfColor = (array, color) => {
    return (
        array.map((e) => e.color).indexOf(color) !==
        array.map((e) => e.color).lastIndexOf(color)
    );
};

const isSerialNumberOdd = (serialNumber) => {
    return serialNumber[serialNumber.length - 1] % 2 !== 0;
};

const noRedWires = (array) => {
    return array.every((e) => e.color !== "red");
};

const hasOnlyOneOfColor = (array, color) => {
    return array.filter((e) => e.color === color).length == 1;
};