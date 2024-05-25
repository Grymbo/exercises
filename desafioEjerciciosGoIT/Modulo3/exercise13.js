/**
 * Reescriba el objeto apartament usando el método Object.keys() y el ciclo for...of. Escribir un array de claves en la variable keys de las propiedades propias del objeto y añade todos los valores de sus propiedades al array values.

Declare la variable apartment.
El valor de la variable apartment .
Declare la variable keys.
El valor de la variable keys es un array ["descr", "rating", "price"].
El valor de la variable keys se obtiene con la ayuda del método Object.keys().
Declare la variable values.
El valor de la variable values es un array ["Spacious apartment in the city center", 4, 2153].
El valor de la variable values se obtiene con la ayuda del ciclo for...of.
 */
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};

let values = [];

const keys = Object.keys(apartment);

console.log(keys);

for(let key of keys){
    console.log(apartment[key]);
}