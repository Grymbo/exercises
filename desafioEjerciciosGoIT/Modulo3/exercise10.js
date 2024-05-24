/**
 * ecorra el objeto apartament usando el ciclo for...in y escribe en el array keys. todas sus claves y todos los valores de sus propiedades en el array values.

Declare la variable apartment
El valor de la variable apartment del objeto
Declare la variable keys
El valor de la variable keys es un array ["descr", "rating", "price"]
Declare la variable values
El valor de la variable values es un array ["Spacious apartment in the city center", 4, 2153]
 */
 const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  for(let keys in apartment){
    console.log(keys);
    console.log(apartment[keys]);
  }