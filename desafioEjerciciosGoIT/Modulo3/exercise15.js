/**
 * Escriba en la variable keys un array de claves de las propiedades propias del objeto y en la variable values un array con todos los valores de sus propiedades. Use los métodos Object.keys() y Object.values().

Declare la variable apartment
El valor de la variable apartment del objeto
Declare la variable keys
El valor de la variable keys es un array ["descr", "rating", "price"]
Declare la variable values
El valor de la variablevalues es un array ["Spacious apartment in the city center", 4, 2153]
Para recuperar el array de las claves del objeto apartament, use Object.keys()
Para recuperar el array de valores de un objeto apartament, use Object.values()
 */
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const llaves = Object.keys(apartment);
const valores = Object.values(apartment);

console.log(llaves);
console.log(valores);