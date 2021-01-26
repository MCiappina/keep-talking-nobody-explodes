class Timer {
    constructor(time) {
        this.currentTime = time;
        this.intervalId = 0;
    }
    startTimer(callback) {
        this.intervalId = setInterval(() => {
            callback();
            this.currentTime -= 1;
            if (this.currentTime < 0) {
                this.stopTimer();
            }
            // console.log(this.currentTime);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalId);
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
        let minutes = this.twoDigitsNumber(this.getMinutes());
        let seconds = this.twoDigitsNumber(this.getSeconds());
        console.log(`${minutes}:${seconds}`);
        return `${minutes}:${seconds}`;
    }
}