/**
 * La función `makeMessage(name, price)` 
 * сrea y devuelve un mensaje de compra. Declara dos parámetros, 
 * valores que se establecerán en el momento de su llamada.
name - nombre del producto
price - precio del producto
Completar el código de la función para que la secuencia se escriba
 en la variable message "You picked <product name>, 
 price per item is <product price> credits", 
 donde <product name> y <product price> 
 son los valores de los parámetros name y price. 
 Use la sintaxis de la secuencia de las plantillas
 */

 function makeMessage(name, price){
    let message = `You picked ${name}, price per item is ${price} credits.`;
    return message;
 }
 console.log(makeMessage('Radar',6150));
 console.log(makeMessage('Scanner',3500));
 console.log(makeMessage('Reactor',8000));
 console.log(makeMessage('Engine',4070));