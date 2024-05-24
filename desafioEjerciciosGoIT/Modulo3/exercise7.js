/**
 * Agregue algunas propiedades nuevas al objeto apartament:

area - superficie en metros cuadrados, número 60;
rooms - número de habitaciones, número 3;
location - ubicación del departamento, el objeto con las siguientes propiedades aninadas;
country - país, secuencia Jamaica;
city - ciudad, secuencia Kingston.
Declare la variable apartment
El valor de la variable apartment del objeto
El valor de la propiedad anidada area del número 60
El valor de la propiedad anidada rooms del número 3
El valor de la propiedad anidada location del objeto
El valor de la propiedad anidada location.country de la secuencia "Jamaica"
El valor de la propiedad anidada location.city de la secuencia "Kingston"
 */
 const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {};
  apartment.location.country = "Jamaica";
  apartment.location.city = "Kingston";

  console.log(apartment);