const rl = require("readline-sync");
let dni = rl.question("Dime el número de tu dni: ");
let resto = dni%23;
console.log(resto);