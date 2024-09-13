class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial;
    this.charge = 0;
    this.isBroken = false;
  }

  rent(user) {
    if(this.charge > 20 && this.isBroken === false) {
      this.user = user;
    } else {
      throw new RuntimeError("scooter needs to charge or scooter needs repair");
    }
  }


  dock(station) {
    
    return station;

  }
}

module.exports = Scooter
