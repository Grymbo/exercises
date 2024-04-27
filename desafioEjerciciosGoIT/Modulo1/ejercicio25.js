/**
 * Modificar la solución del problema del «stock de artíclulos» sustituyendo la instrucción if...else con un operador ternario.

Declare la función checkStorage(available, ordered).
Operador ternario empleado.
Al llamar a checkStorage(100, 50) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(100, 130) devuelve "Not enough goods in stock!"
Al llamar a checkStorage(200, 20) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(200, 150) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(150, 180) devuelve "Not enough goods in stock!"
 */

function checkStorage(available, ordered){
    const cuenta = (ordered <= available) ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
    return cuenta;
};
console.log(checkStorage(100,50));
console.log(checkStorage(100,130));
console.log(checkStorage(200,20));
console.log(checkStorage(200,150));
console.log(checkStorage(150,180));