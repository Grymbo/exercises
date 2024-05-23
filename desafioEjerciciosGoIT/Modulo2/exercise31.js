/**
 * Refactorizar la función encontrarNúmero(inicio, fin, divisor) para:

devuelva el primer número desde starthastaendque es divisible por eldivisor` sin el resto
No use el operador break.
No use la variable number
Declare la función findNumber(start, end, divisor)
Al llamar a findNumber(2, 6, 5) devuelve 5
Al llamar a findNumber(8, 17, 3) devuelve 9
Al llamar a findNumber(6, 9, 4) devuelve 8
Al llamar a findNumber(16, 35, 7) devuelve 21
Al llamar a findNumber() con un conjunto aleatorio de números que devuelve el resultado correcto
En el ciclo for no se debe usar break para salir antes de que se hayan completado todas las iteraciones del ciclo
 */
const findNumber = (start, end, divisor)=>{
    for(i = start; i <= end; i+=1){
        if(i % divisor === 0){
            return i;
        }
    }
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));