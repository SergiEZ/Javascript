/*for (i = 0; i <= 100; i++){
    console.log(i);
}
console.log("FIN");*/
/*
const r = require("readline-sync");
let txt_rep = r.question("Dame un número: ");
if (isNaN(txt_rep)) process.exit(-1);
let num_rep = Number(txt_rep);
for(let i = 0; i < num_rep; i++){
    let raiz = Math.sqrt(i);
    if(raiz < 2.5) console.log(raiz);
}
console.log("FIN");
*/
/*
//Pedir número n
//Poner las n primeras potencias de 2
const r = require("readline-sync");
let n_rep = r.question("Dame un número: ");
if (isNaN(n_rep)) process.exit(-1);
let n = Number(n_rep);
for(let i = 0; i < n; i++){
    console.log(Math.pow(i,2));
}
*/
/*
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        process.stdout.write("*");
    }
    console.log("");
}
*/

//1.-Números entre 5 y 105 múltiplos de 5
/*
for(let i = 5; i < 106; i++){
   if (i % 5 === 0){
       console.log(i);
   } 
}
*/
//2.-Suma del 1 al 20
/*
let n = 0;
for(let i = 1; i < 21; i++){
    n = n + i;
}
console.log(n);
*/
//3.-Solicita del 1 al 100
//Mostrar tabla de multiplicar
/*
const r = require("readline-sync");
let consola = r.question("Dame un número del 1 al 100: ");
if (isNaN(consola)) process.exit(-1);
let n = Number(consola);
console.log("Tabla de multiplicar de " + n);
let m = 0;
for(i = 0;i <= 10; i++){
    m = n * i;
    console.log(n + " x " + i + " = " + m);
}
*/
//4.-Mostrar tabla con el resultado de multiplicar cualquier número entre 1 y 10
/*
let m = 1;
for(let i = 1;i <= 10; i++){
    process.stdout.write(i + "\t   "); // or let cadena ="";
    for(let j = 1; j <= 10; j++){
        m = j * i; //or cadena += i*j + " ";
        process.stdout.write(m + "\t");
    }
    console.log();
}
*/
//5.- Mostrar la diagonal del anterior para que no repita números
/*
let m = 1;
for(let i = 1;i <= 10; i++){
    process.stdout.write(i + "\t   "); // or let cadena ="";
    for(let j = 1; j <= 10; j++){
        m = j * i; //or cadena += i*j + " ";
        if (j >= i) process.stdout.write(m + "\t");
        else process.stdout.write("\t");
    }
    console.log();
}
*/
//6.-Pide 10 números e imprime la media
/*
const max = 100;
let n = 0;
for(let i = 0; i <= 10; i++){
    n = n + Math.trunc(Math.random()*max);
}
console.log(n/i);
*/

//7.-Pide 10 números e imprime la suma
/*
const max = 100;
let n = 0;
for(i = 0; i <= 10; i++){
    n = n + Math.trunc(Math.random()*max);
}
console.log(n);
*/
//8.-
/*
*
**
***
****
*/
/*
let aux = 1;
for (let i = 0; i < 4; i++){
    for (let j = aux; j > 0; j--){
        process.stdout.write("*");
    }
    aux++;
    console.log("");
}
*/
//9.-
/*  *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
/*
const n = 9;
for(var i=1;i<=n;i++){
      for(var k=n-1;k>=i;k--){
         process.stdout.write(" ");
      }
      for(var j=1;j<=i;j++){
         process.stdout.write("* ")
      }
      console.log();
   }
   if(i==n+1){
      for(var i=1;i<=n-1;i++){
         for(var k=1;k<=i;k++){
            process.stdout.write(" ");
         }
         for(j=i;j<=n-1;j++){
            process.stdout.write("* ");
         }
         console.log();
      }
   }
*/
//10.-Realiza un programa para calcular el factorial de un número entero.
//Por ejemplo, el factorial de 6 (escrito 6!) sería : 1*2*3*4*5*6
/*
const r = require("readline-sync");
let n_rep = r.question("Dame un número: ");
if (isNaN(n_rep)) process.exit(-1);
const N = Number(n_rep);
let factor = 1;
for(let i = N; i >= 1; i--){
    factor *= i;
}
console.log(N + "! = " + factor);
*/
//11.-Realiza un programa que lea números positivos 
//del teclado hasta el usuario introduzca un número negativo o 0.
//El programa deberá calcular la media de los números
/*
const r = require("readline-sync");
let total = 0;
let n;
do{
    let n_rep = r.question("Dame un número positivo: ");
    if (isNaN(n_rep)) process.exit(-1);
    n = Number(n_rep);
    total = total + n;
    //console.log(n);
} while (n !== 0 && n > 0)
console.log(total-n);
*/

//12.-Amplía el programa anterior para que, además, el programa también calcule la desviación típica.

//13.-

//14.-Lea las edades de los alumnos de un aula mayores de edad y menores.
/*
const r = require("readline-sync");
const ALUMNOS = 10;
let mayores = 0;
let menores = 0;
for(let i = 1; i <= ALUMNOS; i++){
    let e = r.question(`Dime la edad del alumno ${i}: `);
    if (isNaN(e)) process.exit(-1);
    let edad = Number(e);
    if(edad > 17) mayores++;
    else menores++;
}
console.log(`Hay ${mayores} alumnos mayores de edad y ${menores} menores`);
*/
//15.-Realiza un programa que lea palabras por teclado hasta que el usuario teclee
//una palabra cuya longitud exceda los 7 caracteres.
/*
const r = require("readline-sync");
let palabra = "";
while(palabra.length <= 7){
    palabra = r.question(`Dime una palabra con menos de 7 letras: `);
}
console.log("Tu última palabra tenía más de 7 letras");
*/
//16.-Generar fechas de cumpleaños válidas e imprimirlas por pantalla (8 de Agosto)
//hasta que el usuario indique por teclado que no quiere generar más fechas

//17.-Realiza un programa informático que dibuje un tablero de ajedrez por el terminal
/*
let n = "N";
let b = "B";
for(let i = 0; i < 4; i++){

    for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(b + "\t");
        else process.stdout.write(n + "\t");
    }
    console.log("\n");
    for(let j = 0; j < 8; j++){
        if (j % 2 === 0) process.stdout.write(n + "\t");
        else process.stdout.write(b + "\t");
    }
    console.log("\n");
}
*/