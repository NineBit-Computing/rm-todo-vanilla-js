import Person from "./map-as-object.js";
import { Vehicle, Car } from "./es6-class.js";

function demoObjectOrientation() {
  const fullName = Person.getFullName();
  // console.log(`demoObjectOrientation: default fullName : ${fullName}`);

  // const doctor = Object.create(Person);
  // doctor.setFirstName('Killer');
  // console.log(`demoObjectOrientation: doctor fullName : ${doctor.getFullName()}`);
  // console.log(`demoObjectOrientation: Person fullName : ${Person.getFullName()}`);


  const veh1 = new Vehicle('Maruti', 'Alto');
  const veh2 = new Vehicle('Volvo', 'S80');
  console.log(`demoObjectOrientation: veh1 fullName : ${veh1.getVehicleName()}`);
  console.log(`demoObjectOrientation: veh2 fullName : ${veh2.getVehicleName()}`);
  const car1 = new Car('Hyundai', 'Creta', '5');
  console.log(`demoObjectOrientation: car1 getVehicleName : ${car1.getVehicleName()} and car1 getConfig: ${car1.getConfig()} `);
}

window.demoObjectOrientation = demoObjectOrientation;