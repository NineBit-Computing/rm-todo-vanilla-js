import Person from "./map-as-object.js";
import { Vehicle, Car } from "./es6-class.js";

function demoObjectOrientation() {
  const fullName = Person.getFullName();
  console.log(`Create a Parent Class and print its fullName : ${fullName}`);
  const doctor = Object.create(Person);
  doctor.setFirstName('Killer');
  console.log(`Create a new Sub Class, set its first name and print its fullName : ${doctor.getFullName()}`);
  console.log(`Reprint fullName of Parent Class: ${Person.getFullName()}`);
  console.log(``);

  const veh1 = new Vehicle('Maruti', 'Alto');
  const veh2 = new Vehicle('Volvo', 'S80');
  console.log(`Super Class method invocation: veh1 > fullName() : ${veh1.getVehicleName()}`);
  console.log(`Super Class method invocation: veh2 > fullName() : ${veh2.getVehicleName()}`);
  const car1 = new Car('Hyundai', 'Creta', '5');
  console.log(`
  Sub Class invoking Super Class method: car1 > getVehicleName() : ${car1.getVehicleName()} -
  Sub Class invoking own method: car1 > getConfig(): ${car1.getConfig()} `);
}

window.demoObjectOrientation = demoObjectOrientation;