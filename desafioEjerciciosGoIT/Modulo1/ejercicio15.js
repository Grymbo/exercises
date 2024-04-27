/**
 * Añadir una expresión para comprobar la edad del usuario, 
 * el valor de age, en la condición para la instrucción if.

Si el usuario es un adulto, el bloque if debe ejecutarse y en la
 variable message se escribe la cadena "You are an adult".
En caso contrario, se debe ejecutar el bloque else y escribir 
la cadena "You are a minor".
Declare la función checkAge(age).

La expresión de verificación usada por el operador >=
Al llamar a checkAge(20) devuelve "You are an adult"
Al llamar a checkAge(8) devuelve "You are a minor"
Al llamar a checkAge(14) devuelve "You are a minor"
Al llamar a checkAge(38) devuelve "You are an adult"
 */
function checkAge(age) {
    let message;

    if(age >= 18){
        return message = "You are an adult";
    } else {
        return message = "You are a minor"
    };
};
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));