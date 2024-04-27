/**
 * La función add debe ser capaz de sumar tres números y mostrar 
 * el resultado en la consola. Añada la función add tres 
 * parámetros a, b y c, que obtendrán valores de los argumentos 
 * cuando se llama.

Complemente console.log() para que registre la cadena 
"Addition result equals <result>", donde <result> es 
la suma de los números.
 */

function add(a,b,c){
    const result = a + b + c;
    console.log(`Addition result equals ${result}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);