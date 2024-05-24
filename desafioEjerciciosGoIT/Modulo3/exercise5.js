/**
 * Complete el código asignando expresiones a las variables declaradas para referirse a a las propiedades relevantes del objeto apartament usando la sintaxis de «corchetes».

aptRating - rating;
aptDescr - descripción;
aptPrice - precio;
aptTags - tags.
Declare la variable apartment
El valor de la variable apartment del objeto
Declare la variable aptRating
El valor de la variable aptRating es 4
Declare la variable aptDescr
El valor de la variable aptDescr es "Spacious apartment in the city center"
Declare la variable aptPrice
El valor de la variable aptPrice es 2153
Declare la variable aptTags
El valor de la variable aptTags es ["premium", "promoted", "top"]
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
console.log(apartment["rating"]);
console.log(apartment["descr"]);
console.log(apartment["price"]);
console.log(apartment["tags"]);