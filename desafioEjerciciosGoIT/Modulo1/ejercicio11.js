/**
 * La función calculateTotalPrice cuenta y devuelve el importe total
 *  de la compra. Toma dos parámetros, 
 * valores que se establecerán en el momento de su llamada.

orderedQuantity - el número de los artículos del pedido;
pricePerItem - el precio de los artículos del pedido.
Complete el código de la función para que la variable totalPrice 
registre el importe total de la compra, resultado de multiplicar 
el número de artículos por el precio.


 */

function calculateTotalPrice(orderedQuantity,pricePerItem){
    const totalPrice = orderedQuantity * pricePerItem;
    return totalPrice;
}
console.log(calculateTotalPrice(5,100));
console.log(calculateTotalPrice(8,60));
console.log(calculateTotalPrice(3,400));
console.log(calculateTotalPrice(1,3500));
console.log(calculateTotalPrice(12,70));