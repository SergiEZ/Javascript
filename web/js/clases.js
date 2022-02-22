function cuadrado(lado){
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