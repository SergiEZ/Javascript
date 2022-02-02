const rl = require("readline-sync");
let hexa = rl.question("Dime un número en hexagesimal: ");
console.log("El valor en decimal es " + parseInt(hexa,16));