/**
 * La función makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
 *  genere y devuelva un mensaje sobre la compra de drones de reparación.
 *  Declara tres parámetos,
 * valores que se establecerán en el momento de su llamada.

orderedQuantity - el número de drones en el pedido
pricePerDroid - el precio por dron
deliveryFee - el costo de la entrega
Complete el código de la función para que devuelva un mensaje de 
pedido al formato "You ordered droids worth <total price> credits. 
Delivery (<delivery fee> credits) is included in total price.". 
No se olvide del costo de la entrega al calcular el costo total.


 */
function makeOrderMessage(orderedQuantity,pricePerDroid,deliveryFee){
    const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
    const message = `you ordered droids worth ${totalPrice} credits. Delivery(${deliveryFee} credits is included in total price)`;

    return message;
}
console.log(makeOrderMessage(2,100,50));
console.log(makeOrderMessage(4,300,100));
console.log(makeOrderMessage(10,70,200));