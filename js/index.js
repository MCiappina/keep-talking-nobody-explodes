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
    let time = document.querySelector(".time").value * 60;
    const menu = document.querySelector("#menu");
    menu.style.display = "none";
    const gameDisplay = document.querySelector("#game");
    gameDisplay.style.display = "block";
    const timer = new Timer(time);
    let numberOfWires = Math.floor(Math.random() * (7 - 3) + 3);
    const wiresModule = new WiresModule(3);
    const game = new Game(time, modules, timer, wiresModule);
    game.timer.startTimer(game.printTime);
    game.wiresModule.makeWires();
    game.wiresModule.setCorrectWire();
};