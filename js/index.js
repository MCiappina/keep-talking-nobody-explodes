const modules = document.querySelector(".modules").value;
const time = document.querySelector(".time").value * 60;

let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");

const timer = new Timer(time);

class Game {
    constructor(time, modules) {
        this.mistakes = 0;
        this.victoryPoints = 0;
        this.time = time;
        this.modules = modules;
    }

    updateTimer() {}
}

window.onload = () => {
    document.getElementById("start").onclick = () => {
        startGame();
    };
};

const startGame = () => {
    const menu = document.querySelector("#menu");
    menu.style.display = "none";
    const gameDisplay = document.querySelector("#game");
    gameDisplay.style.display = "block";
    const timer = new Timer(time);
    const game = new Game(time, modules);
    timer.startTimer(printTime);
};

const printTime = () => {
    printMinutes();
    printSeconds();
};

const printMinutes = () => {
    let minutes = timer.twoDigitsNumber(timer.getMinutes());
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];
};

const printSeconds = () => {
    let seconds = timer.twoDigitsNumber(timer.getSeconds());
    console.log(seconds);
    secDec.innerText = seconds[0];
    secUni.innerText = seconds[1];
};