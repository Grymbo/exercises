/**
 * La función formatMessage(message, maxLength) acepta una cadena (parámetro message) y se la formatea si su longitud supera el valor del parámetro maxLength.

Complete el código de la función, si es que la longitud de la cadena:

es menor que maxLength, la función lo regresa tal cual.
si es mayor que maxLength, la función acorta la cadena a los símbolos de maxLength y añaden un punto ternario "..." al final y devuelven la versión abreviada.
Declare la función formatMessage(message, maxLength)
Al llamar a la función formatMessage("Curabitur ligula sapien", 16) devuelve "Curabitur ligula..."
Al llamar a la función formatMessage("Curabitur ligula sapien", 23) devuelve "Curabitur ligula sapien"
Al llamar a la función formatMessage("Vestibulum facilisis purus nec", 20) devuelve "Vestibulum facilisis..."
Al llamar a la función formatMessage("Vestibulum facilisis purus nec", 30) devuelve "Vestibulum facilisis purus nec"
Al llamar a la función formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) devuelve "Nunc sed turpis..."
Al llamar a la función formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) devuelve "Nunc sed turpis a felis in nunc fringilla"

 */

function formatMessage(message, maxLength){
    let mensaje;
    const messageLength = message.length;
    const messageSlice = message.slice(0, maxLength);
    
    if(messageLength <= maxLength){
        mensaje = message.slice(0, message.length);
    } else {
        mensaje = messageSlice + "...";
    }
    return mensaje;
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));