// SQUARE CODE
const lengthSquareSide = 5;
const squarePerimeter = lengthSquareSide * 4;
const squareArea = lengthSquareSide * lengthSquareSide;
console.group("Cuadrado");
console.log(`Los lados del cuadrado miden ${lengthSquareSide}`);
console.log(`El perimetro del cuadrado es ${squarePerimeter}cm`);
console.log(`El área del cuadrado es ${squareArea}cm^2`);
console.groupEnd();

// TRIANGLE CODE
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const trianglePerimeter = sideTriangle1 + sideTriangle2 + baseTriangle;
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
const triangleArea =
    (baseTriangle *
        getTriangleHeight([sideTriangle1, sideTriangle2], baseTriangle)) /
    2;

console.group("Triangulo");
console.log(
    `Dos lados del triangulo miden: ${sideTriangle1}cm. Y su base mide: ${baseTriangle}cm.`
);
console.log(`El perimetro del triangulo es: ${trianglePerimeter}cm`);
console.log(`El área del triangulo es: ${Math.floor(triangleArea)}cm^2`);
console.groupEnd();

// CIRCLE CODE
// Radius
const circleRadius = 4;
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
console.group("Circulo");
console.log(`El radio del circulo es: ${circleRadius}cm`);
console.log(`El diámetro del circulo es: ${circleDiameter}cm`);
console.log(`La circunferencia del círculo es: ${circleCircumference}cm`);
console.log(`El área del círculo es: ${circleArea}cm^2`);
console.groupEnd();