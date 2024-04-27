/**
 * La función getShippingCost(country) debe comprobar si el artículo puede ser entregado en el país del usuario (parámetro country) y devolver un mensaje sobre el resultado almacenado en la variable message. Asegúrese de usar la instrucción "switch".

El formato de la cadena de retorno es "Shipping to <country> will cost <price> credits", donde <country> y <price> deben sustituirse por los valores adecuados.

La lista de países y los costos de entrega:

China - 100 créditos
Chile - 250 créditos
Australia - 170 créditos
Jamaica - 120 créditos
En la lista se puede ver que la entrega no está disponible en todas partes. Si el país especificado no está en la lista, la función debería devolver la cadena "Sorry, there is no delivery to your country"

Declare la función getShippingCost(country)
El cuerpo de la función usa las instrucciones switch
Al llamar a getShippingCost("Australia") devuelve "Shipping to Australia will cost 170 credits"
Al llamar a getShippingCost("Germany") devuelve "Sorry, there is no delivery to your country"
Al llamar a getShippingCost("China") devuelve "Shipping to China will cost 100 credits"
Al llamar a getShippingCost("Chile") devuelve "Shipping to Chile will cost 250 credits"
Al llamar a getShippingCost("Jamaica") devuelve "Shipping to Jamaica will cost 120 credits"
Al llamar a getShippingCost("Sweden") devuelve "Sorry, there is no delivery to your country"
 */

function getShippingCost(country){
    let message;
    let price;

    switch (country){
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";


    }   
    return message;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));