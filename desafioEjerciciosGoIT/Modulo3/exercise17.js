/**
 * Recorra el array de objetos los colors usando el ciclo for...of. Añada el array hexColors con los valores de las propiedades hex, y el array rgbColors con los valores de las propiedades rgb de todos los objetos del array colors.

Declare la variable colors
El valor de la variable colors es un array
Declare la variable hexColors
El valor de la variable hexColors es un array ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Declare la variable rgbColors
El valor de la variable rgbColors es un array ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
 */
const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
];
let hexColors = [];
let rgbColors = [];

for(let i of colors){
    hexColors.push(i.hex);
    rgbColors.push(i.rgb);

}
console.log(hexColors);
console.log(rgbColors);