const rl = require("readline-sync");
let distancia = rl.question("Dime la distancia (Km): ");
let tiempo = rl.question("Dime lo que tardas (hrs): ");
let velocidad = distancia/tiempo;
console.log("Vas a una velocidad de " + velocidad + "Km/h");