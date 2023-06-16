const PI = 3.14;

// Calculate area of circle
function calculateCircumference(radius) {
  return 2 * PI * radius;
}

function calculateArea(radius) {
  return PI * radius * radius;
}

module.exports = {
  calculateCircumference, calculateArea
};