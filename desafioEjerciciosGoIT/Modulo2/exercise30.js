/**
 * Complete el código para que la variable number escrito como el primer número desde el start hasta el end que es divisible por 5 sin la resta.

Declare la variable start con el valor 6
Declare la variable end con el valor 27
Declare la variable number sin la inicialización
Valor total de la variable number es igual a 10
En el ciclo for se usa break para salir antes de que se hayan completado todas las iteraciones del ciclo.
 */
let start = 6;
let end = 27;
let number;

for(let i = start; i < end; i+=1){
    if(i % 5 === 0){
        number = 1;
        break;
    }
}