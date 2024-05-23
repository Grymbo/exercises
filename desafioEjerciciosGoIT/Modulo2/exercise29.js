/**
 * Escriba una función getEvenNumbers(start, end) que devuelva un array de todos los números pares desde start hasta end. Un número par es un número que es divisible por 2 sin resto (10 % 2 === 0).

Declare la función getEvenNumbers(start, end)
Al llamar a la función getEvenNumbers(2, 5) devuelve [2, 4]
Al llamar a la función getEvenNumbers(3, 11) devuelve [4, 6, 8, 10]
Al llamar a la función getEvenNumbers(6, 12) devuelve [6, 8, 10, 12]
Al llamar a la función getEvenNumbers(8, 8) devuelve [8]
Al llamar a la función getEvenNumbers(7, 7) devuelve []
Al llamar a la función getEvenNumbers() con start y end aleatorios que devuelven el array correcto.
 */
const getEvenNumbers = (star, end)=>{
    let newArray = [];
    for(let i = star; i <= end; i++){
        if(i % 2 === 0){
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));