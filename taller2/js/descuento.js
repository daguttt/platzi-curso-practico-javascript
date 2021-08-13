const results = document.getElementsByClassName('card__result');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const coupon = document.getElementById('coupons');
function getPriceWithDiscount(price, discount, coupon = 0) {
    if (coupon.value == 'no-coupon') {
        coupon = 0;
    }
    return (price * (100 - discount - coupon)) / 100
}
const getPriceButton = document.getElementById('get-price-button');
getPriceButton.addEventListener('click', () => {
    let price = price.value;
    let discount = discount.value;
    let coupon = coupon.value == 'no-coupon' ? 0 : coupon.value;
    if (price && discount) {
        const priceWithDiscount = getPriceWithDiscount(price, discount, coupon);
        return results[0].innerHTML = `El precio con descuento es: ${priceWithDiscount}$`;
    }
    return results[0].innerHTML = `Por favor ingresa todos los valores`;
});