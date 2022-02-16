let cadena = "()4*(2/4))(";
let parentesis = [];
let a = "(";
let c = ")";

for(let i = 0; i < cadena.length; i++){
    if(cadena[i] == a) parentesis.push(cadena[i]);
    if(cadena[i] == c && parentesis[parentesis.length - 1] == a) parentesis.pop();
}

console.log(parentesis);
if(parentesis[0] == a) error();
else correcto();

function error(){
    console.log(cadena + " No está bien expresado.");
} 

function correcto(){
    console.log(cadena + " Está expresado correctamente.");
}