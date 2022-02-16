let rojo = 200;
let verde = 45;
let azul = 187;

function canalDominante(r, g, b){
    let dominante = "";

    if (r > g && r > b) dominante = "Rojo";
    else if (g > r && g > b) dominante = "Verde";
    else dominante = "Azul";

    return dominante;
}

function colorAleatorio(){
    color = [];
    for(let i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random() * (255 - 0));
    }
    return color;
}

function conversorBytes(b){
    let kb = b / 1024;
    return kb;
}
console.log(canalDominante(rojo, verde, azul));
console.log(colorAleatorio());
console.log(conversorBytes(2048));