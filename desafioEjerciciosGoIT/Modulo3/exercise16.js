/**
 * Escriba una función countTotalSalary(salaries) que tome el objeto salario, donde el nombre de la propiedad es el nombre del empleado y el valor de la propiedad es el salario. La función debe calcular el total de los salarios de los empleados y devolverlo. Use la variable totalSalary para almacenar el importe total de los salarios.

Declare la función countTotalSalary(salaries)
Al llamar a countTotalSalary({}) devuelve 0
Al llamar a countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) devuelve 330
Al llamar a countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) devuelve 400
La función sólo tiene en cuenta las propiedades propias del objeto
 */
const countTotalSalary = salaries => {
    const salario = Object.values(salaries);
    let totalSalary = 0;

    for(let i = 0; i < salario.length; i++){
        totalSalary += salario[i];
    }
    return totalSalary;
}
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));