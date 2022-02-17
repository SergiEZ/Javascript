/*
let rojo = 200;
let verde = 45;
let azul = 187;

function canalDominante(r, g, b){
    let dominante = "";

    if (r > g && r > b) dominante = "Rojo";
    else if (g > r && g > b) dominante = "Verde";
    else dominante = "Azul";

    return dominante;
}

function colorAleatorio(){
    color = [];
    for(let i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random() * (255 - 0));
    }
    return color;
}

function conversorBytes(b){
    let kb = b / 1024;
    return kb;
}
console.log(canalDominante(rojo, verde, azul));
console.log(colorAleatorio());
console.log(conversorBytes(2048));
*/
/*
//apellido 1, apellido2, nombre
function getName(n, a1, a2){
    return `${a1}, ${a2}, ${n}`;
}
console.log(getName("Pepe", "Martinez", "Garcia"));

//Dos números devuelve el max en absoulto
function maxAbs(n1, n2){
    if(Math.abs(n1) > Math.abs(n2)) return n1;
    else return n2;
}
console.log(maxAbs(-100, 50));

//construirPatron con n y caracter -> cadena con n caracteres
function construirPatron(n, c){
    let cadena = "";
    for(let i = 0; i < n; i++){
        cadena += c;
    }
    return cadena;
}
console.log(construirPatron(5, "*"));
//triangulo
function construirPatron(n, c) {
    let cadena = "";
    let fila = "";
    let aux = 1;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < aux; j++) {
            fila += c;
        }
        aux++;
        cadena += "\n" + fila;
        fila = "";
    }
    return cadena;
}
console.log(construirPatron(6, "*"));

//Pasar array de n elementos -> devuelve el array inverso
function invertirArray(lista){
    let aux = [];
    for(let i = 0; i < lista.length; i++){
        aux[i] = lista[lista.length-1-i];
    }
    return aux;
}
console.log(invertirArray([568, "coche", "casa", 78, "esponja"]));
*/
const rl = require("readline-sync");
function menu(opciones) {
    let opt = "";
    do {
        for (let i = 0; i < opciones.length; i++) {
            console.log(`\t${i + 1}.- ${opciones[i]}`);
        }
        opt = rl.question("Elige opción: ");
    } while(isNaN(opt) || Number(opt) < 1 || Number(opt) > opciones.length)
    return Number(opt);
}

function menuHTML(opciones){
    let menu = "<ol>\n"
    for(let i = 0; i < opciones.length; i++){
        menu += "\t<li>" + opciones[i] + "</li>\n";
    }
    menu += "</ol>"
    return menu;
}

let opciones = ["Media", "Suma", "Invertir", "Salir"];
//menu(opciones);
console.log(menuHTML(opciones));