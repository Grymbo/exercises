/**
 * Refactorizar la función countProps(object) usando el método Object.keys(). y posiblemente, pero no necesariamente, el ciclo for...of.

Declare la función countProps(object)
Al llamar a countProps({}) devuelve 0
Al llamar a countProps({ name: "Mango", age: 2 }) devuelve 2
Al llamar a countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) devuelve 3
La función cuenta sólo las propiedades propias del objeto
La función usa el método Object.keys() y posiblemente el ciclo for...of
 */
const countProps = pbject => {
    const keys = Object.keys(pbject);
    let propCount = 0;

    console.log(keys);

    for(let key of keys){
        propCount += 1;
    }
    return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));