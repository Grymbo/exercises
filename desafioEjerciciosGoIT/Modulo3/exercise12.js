/**
 * Escriba una función countProps(object) que cuente y devuelva el número de propiedades propias del objeto en el parámetro object. Use la variable propCount para almacenar el número de propiedades del objeto.

Declare la función countProps(object)
Al llamar a la función countProps({}) devuelve 0
Al llamar a la función countProps({ name: "Mango", age: 2 }) devuelve 2
Al llamar a la función countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) devuelve 3
La función cuenta sólo las propiedades propias del objeto
 */
const countProps = object => {
    let propCount = 0;
    for(let key in object){
        if(object.hasOwnProperty(key)){
            propCount++;
        }
    }
    return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));