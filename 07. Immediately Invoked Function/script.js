'use strict';
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

//Immediately invoked Function Expression ( IIFE )
(function () {
  console.log(`This will NEVER RUN again (IIFE)`);
})();

(() => {
  console.log(`This will NEVER RUN again (IIFE)`);
})();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
