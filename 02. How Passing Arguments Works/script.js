'use strict';
const flight = 'LH234';

const eph = {
  name: 'Ephraim S',
  passport: 5644564544,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

  if (passenger.passport === 5644564544) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, eph);
console.log(flight);
console.log(eph);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(eph);

checkIn(flight, eph);
console.log(flight);
console.log(eph);
