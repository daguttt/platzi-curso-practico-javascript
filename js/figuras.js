const results = document.getElementsByClassName('card__result');
// SQUARE FUNCTIONS
const squareLengthSide = document.getElementById('square-side');;
function getSquarePerimeter(side) {
    return side * 4;
}
function getSquareArea(side) {
    return side ** 2;
}
const squarePerimeterButton = document.getElementById('square-perimeter-button');
squarePerimeterButton.addEventListener('click', () => {
    let perimeter = getSquarePerimeter(parseInt(squareLengthSide.value));
    results[0].innerHTML = perimeter
});
const squareAreaButton = document.getElementById('square-area-button');

// TRIANGLE FUNCTIONS
const triangleSide1 = document.getElementById('triangle-side1');
const triangleSide2 = document.getElementById('triangle-side2');
const triangleBase = document.getElementById('triangle-base');

function getTrianglePerimeter(sides, base) {
    return sides[0] + sides[1] + base
}
function getTriangleHeight(
    sides,
    base,
    perimeter = sides[0] + sides[1] + base
) {
    // s = Semiperimeter
    let s = perimeter / 2;
    height =
        (2 / base) *
        Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - base));
    return height;
}
function getTriangleArea (base, height) {
    return (base * height) / 2;
}

// CIRCLE FUNCTIONS
// Radius
const circleRadius = document.getElementById('circle-radius');4;
// Diameter
const circleDiameter = circleRadius * 2;
// PI
const PI = Math.PI;
// Circumference
function getCircleCircumference(diameter, decimals = 8) {
    /*
    @param {Number} diameter El diámetro del círculo.
    @param {Number} decimal El limite de decimales requeridos (Por defecto es 8).
    @returns {Number} La circumferencia.
    */
    const PI = Math.PI;
    return parseFloat((diameter * PI).toFixed(decimals));
}
const circleCircumference = getCircleCircumference(circleDiameter, 3);
// Circle area
function getCircleArea(radius, decimals = 8) {
    /*
        * @param {Number} radius El radio del círculo.
        * @param {Number} decimals El limite de decimales requeridos (Por defecto es 8).
        * @returns {Number} El área del círculo.
    */
    const PI = Math.PI;
    return parseFloat((PI * (radius ** 2)).toFixed(decimals));
}
const circleArea = getCircleArea(circleRadius, 3);

// -----------------------DOM----------------------------------
//BUTTONS
// Square

// Triangle
const trianglePerimeterButton = document.getElementById('triangle-perimeter-button');
const triangleAreaButton = document.getElementById('triangle-area-button');
// Circle
const circleCircumferenceButton = document.getElementById('circle-circumference-button');
const circleAreaButton = document.getElementById('circle-area-button');

// Function