const rl = require("readline-sync");
let numeroTexto = rl.question("Dime un numero y lo doblo: ");
let numero = Number(numeroTexto);
let doble = numero * 2;
console.log(doble);