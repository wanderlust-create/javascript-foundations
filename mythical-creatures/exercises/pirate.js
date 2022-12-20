class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = false;
    this.booty = 0;
    this.cursed = false;
  }
  robShip() {
    if (this.booty > 500) {
      this.booty += 100;
      return "YAARRR!";
    }else {
        this.cursed = true
        this.booty = 500
        return "ARG! I've been cursed!";
    }
  }
}

module.exports = Pirate;
