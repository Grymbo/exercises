/**
 * Complete el código asignando expresiones a las variables declaradas para referirse a las propiedades correspondientes del objeto apartment.

aptRating - rating;
aptDescr - descripción;
aptPrice - precio;
aptTags - tags.
Declare la variable apartment
El valor de la variable apartment del objeto
El objeto variable apartment tiene propiedades imgUrl, descr, rating, price y tags con los valores
El valor de la variable aptRating del número 4
Declare la variable aptDescr
El valor de la variable aptDescr de la secuencia "Spacious apartment in the city center"
Declare la variable aptPrice
El valor de la variable aptPrice del número 2153
Declare la variable aptTags
El valor de la variable aptTags es un array de secuencias ["premium", "promoted", "top"]
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
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log(aptDescr);
console.log(aptRating);
console.log(aptPrice);
console.log(aptTags);