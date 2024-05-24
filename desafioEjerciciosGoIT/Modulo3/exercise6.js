/**
 * Complete el código actualizando los valores de las propiedades del objeto apartament:

el precio en la propiedad price a 5000;
rating del área en la propiedad rating a 4.7;
el nombre del propietario en la propiedad anidada name a Henry Sibola;
en la propiedad tags añadiendo la secuencia "trusted" al final.
Declare la variable apartment
El valor de la variable apartment del objeto
El valor de la propiedad anidada price del número 5000
El valor de la propiedad anidada rating del número 4.7
El valor de la propiedad anidada name de la secuencia "Henry Sibola"
El valor de la propiedad anidada tags del array ["premium", "promoted", "top", "trusted"]
 */
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com"
    }
};
apartment.price = 9;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

console.log(apartment);
