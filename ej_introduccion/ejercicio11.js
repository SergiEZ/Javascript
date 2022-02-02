const rl = require("readline-sync");
let whatever = rl.question("Dame una frase con muchos espacios: ");
let whatever_limpio = whatever.trim();
//console.log(whatever_limpio);
let n_espacios = whatever_limpio.includes(" ");

//Només replace la primera que trova, fa falta un bucle
let aux = whatever_limpio;
//console.log(whatever_limpio.length);
for (let i = 0; i < whatever_limpio.length; i++){
aux = aux.replace(" ","");
}

if (n_espacios == false) {
    console.log("Tu frase no tiene espacios.");
}
else console.log("Tu frase sin espacios:\n" + aux);