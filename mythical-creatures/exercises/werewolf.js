class Wareworf {
  constructor(name, form) {
    this.name = name;
    this.form = "human";
    this.toggle = 0;
    this.hungry = false;
  }
  completeTransformation() {
    if (this.toggle === 1) {
      return this.isHuman();
    } else if (this.toggle === 0) {
      return this.isWolf();
    }
  }

  eatVictim(victim) {
    if (this.form === "wolf") {
      victim.alive = false;
      this.isHuman();
      return `Yum, ${victim.name} was delicious.`;
    }
    if (this.form === "human") {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }

  isHuman() {
    this.form = "human";
    this.toggle = 0;
    this.hungry = false;
    return "Where are I?";
  }

  isWolf() {
    this.form = "wolf";
    this.toggle = 1;
    this.hungry = true;
    return "Aaa-Woooo!";
  }
}
module.exports = Wareworf;
