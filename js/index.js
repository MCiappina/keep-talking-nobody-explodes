const modules = document.querySelector(".modules").value;

let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

class Game {
    constructor(time, modules, timer, wiresModule) {
        this.mistakes = 0;
        this.victoryPoints = 0;
        this.time = time;
        this.modules = modules;
        this.timer = timer;
        this.wiresModule = wiresModule;
    }

    //todo gameover

    checkGameover = () => {
        if (!this.timer.currentTime) {
            this.timer.stopTimer();
        }
    };

    renderWires = () => {
        const gameDisplay = document.querySelector("#game");
        const wireModule = document.createElement("div");
        wireModule.classList.add("wire-module");
        gameDisplay.appendChild(wireModule);
        this.wiresModule.wires.forEach((e) => {
            wireModule.appendChild(e.wireAsDiv());
        });
    };

    printTime = () => {
        this.printMinutes();
        this.printSeconds();
    };

    printMinutes = () => {
        let minutes = this.timer.twoDigitsNumber(this.timer.getMinutes());
        minDec.innerText = minutes[0];
        minUni.innerText = minutes[1];
    };

    printSeconds = () => {
        let seconds = this.timer.twoDigitsNumber(this.timer.getSeconds());
        secDec.innerText = seconds[0];
        secUni.innerText = seconds[1];
    };
}

window.onload = () => {
    document.getElementById("start").onclick = () => {
        startGame();
    };
};

const startGame = () => {
    // display Changes
    const gameDisplay = document.querySelector("#game");
    const menu = document.querySelector("#menu");
    menu.style.display = "none";
    gameDisplay.style.display = "block";

    // timer Initialization
    let time = document.querySelector(".time").value * 60;
    const timer = new Timer(time);

    // wiresModule initialization
    let numberOfWires = Math.floor(Math.random() * (7 - 3) + 3);
    let serialNumber = randomizeSerialNumber();
    const wiresModule = new WiresModule(numberOfWires, serialNumber);

    // game Initialization
    const game = new Game(time, modules, timer, wiresModule);
    game.timer.startTimer(game.printTime);
    game.wiresModule.makeWires();
    game.wiresModule.setCorrectWire();
    game.renderWires();
};

const randomizeSerialNumber = () => {
    let randomString;
    do {
        randomString = Math.random().toString(36).slice(-5);
    } while (randomString.split("").every((e) => typeof e === "number"));
    randomString += Math.floor(Math.random() * 10);
    return randomString;
};