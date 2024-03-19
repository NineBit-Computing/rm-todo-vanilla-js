class Vehicle {
  constructor(myBrand, myModel) {
    this.brand = myBrand;
    this.model = myModel;
  }
  getVehicleName() {
    return this.brand + ' ' + this.model;
  }
}

class Car extends Vehicle {
  constructor(carBrand, carModel, carSeats) {
    super(carBrand, carModel);
    this.seats = carSeats;
  }
  getConfig() {
    return this.brand + ' ' + this.model + ' ' + this.seats;
  }
}

export { Vehicle, Car };