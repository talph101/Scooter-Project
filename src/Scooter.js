class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial;
    this.charge = 0;
    this.isBroken = true;
  }
}

module.exports = Scooter
