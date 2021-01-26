const colorsBtn = ["blue", "yellow", "white", "red", "black"];
const colorsStrip = ["blue", "yellow", "white", "red"];

const wordsList = ["ABORTAR", "DETONAR", "SEGURA", "APERTA"];

class ButtonModule {
    constructor(batteries, indicator) {
        this.color = "";
        this.word = "";
        this.batteries = batteries;
        this.indicator = indicator;
    }
    makeButton() {
        this.randomizeButtonColor();
        this.randomizeStripColor();
        this.randomizeWord();
        console.log(this);
    }

    randomizeButtonColor() {
        let colorsBtnIndex = Math.floor(Math.random() * colorsBtn.length);
        this.color = colorsBtn[colorsBtnIndex];
    }
    randomizeStripColor() {
        let colorsStripIndex = Math.floor(Math.random() * colorsStrip.length);
        this.color = colorsStrip[colorsStripIndex];
    }

    randomizeWord() {
        let wordsListIndex = Math.floor(Math.random() * wordsList.length);
        this.word = wordsList[wordsListIndex];
    }
}