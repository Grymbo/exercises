/**
 * Escriba la condición en la instrucción if para que la función funcione correctamente.

Declare la función checkAge(age).
La expresión de verificación usada por el operador >=
Al llamar a checkAge(20) devuelve "You are an adult"
Al llamar a checkAge(8) devuelve "You are a minor"
Al llamar a checkAge(14) devuelve "You are a minor"
Al llamar a checkAge(38) devuelve "You are an adult"
En el cuerpo de la función sólo hay una instrucción if
En el cuerpo de la función no hay instrucciones else o else if
 */

function checkAge(age){
    if(age >= 18){
        return "You are an adult";
    }
    return "You are a minor";
}
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(19));