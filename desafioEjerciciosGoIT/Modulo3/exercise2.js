/**
 * Complemente el objeto plano con la propiedad owner, en donde el valor será un objeto con información del propietario. Añada las siguientes propiedades:

name - nombre del propietario, valor "Henry";
phone - teléfono, valor "982-126-1588";
email - correo electrónico, valor "henry.carter@aptmail.com".
Declare la variable apartment
El valor de la variable apartment es un objeto
El objeto variable apartment tiene las propiedades imgUrl, descr, rating, price y tags con los valores
El objeto apartment tiene la propiedad owner
El valor de la propiedad owner es un objeto
El objeto owner tiene la propiedad name
El valor de la propiedad name es "Henry"
El objeto owner tiene la propiedad phone
El valor de la propiedad phone es "982-126-1588"
El objeto owner tiene la propiedad email
El valor de la propiedad email es "henry.carter@aptmail.com"
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
console.log(apartment);