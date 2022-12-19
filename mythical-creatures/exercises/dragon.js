const { canonicalize } = require("mocha/lib/utils");

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.count = 0;
  }

  greet(words) {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.count += 1;
    if (this.count > 2) {
      this.hungry = false;
      this.count = 0;
    } else {
      this.hungry = true;
    }
  }
}

module.exports = Dragon;
