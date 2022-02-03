const rl = require("readline-sync");

console.log("Este es el súper sistema experto identificador de flores MariFlower™");
let nom = rl.question("Introduce tu nombre: ");
let cog = rl.question("Introduce tu apellido: ");
console.log("Bienvenid@ " + nom + " " + cog + "\nTen en cuenta que el sistema tiene un ratio de acierto del 96%,\nasí que no te fíes demasiado de nosostros.");

let ancho = rl.question("Introduce el ancho del pétalo en cm: ");
let acm = Number(ancho);
let longitud = rl.question("Introduce la longitud del pétalo en cm: ");
let lcm = Number(longitud);
let tipo = "";
//Iris Setosa, Virginica, Versicolor
if(lcm > 4.9) tipo = "Virginica";
else if(acm > 1.7) tipo = "Virginica";
else if(acm <= 0.6) tipo = "Iris Setosa";
else tipo = "Versicolor";

console.log("Seguramente tu flor sea del tipo "+ tipo +"\nNo nos hacemos responsables de lo que hagas con esta información.\nAdiós.");