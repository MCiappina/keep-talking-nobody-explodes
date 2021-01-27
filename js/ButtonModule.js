const colorsBtn = ["blue", "yellow", "white", "red", "black"];
const colorsStrip = ["blue", "yellow", "white", "red"];

const wordsList = ["ABORTAR", "DETONAR", "SEGURA", "APERTA"];

class ButtonModule {
  constructor(batteries, indicator) {
    this.batteries = batteries;
    this.indicator = indicator;
    this.color = "";
    this.strip = "";
    this.word = "";
    this.holdCounter = "";
    this.holdThreshold = "";
    this.stripCondition = "";
  }
  makeButton() {
    this.randomizeButtonColor();
    this.randomizeWord();
  }

  buttonAsDiv() {
    let div = document.createElement("div");
    div.classList.add(`${this.color}`);
    div.classList.add("button");
    div.classList.add("hoverable");
    div.innerHTML = `<h2>${this.word}</h2>`;
    return div;
  }

  setHoldThreshold() {
    if (buttonIsColor(this, "blue") && buttonSays(this, "ABORTAR")) {
      this.holdThreshold = -1;
      this.randomizeStripColor();
    } else if (hasMoreThanXBattery(this, 1) && buttonSays(this, "DETONAR")) {
      this.holdThreshold = 100;
    } else if (buttonIsColor(this, "white") && litIndicatorLabel(this, "CAR")) {
      this.holdThreshold = -1;
      this.randomizeStripColor();
    } else if (hasMoreThanXBattery(this, 2) && litIndicatorLabel(this, "FRK")) {
      this.holdThreshold = 100;
    } else if (buttonIsColor(this, "yellow")) {
      this.holdThreshold = -1;
      this.randomizeStripColor();
    } else if (buttonIsColor(this, "red") && buttonSays(this, "SEGURA")) {
      this.holdThreshold = 100;
    } else {
      this.holdThreshold = -1;
      this.randomizeStripColor();
    }
  }

  setStripCondition() {
    if (this.strip) {
      switch (this.strip) {
        case "blue":
          this.stripCondition = 4;
          break;
        case "white":
          this.stripCondition = 1;
          break;
        case "yellow":
          this.stripCondition = 5;
          break;
        default:
          this.stripCondition = 1;
          break;
      }
    }
  }

  randomizeButtonColor() {
    let colorsBtnIndex = Math.floor(Math.random() * colorsBtn.length);
    this.color = colorsBtn[colorsBtnIndex];
  }
  randomizeStripColor() {
    let colorsStripIndex = Math.floor(Math.random() * colorsStrip.length);
    this.strip = colorsStrip[colorsStripIndex];
  }

  randomizeWord() {
    let wordsListIndex = Math.floor(Math.random() * wordsList.length);
    this.word = wordsList[wordsListIndex];
  }
}

const buttonIsColor = (button, color) => {
  return button.color === color;
};

const buttonSays = (button, word) => {
  return button.word === word;
};

const hasMoreThanXBattery = (button, num) => {
  return button.batteries > num;
};

const litIndicatorLabel = (button, label) => {
  return button.indicator.isLit && button.label === label ? true : false;
};
