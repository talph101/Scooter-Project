const Scooter = require('../src/Scooter')


// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})
//if you hard code something you don't pass it through
//the constructor as a parameter
// Method tests
describe('scooter properties', () => {
  // tests here!
  const thisScooter = new Scooter("station")
  test("station is a property of Scooter", () => {
    expect(thisScooter.station).toBe("station");
  })

  test("user who checked out scooter", () => {
    expect(thisScooter.user).toEqual(null);
  })

  test("tests is serial is a property of Scooter", () => {
    expect(thisScooter.serial).toEqual(Scooter.nextSerial);
  })

  test("nextSerial is static number", () => {
    expect(Scooter.nextSerial).toEqual(1);
  })

  test("charge is a number", () => {
    expect(typeof thisScooter.charge).toBe('number');
    expect(thisScooter.charge).toBeGreaterThanOrEqual(0);
    expect(thisScooter.charge).toBeLessThanOrEqual(100);
  })

  // rent method
  // test("rent method", () => {
  //   expect()
  // })

  // dock method

  // requestRepair method

  // charge method

})
