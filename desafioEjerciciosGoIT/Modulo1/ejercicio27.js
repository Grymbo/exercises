/**
 * La función getSubscriptionPrice(type) obtiene la cadena con el tipo de suscripción del usuario (parámetro type), la compara con tres posibles tipos de suscripción mensual y devuelve el precio almacenado en la variable price.

Si el valor del parámetro type es la cadena:

"starter" - el precio de la suscripción es de `0' créditos.
"professional" - el precio de la suscripción es de `20' créditos.
"organization" - el precio de la suscripción es de `50' créditos.
Originalmente, el cuerpo de la función tenía una instrucción if...else, el cual tenía el siguiente aspecto, como así.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
Después de la refactorización, la instrucción if..else fue reemplazada por switch. Complete el código de la instrucción switch para que la función funcione correctamente.

Declare la función getSubscriptionPrice(type)
Al llamar a getSubscriptionPrice("professional") devuelve el número 20
Al llamar a getSubscriptionPrice("organization") devuelve el número 50
Al llamar a getSubscriptionPrice("starter") devuelve el número 0
 */

function getSubscriptionPrice(type){
    let price;
    switch (type) {
        case "starter":
            price = 0;
            break;
        case "professional":
            price = 20;
            break;
        case "organization":
            price = 50;
            break;
    };
    return price;
}
console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));