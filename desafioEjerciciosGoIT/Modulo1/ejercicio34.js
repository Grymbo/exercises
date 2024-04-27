/**
 * La función normalizeInput(input) toma una secuencia (parámetro de entrada) y devuelve la misma secuencia, pero en minúsculas. Asigne la variable normalizedInput para crear una secuencia en minúsculas a partir del parámetro input.

Declare la función normalizeInput(input)
Al llamar a la expresión normalizeInput("Hello world") devuelve "hello world"
Al llamar a la expresión normalizeInput("This ISN'T SpaM") devuelve "this isn't spam"
Al llamar a la expresión normalizeInput("Big SALE") devuelve "big sale"
 */
function normalizedInput(input){
    const normalizeInput = input.toLowerCase();
    return normalizeInput;
}
console.log(normalizedInput("Hello world"));
console.log(normalizedInput("This ISN'T SpaM"));
console.log(normalizedInput("Big SALE"));