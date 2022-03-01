const r = require("readline-sync");
function calcularSuma() {
    var datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var suma = 0;
    /*
    * Realiza un bucle que sume el contenido de datos.
    * 1+2+3+4+5+6+7+8+9+10
    */
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i];
    }
    return suma;
}

//console.log(calcularSuma());

function calcularSuma_2(datos) {
    var suma = 0;
    for (let i = 0; i < datos.length; i++) {
        suma += datos[i];
    }
    return suma;
}

//console.log(calcularSuma_2([1,2,3,4,5,6,7,8,9,10]));

var datos = "uno;dos;tres;cuatro;cinco;seis";
function dataToArray(data) {
    /* convertir data en un array: [uno, dos, tres, ... seis] */
    let array = data.split(";");
    return array;
}

let array_datos = dataToArray(datos);
//console.log(array_datos);

function es_multiplo_2_5() {
    var txt_n = "";
    // Crear un bucle que pida un número y valide la entrada
    // una vez que hemos validado que n es numérico y está entre 0 y 100
    //... calcular si es múltilo de 2 y/o de 5 y mostrarlo al usuario
    let valido = false;
    do {
        let n = r.question(`Dime un número entre 0 y 100: `);
        txt_n = Number(n);
        if (n >= 0 && n <= 100 && isNaN(txt_n) != true) {
            valido = true;
            if(txt_n % 2 == 0) console.log(txt_n + " es múltiplo de 2.");
            if(txt_n % 5 == 0) console.log(txt_n + " es múltiplo de 5.");
        }
    } while (valido == false)
}

//es_multiplo_2_5();

function tabla_multiplicar(n){
let tabla = [];
for(let i = 1; i <= 10; i++){
    tabla[i-1] = n * i;
}
return tabla;
}
var array_tabla = tabla_multiplicar(5);
console.log(array_tabla);
// debe sacar por pantalla: [5,10,15,20,25,30,35,40,45,50]