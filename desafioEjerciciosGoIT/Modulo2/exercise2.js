/**
 * La función checkPassword obtiene la contraseña del usuario en el parámetro password, lo comprueba con la contraseña del administrador en la variable ADMIN_PASSWORD y devuelve un mensaje sobre el resultado de la verificación.

Refactorizar el código de la función checkPassword usando el «retorno anticipado»:

eliminar la variable message
eliminar else
el código debería funcionar como lo hacía antes de la optimización
Declare la función checkPassword(password)
Al llamar a checkPassword("mangohackzor") devuelve "Access denied, wrong password!"
Al llamar a checkPassword("polyhax") devuelve "Access denied, wrong password!"
Al llamar a checkPassword("jqueryismyjam") devuelve "Welcome!"
 */
function checkPassword(password){
    const ADMIN_PASSWORD = "jqueryismyjam";

    if(ADMIN_PASSWORD === password){
        return "Welcome!!!";
    }
    return "Access denied, wrong password!!!";
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));