/**
 * La función checkForSpam(message) toma una secuencia (el parámetro message), comprueba el contenido de las palabras prohibidas spam y sale, y devuelve el resultado comprobarlo. Las palabras de la secuencia del parámetro message pueden estar en cualquier caso, por ejemplo, SPAM o sAlE.

Si se encuentra una palabra prohibida (spam o sale), esta función devuelve boolean true.
Si no hay palabras prohibidas en la secuencia, la función devuelve boolean false.
Declare la función checkForSpam(message).
Al llamar a la función checkForSpam("Latest technology news") devuelve false
Al llamar a la función checkForSpam("JavaScript weekly newsletter")devuelve false
Al llamar a la función checkForSpam("Get best sale offers now!") devuelve true
Al llamar a la función checkForSpam("Amazing SalE, only tonight!") devuelve true
Al llamar a la función checkForSpam("Trust me, this is not a spam message") devuelve true
Al llamar a la función checkForSpam("Get rid of sPaM emails. Our book in on sale!") devuelve true
Al llamar a la función checkForSpam("[SPAM] How to earn fast money?") devuelve true
 */

function checkForSpam(message){
    const mensaje = message.toLowerCase();
    let result;
    if(mensaje.includes("sale") || mensaje.includes("spam")){
        result = true;
    } else {
        result = false;
    }
    return result;
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));