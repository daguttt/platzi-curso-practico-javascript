const results = document.getElementsByClassName('card__result');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
function getPriceWithDiscount(price, discount) {
    return (price * (100 - discount)) / 100
}
const getPriceButton = document.getElementById('get-price-button');
getPriceButton.addEventListener('click', () => {
    if (price.value && discount.value) {
        const priceWithDiscount = getPriceWithDiscount(price.value, discount.value);
        return results[0].innerHTML = `El precio con descuento es: ${priceWithDiscount}$`;
    }
    return results[0].innerHTML = `Por favor ingresa todos los valores`;
});