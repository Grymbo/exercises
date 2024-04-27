/**
 * La tienda de drones de reparación está lista para abrir,
 *  sólo falta escribir un script para ordenarlos. 
 * Declarar variables y asignarles los valores adecuados:

pricePerDroid - el precio de un dron, valor 800
orderedQuantity - el número del pedido de los drones , valor 6
deliveryFee - el costo de la entrega, valor 50
totalPrice - el importe total del pedido a pagar, no se olvide de 
los gastos de envío
message - el mensaje del estado del pedido en el formato 
"You ordered droids worth <total price> credits.
 Delivery (<delivery fee> credits) is included in total price."
 */

 const pricePerDroid = 800;
 const orderedQuantity = 6;
 const deliveryFee = 50;
 const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
 const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
  console.log(message);