class Chronometer {
  constructor() {
    this.currentTime =  0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    
    this.intervalId  = setInterval(() => {
      if (printTimeCallback !== undefined) printTimeCallback();
      this.currentTime += 1;
    }, 10);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/(100*60));
  }

  getSeconds() {
    return Math.floor((this.currentTime%6000)/100);
  }

  getCentiseconds() {
    return this.currentTime%100;
  }

  computeTwoDigitNumber(value) {
    let myString = "0" + value;
    return myString.length > 2 ? myString.slice(1) : myString.slice(0);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + "." + this.computeTwoDigitNumber(this.getCentiseconds());
  }
}
