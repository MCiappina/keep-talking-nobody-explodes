class Timer {
    constructor(time) {
        this.currentTime = time;
        this.intervalId = 0;
    }
    startTimer(callback) {
        this.intervalId = setInterval(() => {
            callback();
            this.currentTime--;
            if (this.currentTime === 0) {
                clearInterval(this.intervalId);
            }
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
        return this.currentTime % 60;
    }
    twoDigitsNumber(num) {
        return String(num).padStart(2, "0");
    }
    printSplit() {
        let minutes = this.twoDigitNumber(this.getMinutes());
        let seconds = this.twoDigitNumber(this.getSeconds());
        console.log(`${minutes}:${seconds}`);
        return `${minutes}:${seconds}`;
    }
}