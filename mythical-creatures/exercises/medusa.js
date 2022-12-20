var Person = require("./person");
var Statue = require("./statue");
class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    if (this.statues.length >= 3) {
      let shiftPerson = this.statues.shift();
      let newPerson = new Person(shiftPerson.name, "relieved");
      this.statues.push(new Statue(person.name));
      return newPerson;
    } else {
      this.statues.push(new Statue(person.name));
    }
  }
}
module.exports = Medusa;
