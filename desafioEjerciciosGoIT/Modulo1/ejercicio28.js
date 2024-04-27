/**
 * La función checkPassword(password) obtiene la contraseña en el parámetro password, lo comprueba con la contraseña del administrador en la variable ADMIN_PASSWORD y regresa un mensaje sobre el resultado de la verificación, guardado en la variable message.

Si el valor del parámetro password:

es igual a null, por lo que el usuario ha cancelado la operación y el message se escribe la cadena "Canceled by user!".
Si el valor es el mismo de ADMIN_PASSWORD, en la variable message se asigna la cadena "Welcome!".
Si no se cumple ninguna de las condiciones anteriores, en la variable mensaje se escribe la cadena "Access denied, wrong password!".
Refactorice el código, sustituyendo la instrucción if..else' por switch', y no se olvide del bloque default (análogo else).

Declare la función checkPassword(password)
Al llamar a checkPassword("mangohackzor") devuelve "Access denied, wrong password!"
Al llamar a checkPassword(null) devuelve "Canceled by user!"
Al llamar a checkPassword("polyhax") devuelve "Access denied, wrong password!"
Al llamar a checkPassword("jqueryismyjam") devuelve "Welcome!"
 */

function checkPassword(password){
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

    switch (password){
        case null:
            message = "Canceled by user!";
            break;
        case ADMIN_PASSWORD:
            message = "Welcome!";
            break;
        default:
            message = "Access denied, wrong password!";
    };
    return message;
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));