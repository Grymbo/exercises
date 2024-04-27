/**
 * La función isNumberNotInRange(start, end, number) comprueba si un número está en un intervalo. Es decir, el número debe ser menor o igual que start y mayor o igual que final. El resultado de la expresión de verificación es true o false.

Declara dos parámetros, valores que se establecerán en el momento de su llamada:

number - el número que se comprueba que no ha entrado
start - el inicio del rango numérico
end - el fin del intervalo de fechas
Asigna a la variable isNotInRange una expresión para invertir el valor de la variable isInRange usando el operador !.

Declare la función isNumberNotInRange(start, end, number)
La expresión de verificación usada por el operador !
Al llamar a isNumberNotInRange(10, 30, 17) devuelve false
Al llamar a isNumberNotInRange(10, 30, 5) devuelve true
Al llamar a isNumberNotInRange(20, 50, 24) devuelve false
Al llamar a isNumberNotInRange(20, 50, 76) devuelve true
 */

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange;
    return isNotInRange;
}
console.log(isNumberNotInRange(10,30,17));
console.log(isNumberNotInRange(10,30,5));
console.log(isNumberNotInRange(20,50,24));
console.log(isNumberNotInRange(20,50,76));