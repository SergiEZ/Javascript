const rl = require("readline-sync");
let bina = rl.question("Dime un número en binario: ");
console.log("El valor en decimal es " + parseInt(bina,2));