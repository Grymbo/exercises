/**
 * Refactorizar la solución del problema anterior añadiendo al ciclo for...in comprobar una propiedad intrínseca.

Declare la variable advert.
El valor de la variable advert del objeto.
Declare la variable apartment.
El valor de la variable apartment del objeto.
Declare la variable keys.
El valor de la variable keys es un array ["descr", "rating", "price"].
Declare la variable values.
El valor de la variable values es un array ["Spacious apartment in the city center", 4, 2153].
 */
const keys = ['descr', 'rating', 'price'];
const values = ["Spacious apartment in the city center", 4, 2153];
const advert = {
    service: "apt"
}
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;
for(let keys in apartment){
    if(apartment.hasOwnProperty(keys)){
        console.log(keys);
        console.log(apartment[keys]);
    }
}