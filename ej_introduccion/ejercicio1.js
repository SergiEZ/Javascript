const rl = require("readline-sync");
let nombre = rl.question("Dime tu nombre: ");
let p_apellido = rl.question("Dime tu primer apellido: ");
let s_apellido = rl.question("Dime tu segundo apellido: ");

console.log(nombre + " " + p_apellido + " " + s_apellido);
console.log(p_apellido + " " + s_apellido + ", " + nombre);