const rl = require("readline-sync");
let i = 0;
let suma = 0;
let n = 0;
do{
    let teclado = rl.question("Escupe un número que no sea 0: ");
    n = Number(teclado);
    //console.log(n);
    suma = suma + n;
    i++;
}while(n != 0)
let media = suma / (i-1);
console.log(`La suma es ${suma} y la media es ${media}`);