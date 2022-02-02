const rl = require("readline-sync");
let lado = rl.question("Dime el lado del cuadrado (cm): ");
let area = lado * lado;
let perimetro = lado * 4;

//console.log("El área del cuadrado son " + area + "cm²");
//console.log("El perímetro del cuadrado son " + perimetro + "cm");

console.log(`
<figura nombre="cuadrado">
    <datos lado="${lado}">
    <perimetro>${perimetro}</perimetro>
    <area>${area}</area>
</figura>
`);