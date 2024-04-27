/**
 * La función checkPassword(password) obtiene la contraseña del 
 * usuario en el parámetro password, lo comprueba con la contraseña 
 * del administrador en la variable ADMIN_PASSWORD y devuelve un mensaje
 *  sobre el resultado de la comparación, almacenado en la variable message.

Si el valor del parámetro password es igual a null, significa que el 
usuario ha cancelado la operanción y en el message se registra la cadena
 "Canceled by user!".
Si el valor del parámetro password coincide con el valor ADMIN_PASSWORD,
 en la secuencia mensaje se asigna la variable "Welcome!".
Si no se cumple ninguna de las condiciones anteriores,
 la variable mensaje se escribe en la cadena "Access denied, wrong password!".
Declare la función checkPassword(password)
Al llamar a checkPassword("mangohackzor") devuelve "Access denied, wrong password!"
Al llamar a checkPassword(null) devuelve "Canceled by user!"
Al llamar a checkPassword("polyhax") devuelve "Access denied, wrong password!"
Al llamar a checkPassword("jqueryismyjam") devuelve "Welcome!"
 */

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

    if(password === null){
        message = "Canceled by user!";
    } else if(password === ADMIN_PASSWORD){
        message = "Welocome";
    } else {
        message = "Access denied, wrong password!";
    }
    return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));