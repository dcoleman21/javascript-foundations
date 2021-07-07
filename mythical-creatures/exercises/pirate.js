class Pirate {
  constructor(name, job, cursed, booty) {
    this.name = name;
    if (job === undefined) {
      this.job = 'scallywag';
    } else {
      this.job = job;
    };
    this.cursed = false;
    this.booty = 0;
  };

  robShip() {
    this.cursed = true
    if (this.booty === 500) {
      return 'ARG! I\'ve been cursed!'
    } else {
      this.booty = this.booty + 100;
      return 'YAARRR!'
    }
  };

  // liftCurse() {
  //   if (this.booty === 500) {
  //     this.booty = this.booty - 300
  //   }
  //   this.cursed
  // };
};

module.exports = Pirate;
