const results = document.getElementsByClassName("card__result");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const userValueCoupon = document.getElementById("coupons");
const coupons = [
    {
        name: "platzi1",
        discount: 25,
    },
    {
        name: "platzi2",
        discount: 50,
    },
    {
        name: "platzi3",
        discount: 75,
    },
];
function getPriceWithDiscount(price, discount, coupon = 0) {
    if (coupon.value == "no-coupon") {
        coupon = 0;
    }
    return (price * (100 - discount - coupon)) / 100;
}
const getPriceButton = document.getElementById("get-price-button");
getPriceButton.addEventListener("click", () => {
    let priceValue = Number(price.value);
    let discountValue = Number(discount.value);
    let isValidUserCoupon = coupons.find(
        (coupon) => coupon.name == userValueCoupon.value
    );
    if (price && discount && isValidUserCoupon) {
        let couponValue = isValidUserCoupon.discount;
        let priceWithDiscount = getPriceWithDiscount(
            priceValue,
            discountValue,
            couponValue
        );
        if (priceWithDiscount <= 0) {
            priceWithDiscount = 0;
        }
        return (results[0].innerHTML = `El precio con descuento es: ${priceWithDiscount}$`);
    }
    alert(`'${userValueCoupon.value}' no está habilitado.`);
    return (results[0].innerHTML = `Por favor ingresa todos los valores`);
});
