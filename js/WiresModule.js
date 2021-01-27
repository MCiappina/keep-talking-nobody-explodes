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
    }
    setCorrectWire() {
        let copyArray = [...this.wires];
        switch (this.numberOfWires) {
            case 3:
                if (noWiresOfColor(copyArray, "red")) {
                    this.wires[1].correctWire = true;
                } else if (isLastWireColor(copyArray, "white")) {
                    this.wires[2].correctWire = true;
                } else if (has2WiresOfColor(copyArray, "blue")) {
                    let indexOfLastBlue = copyArray
                        .map((e) => e.color)
                        .lastIndexOf("blue");
                    this.wires[indexOfLastBlue].correctWire = true;
                } else {
                    this.wires[2].correctWire = true;
                }
                break;
            case 4:
                if (
                    has2WiresOfColor(copyArray, "red") &&
                    isSerialNumberOdd(this.serialNumber)
                ) {
                    let indexOfLastRed = copyArray.map((e) => e.color).lastIndexOf("red");
                    this.wires[indexOfLastRed].correctWire = true;
                } else if (
                    isLastWireColor(copyArray, "yellow") &&
                    noWiresOfColor(copyArray, "red")
                ) {
                    this.wires[0].correctWire = true;
                } else if (hasOnlyOneOfColor(copyArray, "blue")) {
                    this.wires[0].correctWire = true;
                } else if (has2WiresOfColor(copyArray, "yellow")) {
                    this.wires[3].correctWire = true;
                } else {
                    this.wires[1].correctWire = true;
                }
                break;
            case 5:
                if (
                    isLastWireColor(copyArray, "black") &&
                    isSerialNumberOdd(this.serialNumber)
                ) {
                    this.wires[3].correctWire = true;
                } else if (
                    hasOnlyOneOfColor(copyArray, "red") &&
                    has2WiresOfColor(copyArray, "yellow")
                ) {
                    this.wires[0].correctWire = true;
                } else if (noWiresOfColor(copyArray, "black")) {
                    this.wires[1].correctWire = true;
                } else {
                    this.wires[0].correctWire = true;
                }
                break;
            case 6:
                if (
                    noWiresOfColor(copyArray, "yellow") &&
                    isSerialNumberOdd(this.serialNumber)
                ) {
                    this.wires[2].correctWire = true;
                } else if (
                    hasOnlyOneOfColor(copyArray, "yellow") &&
                    has2WiresOfColor(copyArray, "white")
                ) {
                    this.wires[3].correctWire = true;
                } else if (noWiresOfColor(copyArray, "red")) {
                    this.wires[5].correctWire = true;
                } else {
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
    cutWire() {
        return this.correctWire;
    }
    wireAsDiv() {
        let div = document.createElement("div");
        div.classList.add(`${this.color}`);
        div.classList.add("wire");
        div.classList.add("hoverable");
        return div;
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

const noWiresOfColor = (array, color) => {
    return array.every((e) => e.color !== color);
};

const hasOnlyOneOfColor = (array, color) => {
    return array.filter((e) => e.color === color).length == 1;
};

const isLastWireColor = (array, color) => {
    return array[array.length - 1].color === color;
};