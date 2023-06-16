const calculateNumber = require('./Custom_Modules/math');
const squareNumber = require('./Custom_Modules/square');
const circle = require('./Custom_Modules/circle');

const add = calculateNumber.additionNumber(10, 20);
console.log("The Addition is: ", add);

const subs = calculateNumber.substractNumber(20, 10);
console.log("The Substraction is: ", subs);

const multiply = calculateNumber.multiplyNumber(10, 20);
console.log("The multipication is: ", multiply);

const divide = calculateNumber.divideNumber(20, 10);
console.log("The division is: ", divide);

const mulplyNumber = squareNumber.square(2, 3);
console.log("Multiply of two numbers", mulplyNumber);

const res1 = circle.calculateCircumference(3);
console.log(res1);

const res2 = circle.calculateArea(2);
console.log(res2);