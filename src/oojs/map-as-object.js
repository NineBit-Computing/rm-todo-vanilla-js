const Person = {
  fName: 'James',
  lName: 'Bond',
  getFullName: function () {
    return this.fName + ' ' + this.lName;
  },
  setFirstName: function (myFirstName) {
    this.fName = myFirstName;
  },
  address: {
    city: 'Indore',
    pin: 452010
  }
}

export default Person;