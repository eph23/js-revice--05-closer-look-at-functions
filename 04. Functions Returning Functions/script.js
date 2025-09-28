'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Eph');
greetHey('Steven');
greet('Hello')('Ninja');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Bonjour')('Eph');
