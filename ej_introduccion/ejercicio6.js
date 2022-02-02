const rl = require("readline-sync");
let base = rl.question("Dime la base del triángulo (cm): ");
let altura = rl.question("Dime la altura del triángulo (cm): ");

let area = (base * altura)/2;
let perimetro = base * 3;
console.log("El área del triángulo son " + area + "cm²");
console.log("El perímetro del triángulo son " + perimetro + "cm");