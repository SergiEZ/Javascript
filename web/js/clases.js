/*function cuadrado(lado){
    this.lado = lado;
    this.perimetro = function(){
        return this.lado * 4;
    }
    this.area = function(){
        return this.lado ** 2; //Math.pow(this.lado, 2);
    }
    this.cambiarLado = function(newLado){
        this.lado = newLado;
    }
}

function rectangulo(base, altura){
    this.base = base;
    this.altura = altura;
    this.perimetro = function(){
        return (this.base * 2) + (this.altura * 2);
    }
    this.area = function(){
        return this.base * this.altura;
    }
    this.cambiarBA = function(newLadoa, newLadob){
        this.base = newBase;
        this.altura = newAltura;
    }
    //setter i getters moodle classe
}

var cuadrado1 = new cuadrado(25);
console.log(cuadrado1.perimetro() + ":" + cuadrado1.area());
var rectangulo1 = new rectangulo(2,3);
console.log(rectangulo1.perimetro() + ":" + rectangulo1.area());
*/

//Tornar la cadena amb les paraules del revés
let a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
/*let cut = a.split(" ");
let final = "";
for(let i = cut.length; i > 0; i--){
    final += cut[i-1] + " ";
} 
console.log(final);*/
//tornar posició dels lo
let posiciones = new Array();
let minus = a.toLowerCase();
let pos = minus.indexOf("lo");
let big = minus;
while(pos != -1){
    posiciones.push(pos);
    pos = a.toLowerCase().indexOf("lo", posiciones[posiciones.length-1] + 1);
    big = big.replace("lo", "LO");
}

console.log(posiciones);
console.log(big);