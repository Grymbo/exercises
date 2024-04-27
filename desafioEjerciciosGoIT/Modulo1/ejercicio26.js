/**
 * La función checkPassword(password) compara la contraseña que se le proporciona (parámetro password) con la contraseña del administrador guardada (constante ADMIN_PASSWORD) y devuelve una secuencia con un mensaje sobre el resultado

Usando un operador ternario, completa la función para:

Si los valores de passwordyADMIN_PASSWORDson iguales, asigne la variablemessagea la secuencia"Access is allowed"`.
En caso contrario, asigne message a la secuencia "Access denied, wrong password!".
Declare la función checkPassword(password)
Operador ternario empleado
Al llamar a checkPassword("jqueryismyjam") devuelve "Access is allowed"
Al llamar a checkPassword("angul4r1sl1f3") devuelve "Access denied, wrong password!"
Al llamar a checkPassword("r3actsux") devuelve "Access denied, wrong password!"
 */

function checkPassword(password){
    const ADMIN_PASSWORD = ("jqueryismyjam" === password)
    ? "Access is allowed"
    : "Access denied, wrong password!";

    return ADMIN_PASSWORD;

};

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));