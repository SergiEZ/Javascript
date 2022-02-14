// 1.-Crea un programa que lea por teclado números hasta que el ususario pulse un 0.
// Irá guardando los números en un aray.
// Al finalizar calculará el máximo y el mínimo de los números introducidos.
/*
const rl = require("readline-sync");
let numeros = [];
let i = 0;
let mayor = 0;
let menor;
let suma = 0;

do {
    numeros[i] = Number(rl.question("Dime un número que no sea 0: "));
    suma = suma + numeros[i];
    if (numeros[i] > mayor) mayor = numeros[i];
    if (i == 0) menor = numeros[i];
    if (numeros[i] < menor && numeros[i] != 0) menor = numeros[i];
    i++;
} while (numeros[i-1] != 0)

numeros.pop();

console.log(numeros);
console.log(`El mayor es ${mayor} y el menor es ${menor}`);

//2.-Saca la media

let media = suma / numeros.length;
console.log(`La media es ${media}`);
*/
// 3.-Crea un programa que lea 10 números. 
// Debe listarlos desde el primero al último y desde el último al primero.
/*
const rl = require("readline-sync");
let numeros = [];
for(i = 0; i < 10; i++){
    numeros[i] = Number(rl.question(`${i} Dime un número: `));
}

for(let value of numeros){
    console.log(value);
}
for(var j = numeros.length-1; j >= 0; j--){
    console.log(numeros[j]);
}
*/
//4.-Modifica el primer programa para que una vez averiguado el máximo,
//liste sólo hasta ese número
/*
const rl = require("readline-sync");
let numeros = [];
let i = 0;
let mayor = 0;
let flag;
let suma = 0;

do {
    numeros[i] = Number(rl.question("Dime un número que no sea 0: "));
    suma = suma + numeros[i];
    if (numeros[i] > mayor) {
        mayor = numeros[i];
        flag = i;
    }
    i++;
} while (numeros[i-1] != 0)

numeros.pop();
console.log(flag);
for(var j = 0; j <= flag; j++){
    console.log(numeros[j]);
}
*/
//5.-Utilizando la cadena “TRWAGMYFPDXBNJZSQVHLCKET”. 
//Crea una aplicación que calcule la letra del DNI
//(necesitas el resto de dividir el número por23)
/*
const rl = require("readline-sync");
const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKET";
let dni = Number(rl.question("Dime tu DNI: "));
let resto = dni % 23;
console.log("La letra de tu DNI es " + LETRAS[resto]);
*/
//6.- Modifica la aplicación 1. Una vez introducidos los números por el usuario,
//la aplicación debe ordenarlos en el array y mostrar el array ordenado.
//Utilizaremos el método de la burbuja (existenotros métodos más eficientes).
//SKIP


//7.-Dado el siguiente array [‘Peras’, ‘Manzanas’, ‘Uva’, ‘Naranjas’]
// crea un programa que devuelva un elemento HMTL lista desordenada.
/*
const ARRAY = ["Peras", "Manzanas", "Uva", "Naranjas"];
console.log("<ul>");
for(let i = 0; i < ARRAY.length; i++){
    console.log("\t<li>" + ARRAY[i] + "</li>");
}
console.log("</ul>");
*/
//8.-Ahora vamos a pedir al usuario que introduzca frutas hasta que introduzca un
//‘.’ Luego igual que en el ejericio 7 crearemos un datalist con las frutas
/*
const rl = require("readline-sync");
let array = [];
let i = -1;
do{
    i++;
    array[i] = rl.question("Indica una fruta: ");
}while(array[i] != ".")
array.pop();

console.log(`<datalist id="frutas">`);
for(let j = 0; j < array.length; j++){
    console.log(`\t<option value="${array[j]}">`);
}
console.log("</datalist>");
*/
//9.-Dados los arrays [6,5,4,9,8,2,7] y [6,5,5,9,8,3,7]
//crea una aplicación que me indique cuántos elementos del array son diferentes.
/*
const array1 = [6,5,4,9,8,2,7];
const array2 = [6,5,5,9,8,3,7];
let contador = 0;
for(let i = 0; i < array1.length; i++){
    if(array1[i] != array2[i]) contador++;
}
console.log(contador + " elementos son diferentes.");
*/
//10.-Dada la expresión ’3*4+(8-12)‘ crea una aplicación que dada una 
//expresión matemática como la anterior cree dos arrays (listas),
//la primera con los números (3,4,8,12) enel ejemplo y la segunda
//con las operaciones (’*‘,’+‘,’-’) los paréntesis no son necesarios.
//Al finalizar mostrará las dos listas por pantalla.
/*
const EXPRESION = "3*4+(8-12)";
let numeros = [];
let operadores = [];

for(let i = 0; i < EXPRESION.length; i++){
    if(isNaN(EXPRESION[i]) == true) operadores.push(EXPRESION[i]);
    else numeros.push(EXPRESION[i]);
}
console.log("Números: ");
for(let value of numeros) console.log(value);
console.log("Operadores: ");
for(let value of operadores) console.log(value);
*/