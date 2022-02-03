/*let x = 10;
let y = 20;
if (x > 10){
    x = x + y;
} else {
    x = y - x;
}
console.log(x);*/
/*
//Pedir número al usuario
//"correcto" si el número es mayor que 100
//"incorrecto" en caso contrario
const rl = require("readline-sync");
let n = rl.question("Dime un número mayor que 100: ");
if (n > 100){
    console.log("Correcto");
} else {
    console.log("Incorrecto");
}*/

/*
//Pedir dos números
//Correcto si el primer es menor o igual que el segundo
const rl = require("readline-sync");
let ta = rl.question("Dime un número: ");
let tb = rl.question("Dime otro: ");

let na = Number(ta); //important shit
let nb = parseInt(tb); //ditto

if (na <= nb){
    console.log("Correcto, es menor o igual.");
} else{
    console.log("Incorrecto");
}
*/

/*
//Pedir número
//Decir si es par o no

let na = Number(ta);

if(na % 2 === 0){
    console.log("El número es par");
} else {
    console.log("Es impar.");
}
*/

/*
//Pedir número
//Ver si es divisible por 3 o por 5
//Y si es divisible por 2 y por 3
const rl = require("readline-sync");
let ta = rl.question("Dime un número: ");
let na = Number(ta);

if(na % 3 === 0 || na % 5 === 0){
    console.log("Es disvisible por 3 o por 5");
}

if(na % 2 === 0 && na % 3 === 0){
    console.log("Es divisible por 2 y por 3");
}
*/


//Pedir tres números
//Sacar el menor
//Sacar el mayor
const rl = require("readline-sync");
let ta = rl.question("Dime un número: ");
let tb = rl.question("Dime otro número: ");
let tc = rl.question("Dime un último número: ");
let na = Number(ta);
let nb = Number(tb);
let nc = Number(tc);

if(na > nb && na > nc){
    console.log("El mayor es " + na);
}
else if(na < nb && nb > nc){
    console.log("El mayor es " + nb);
} else {
    console.log("El mayor es " + nc);
}

if(na < nb && na < nc){
    console.log("El menor es " + na);
}
else if(nb < na && nb < nc){
    console.log("El menor es " + nb);
} else {
    console.log("El menor es " + nc);
}

/*
let mayor = 0;
let menor = 0;

if (x > y){
    mayor = x;
    menor = y;
} else {
    mayor = y;
    menor = x;
}
if(z > mayor) mayor = z;
if (z < menor) menor = z;
console.log("blablabla")
*/