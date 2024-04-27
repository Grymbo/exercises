/**
 * La función isNumberInRange(start, end, number) comprueba si un número está en un intervalo. Declara tres parámetros, valores que se establecerán en el momento de su llamada

number - el número que se verificó
start - el inicio del rango numérico
end - el fin del intervalo de fechas
Asigna una expresión a la variable isInRange para comprobar si number aparece en el rango numérico van desde starthastaend. Es decir, el número debe ser mayor o igual a starty menor o igual queend. El resultado de la expresión de comprobación es boolean trueofalse`.

Declare la función isNumberInRange(start, end, number)
La expresión de verificación usada por el operador &&
Al llamar a isNumberInRange(10, 30, 17) devuelve true
Al llamar a isNumberInRange(10, 30, 5) devuelve false
Al llamar a isNumberInRange(20, 50, 24) devuelve true
Al llamar a isNumberInRange(20, 50, 76) devuelve false
 */

function isNumberInRange(start, end, number) {
    const isInRange = number;
    let message;

    if(start <= isInRange && isInRange <= end){
        message = true;
    }  else {
        message = false;
    }
    return message;
}
console.log(isNumberInRange(10,30,17));
console.log(isNumberInRange(10,30,5));
console.log(isNumberInRange(20,50,24));
console.log(isNumberInRange(20,50,76));