/**
 * La función getDiscount(totalSpent) define un valor de descuento dependiendo de la cantidad total de dinero gastado (parámetro totalSpent) en la tienda durante todo el tiempo (programa de afiliados). El descuento se escribe en la variable discount y se devuelve desde la función como resultado de su trabajo.

Usando operadores lógicos y de derivación, complete el código de la función.

Si se gasta 50000 ( incluido ) o más créditos, el descuento es de 10% (Socio de oro)
Si se gasta 20000 (incluido) hasta 50000 el descuento es de 5% (Socio de plata)
Si se gasta 5000 (incluido) hasta 20000 el descuento es de 2% (Socio de bronze)
Si se gasta menos de 5000 créditos, el descuento es de 0 (Socio básico)
Los valores de descuento de cada nivel se almacenan en constantes del mismo nombre BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT y GOLD_DISCOUNT.

Declare la función getDiscount(totalSpent)
Al llamar a getDiscount(137000) devuelve 0.1
Al llamar a getDiscount(46900) devuelve 0.05
Al llamar a getDiscount(8250) devuelve 0.02
Al llamar a getDiscount(1300) devuelve 0
Al llamar a getDiscount(5000) devuelve 0.02
Al llamar a getDiscount(20000) devuelve 0.05
Al llamar a getDiscount(50000) devuelve 0.1
 */

function getDiscount(totalSpent){
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

    if(totalSpent >= 50000){
        discount = GOLD_DISCOUNT;
    } else if(totalSpent >= 20000 && totalSpent < 50000){
        discount = SILVER_DISCOUNT;
    } else if(totalSpent >= 5000 && totalSpent < 20000){
        discount = BRONZE_DISCOUNT;
    } else {
        discount = BASE_DISCOUNT;
    }
    return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));