/*
let n = 0;
let i = 0;
const BARRERA = 0.95;
while(n < BARRERA){
    n = Math.random();
    console.log(n);
    i++;
}
console.log(i);
*/
/*
const r = require("readline-sync");
const PIN = 5678;
let n = 0;

while (n !== PIN){
    let pin = r.question("Introduix el PIN: ");
  //if (isNaN(pin)) process.exit(-1);
    n = Number(pin);
    console.log("El PIN és incorrecte.");
}

console.log("Enhorabona!");
*/
/*
const r = require("readline-sync");
const PIN = 5678;
const INTENTOS = 3;
let n = 0;
let i = 0;
let pin = 0;
while (n !== PIN){
    if(i < INTENTOS){
    console.log("Tens " + (INTENTOS - i) + " intent(s).");
    pin = r.question("Introduix el PIN: ");
    n = Number(pin);
    i++;
    }
    else break;
}

if (n === PIN) console.log("Enhorabona!");
else console.log("Cagaste.");
*/
/*
const MAX = 10;
const MIN = 1;
let i = MIN;
let j = MAX;
while(i <= MAX){
    console.log(i);
    i++;
}
while(j >= MIN){
    console.log(j);
    j--;
}
*/
const TABLA = 4;
let i = -1;
while(i < 10){
    i++;
    console.log(i * TABLA);
}

while(TABLA * i >= TABLA){
    i--;
    console.log(i * TABLA);
}