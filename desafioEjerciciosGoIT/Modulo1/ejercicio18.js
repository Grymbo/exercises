/**
 * La estación de drones de reparación está lista para ser lanzada, 
 * y todo lo que queda es escribir el software para el departamento de ventas.

La función makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
 ejecuta una transacción para vender drones y devuelve un mensaje 
 sobre el resultado de la transacción. 
 Declara tres parámetros, 
 valores que se establecerán en el momento de su llamada.

pricePerDroid - el precio por dron
orderedQuantity - el número de drones pedidos
customerCredits - el importe de los fondos en la cuenta del cliente
Compleméntalo con la siguiente funcionalidad:

Declare una variable totalPrice para almacenar el importe total del 
pedido y asígnele una expresión para calcular este importe.
Añada una verificación para ver si el cliente puede pagar el pedido:
si el importe a pagar supera el número de créditos en la cuenta del
 cliente, escriba la secuencia message de la variable "Insufficient funds!";
En caso contrario, deduzca el importe de la compra de la cuenta del 
cliente y anote la variable message: "You ordered <número> droids, 
you have <número> credits left".
Declare la función makeTransaction(pricePerDroid, orderedQuantity, 
    customerCredits)
Al llamar a makeTransaction(3000, 5, 23000) devuelve "You ordered 5 droids, 
you have 8000 credits left"
Al llamar a makeTransaction(1000, 3, 15000) devuelve "You ordered 3 droids,
 you have 12000 credits left"
Al llamar a makeTransaction(5000, 10, 8000) devuelve "Insufficient funds!"
Al llamar a makeTransaction(2000, 8, 10000) devuelve "Insufficient funds!"
Al llamar a makeTransaction(500, 10, 5000) devuelve "You ordered 10 droids,
 you have 0 credits left"
 */

 function makeTransaction(pricePerDroid, orderedQuantity, customerCredits){
    let message;
    const totalPrice =(pricePerDroid * orderedQuantity);

    if(totalPrice <= customerCredits) {
        message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits`
    } else {
        message = "Insufficient funds!"
    }

    return message;

    
 };
 console.log(makeTransaction(3000,5,23000));
 console.log(makeTransaction(1000,3,15000));
 console.log(makeTransaction(5000,10,8000));
 console.log(makeTransaction(2000,8,10000));
 console.log(makeTransaction(500,10,5000));