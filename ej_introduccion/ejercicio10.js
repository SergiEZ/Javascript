const rl = require("readline-sync");
let algo = rl.question("Dime algo: ");
let contar = algo.length;
let algo_mayu = algo.toUpperCase();
let algo_minu = algo.toLowerCase();

console.log("Tu texto tiene " + contar + " letras");
console.log(algo_mayu);
console.log(algo_minu);