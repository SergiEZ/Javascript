/*let h = "Hola mundo";
console.log(h);
let x = 10;
console.log("x");
console.log(x);
console.log(x+2);
let texto1 = "Hola soy Pepe y tengo ";
let edad = 18;
let textoPresentacion = texto1 + edad + " años";
console.log(textoPresentacion); */
const rl = require("readline-sync");
let name = rl.question("Dime tu nombre: ");
console.log("Tu nombre es: " + name);
var miobjeto = {
    nombre: "Juan",
    edad: 30
};
//miobjeto.nombre = "Martín";
miobjeto.trabajo = "Programador";
console.log(miobjeto.nombre + " " + miobjeto.edad + " " + miobjeto.trabajo);