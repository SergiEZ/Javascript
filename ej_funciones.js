//1.-Crea una función Potencia a la que pasemos dos parámetros x e y.
//Debe devolever x elevado a la y.
var x, y;
function potencia(x, y) {
    let z = x ** y;
    return z;
}
console.log(potencia(3, 2));
//2.-Crea una función a la que le pasemos un número y un símbolo y dibuje
//un cuadrando de lado n con el símbolo. Ejemplo de n=4 y símbolo = ’*’:
var n = 4;
var s = "*";
function dibujaCuadrado(n, s) {
    let cadena = "";
    for (let i = 0; i < n; i++) {
        cadena += s;
    }
    cadena += "\n";
    for (let j = 0; j < n - 2; j++) {
        cadena += s;
        for (let k = 0; k < n - 2; k++) {
            cadena += " ";
        }
        cadena += s + "\n";
    }
    for (let i = 0; i < n; i++) {
        cadena += s;
    }
    return cadena;
}
console.log(dibujaCuadrado(n, s));
//3.-Crea una función revisarCadena a la que le pasemos una cadena (con una palabra) 
//en minúsculas y una letra y nos devuelva un array con las posiciones en las que 
//se encuentra la letra: 
//ejemlo: revisarCadena(‘pepita’, p)
//devolverá un array [0,3]
var cadena = "australopitecus";
var c = "u";
function revisarCadena(cadena, c) {
    let posiciones = [];
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == c) posiciones.push(i);
    }
    return posiciones;
}
console.log(revisarCadena(cadena, c));
//4.-. Crea una función a la que le pasemos un array con palabras,
//la función debe devolver una de las palabras del array al azar
var palabras = ["Crepúsculo", "Adefesio", "Intrínseco", "Concienzudo"];
function randomizer(palabras){
    let aleatorio = Math.ceil(Math.random()*palabras.length);
    return palabras[aleatorio-1];
}
console.log(randomizer(palabras));
//5.-Crea una función a la que le pasemos un array de letras y una letra y
//nos devuelva verdadero si la letra ya estaba en el array y falso en caso contrario
var letras = "kamikaze";
var letra = "e";
function detectorLetras(letras, letra){
    let verificar = false;
    for(let i = 0; i < letras.length; i++){
        if(letra == letras[i]) verificar = true;
    }
    return verificar;
}
console.log(detectorLetras(letras, letra));
//6.-Crea una función a la que le pasemos un array de letras y una letra y 
//nos devuelva el array añadiendo la nueva letra si no estaba. 
//Si ya estaba no añade nada.
var letras2 = ["a", "b", "c", "d"];
var letra2 = "c";
function listaLetras(letras2, letra2){
    let verificar = false;
    for(let i = 0; i < letras2.length; i++){
        if(letra2 == letras2[i]) verificar = true;
    }
    if(!verificar) letras2.push(letra2);
    return letras2;
}
console.log(listaLetras(letras2, letra2));
//7.-Crea una función a la que le pasemos una cadena y un array de letras y
//nos tiene que devolver una cadena con las letras de la cadena original que 
//están en el array, el resto con el sigo ’_‘. Ejemplo:
//patron(’pepita’, [‘p’,‘i’]) –> ’p_pi__’
var letras3 = ["n", "o", "t", "s"];
var palabro = "contorsionismo";
function ahorcado(letras3, palabro){
    let colgado = "";
    for(let i = 0; i < palabro.length; i++){
        for(let j = 0; j < letras3.length; j++){
            if(letras3[j] == palabro[i]) {
            colgado += letras3[j];
            }
            //wrong
             else colgado += "_";
        }
    }
    return colgado;
}
console.log(ahorcado(letras3, palabro));