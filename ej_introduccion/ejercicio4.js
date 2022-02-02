const rl = require("readline-sync");
let fruta_a = rl.question("Dime una fruta: ");
let fruta_b = rl.question("Dime una segunda fruta: ");
let fruta_c = rl.question("Dime una tercera fruta: ");

console.log("\t" + fruta_a + "\n" + "\t" + fruta_b + "\n" + "\t" + fruta_c);

let salida = "<ul>\n";
salida = salida + "\t<li>" + fruta_a + "</li>\n";
salida = salida + "\t<li>" + fruta_b + "</li>\n";
salida = salida + "\t<li>" + fruta_c + "</li>\n";
salida = salida + "</ul>\n";
console.log(salida);