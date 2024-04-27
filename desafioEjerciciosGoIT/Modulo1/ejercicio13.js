/**
 * La función isAdult declara un único parámetro age (edad),
 *  valor que se establecerá en el momento de su llamada. 
 * Asigna una expresión a la variable passed para comprobar 
 * la edad del usuario como adulto. Una persona se considera 
 * adulta a partir de los 18 años.
 */
function isAdult(age){
    const adult = age >= 18;
    return adult;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));