/*
Realizar un ejercicio que:
1. Pida cuantos números pedirá al usuario (n)
2. Pida los n números y los guarde en un array (lista)
3. Presente un menú donde las opciones serán:
    1 Sumar valores
    2 Sacar la media
    3 Listar
    4 Salir
4. El programa realizará la opción deseada y volverá a presentar el menú.
*/
const r = require("readline-sync");
const REGISTROS = r.question("Cuántos números te tengo que pedir? ");
if (isNaN(REGISTROS)) process.exit(-1);
let array = [];
for (i = 0; i < REGISTROS; i++) {
    let n = r.question(`Número en la posición ${i}: `);
    array.push(n);
}

//Menú
let salir = false;
while (salir == false) {
    let opcion;
    do {
        opcion = r.question(`--Menú mágico-- 
    1 Sumar valores
    2 Sacar la media
    3 Listar
    4 Salir
    
    Elige una opción: `);
    } while (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4)

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + Number(array[i]);
    }

    //Opción 1
    if (opcion == 1) console.log(suma);

    //Opción 2
    if (opcion == 2) console.log(suma / i);

    //Opción 3
    if (opcion == 3) {
        for (let value of array) {
            console.log(value);
        }
    }

    //Opción 4
    if (opcion == 4) salir = true;
}