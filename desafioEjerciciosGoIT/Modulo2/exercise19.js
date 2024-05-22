/**
 * Complete el código del ciclo for para que registre todos los elementos del array fruits en secuencia.

Declare la variable fruits
El valor de la variable fruits es un array ["apple", "plum", "pear", "orange"]
Declare la variable i - recuento de iteraciones
El valor inicial de la variable i es igual a 0
La condición del ciclo se reduce a true siempre que i sea menor que 4.
En cada iteración, el valor de la variable i se incrementa en uno
En el cuerpo del ciclo for se declara la variable const fruit y se le asigna un valor a esta variable, un elemento del array
El cuerpo del ciclo for usa la emisión de la variable fruit a la consola
 */

var fruits = ["apple", "plum", "pear", "orange"];

for(let i = 0; i < fruits.length; i += 1){
    //const fruit = fruits[i];
    console.log(fruits[i]);
}