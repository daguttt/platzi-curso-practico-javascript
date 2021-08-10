// Results space
const results = document.getElementsByClassName('card__result');

// **********************SQUARE FUNCTIONS*************************
// Square length side
const squareLengthSide = document.getElementById('square-side');
function getSquarePerimeter(side) {
    return side * 4;
}
function getSquareArea(side) {
    return side ** 2;
}
// Square Perimeter
const squarePerimeterButton = document.getElementById('square-perimeter-button');
squarePerimeterButton.addEventListener('click', () => {
    if (squareLengthSide.value) {
        const perimeter = getSquarePerimeter(parseInt(squareLengthSide.value));
        squareLengthSide.value = ""
        return results[0].innerHTML = `${perimeter}cm`;
    }
    return results[0].innerHTML = `Por favor ingresa un valor`;
});
// Square Area
const squareAreaButton = document.getElementById('square-area-button');
squareAreaButton.addEventListener('click', () => {
    if (squareLengthSide.value) {
        const area = getSquareArea(parseInt(squareLengthSide.value));
        squareLengthSide.value = ""
        return results[0].innerHTML = `${area.toFixed(2)}cm^2`;
    }    
    return results[0].innerHTML = `Por favor ingresa un valor`;
});

// *********************TRIANGLE FUNCTIONS************************************
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
// Triangle Perimeter
const trianglePerimeterButton = document.getElementById('triangle-perimeter-button');
trianglePerimeterButton.addEventListener('click', () => {
    if (triangleSide1.value && triangleSide2.value && triangleBase.value) {
        const perimeter = getTrianglePerimeter([Number(triangleSide1.value), Number(triangleSide2.value)], Number(triangleBase.value));
        return results[1].innerHTML = `${perimeter}cm`;
    }
    return results[1].innerHTML = `Por favor ingresa todos los valores`;
});
// Triangle Area
const triangleAreaButton = document.getElementById('triangle-area-button');
triangleAreaButton.addEventListener('click', () => {
    if (triangleSide1.value && triangleSide2.value && triangleBase.value) {
        const height = getTriangleHeight([Number(triangleSide1.value), Number(triangleSide2.value)], Number(triangleBase.value))
        const area = getTriangleArea(Number(triangleBase.value), height);
        return results[1].innerHTML = `${area.toFixed(2)}cm^2`;
    }
    return results[1].innerHTML = `Por favor ingresa todos los valores`;
});

// *********************CIRCLE FUNCTIONS************************************
// Radius
const circleRadius = document.getElementById('circle-radius');
function getCircleCircumference(diameter, decimals = 8) {
    /*
    @param {Number} diameter El diámetro del círculo.
    @param {Number} decimal El limite de decimales requeridos (Por defecto es 8).
    @returns {Float} La circumferencia.
    */
    const PI = Math.PI;
    return parseFloat((diameter * PI).toFixed(decimals));
}
//Circle Circumference
const circleCircumferenceButton = document.getElementById('circle-circumference-button');
circleCircumferenceButton.addEventListener('click', () => {
    if (circleRadius.value) {
        const circumference = getCircleCircumference(parseInt(circleRadius.value), 2);
        circleRadius.value = ""
        return results[2].innerHTML = `${circumference}cm`;
    }
    return results[2].innerHTML = `Por favor ingresa un valor`;
})
function getCircleArea(radius, decimals = 8) {
    /*
    * @param {Number} radius El radio del círculo.
    * @param {Number} decimals El limite de decimales requeridos (Por defecto es 8).
    * @returns {Float} El área del círculo.
    */
   const PI = Math.PI;
   return parseFloat((PI * (radius ** 2)).toFixed(decimals));
}
// Circle area
const circleAreaButton = document.getElementById('circle-area-button');
circleAreaButton.addEventListener('click',() => {
    if (circleRadius.value) {
        const area = getCircleArea(parseInt(circleRadius.value), 2);
        circleRadius.value = ""
        return results[2].innerHTML = `${area.toFixed(2)}cm^2`;
    }    
    return results[2].innerHTML = `Por favor ingresa un valor`;
});