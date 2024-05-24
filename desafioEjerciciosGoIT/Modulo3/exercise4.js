/**
 * Complete el código asignando expresiones a las variables declaradas para referirse a a las propiedades correspondientes del objeto apartament.

ownerName - nombre del propietario;
ownerPhone - teléfono del propietario;
ownerEmail - correo electrónico del propietario;
numberOfTags - el número de elementos del array en la propiedad tags;
firstTag - primer elemento del array en la propiedad tags;
lastTag - segundo elemento del array en la propiedadtags.
Declare la variable apartment con la ayuda de const
El valor de la variable apartment es el objeto
Declare la variable ownerName con la ayuda de const
El valor de la variable ownerName de la secuencia "Henry"
Declare la variable ownerPhone con la ayuda de const
El valor de la variable ownerPhone es "982-126-1588"
Declare la variable ownerEmail con la ayuda de const
El valor de la variable ownerEmail es "henry.carter@aptmail.com"
Declare la variable numberOfTags con la ayuda de const
El valor de la variable numberOfTags es 3
Declare la variable firstTag con la ayuda de const
El valor de la variable firstTag es "premium"
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
console.log(apartment.owner.name);
console.log(apartment.owner.phone);
console.log(apartment.owner.email);
console.log(apartment.tags[0]);
console.log(apartment.tags[apartment.tags.length - 1]);