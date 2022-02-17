/*
function comprovaParentesis(cadena) {
    let parentesis = [];
    let a = "(";
    let c = ")";
    let error = "e";
    let res;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == c && cadena[i - 1] == a)
            parentesis.push(error);
        if (cadena[i] == c && parentesis[parentesis.length - 1] != a)
            parentesis.push(error);
        if (cadena[i] == c && parentesis[parentesis.length - 1] == a)
            parentesis.pop();
        if (cadena[i] == a)
            parentesis.push(cadena[i]);
    }

    if (parentesis.length != 0) res = " No está bien expresado.";
    else res = " Está expresado correctamente.";

    return res;
}

let expr = "(a+(b/c)-d*(g/h))+(f/s)";
console.log(expr + comprovaParentesis(expr));
*/
let parentesis = [];
let a = "(";
let c = ")";
let error = "e";
let res;
function comprovaParentesis(cadena) {


    for (let i = 0; i < cadena.length; i++) {
        comprovaBuit();
        comprovaCorrecte();
        netejaObert();
        comprovaObert();
    }

    if (parentesis.length != 0) res = " No está bien expresado.";
    else res = " Está expresado correctamente.";

    return res;
}

function comprovaBuit() {
    if (cadena[i] == c && cadena[i - 1] == a)
        parentesis.push(error);
}

function comprovaCorrecte() {
    if (cadena[i] == c && parentesis[parentesis.length - 1] != a)
        parentesis.push(error);
}

function netejaObert() {
    if (cadena[i] == c && parentesis[parentesis.length - 1] == a)
        parentesis.pop();
}

function comprovaObert() {
    if (cadena[i] == a)
        parentesis.push(cadena[i]);
}

let expr = "(a+(b/c)-d*(g/h))+(f/s)";
console.log(expr + comprovaParentesis(expr));