var lienzo = null, canvas = null;
//var x = 50, y = 50;
//var player = new Rectangle(40, 40, 10, 10, "#264f11");
var body = [];
body[0] = new Rectangle(40, 40, 10, 10, "#264f11");
var food = new Rectangle(80, 80, 10, 10, "#f70e26");
var lastPress = null;
const KEY_ENTER = 13;
const KEY_P = 80;
const KEY_LEFT = 65;
const KEY_UP = 87;
const KEY_RIGHT = 68;
const KEY_DOWN = 83;
const ARRIBA = 0;
const DERECHA = 1;
const ABAJO = 2;
const IZQUIERDA = 3;
var dir = DERECHA;
var pause = true;
var score = 0;
var gameover = true;
/*
var wall = [];
wall.push(new Rectangle(100, 50, 10, 10, "#999"));
wall.push(new Rectangle(100, 100, 10, 10, "#999"));
wall.push(new Rectangle(200, 50, 10, 10, "#999"));
wall.push(new Rectangle(200, 100, 10, 10, "#999"));
*/

function random(max) {
    return Math.floor(Math.random() * max);
}

function Rectangle(x, y, width, height, color) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.color = (color == null) ? "#000" : color;
}
Rectangle.prototype.intersects = function (rect) {
    if (rect != null) {
        return (this.x < rect.x + rect.width &&
            this.x + this.width > rect.x &&
            this.y < rect.y + rect.height &&
            this.y + this.height > rect.y);
    }
}
Rectangle.prototype.fill = function (lienzo) {
    if (lienzo != null) {
        lienzo.fillStyle = this.color;
        lienzo.fillRect(this.x, this.y, this.width, this.height);
    }
}

function iniciar() {
    canvas = document.getElementById('lienzo');
    lienzo = canvas.getContext('2d');
    run();
    repaint();
}
function run() {
    setTimeout(run, 20);
    act();
}
function repaint() {
    requestAnimationFrame(repaint)
    paint(lienzo);
}
function act() {
    if (gameover && lastPress == KEY_ENTER) { reset(); }
    if (lastPress == KEY_P) {
        pause = !pause;
        lastPress = null;
    }
    if (!pause && !gameover) {
        if (body[0].intersects(food)) {
            score++;
            food.x = random(canvas.width / 10 - 1) * 10;
            food.y = random(canvas.height / 10 - 1) * 10;
            for(let i = 0; i < 8; i++){
            body.push(new Rectangle(-10, -10, 10, 10, "#264f11"));
            }
        }

        if (lastPress == KEY_UP && dir != ABAJO) dir = ARRIBA;
        if (lastPress == KEY_RIGHT && dir != IZQUIERDA) dir = DERECHA;
        if (lastPress == KEY_DOWN && dir != ARRIBA) dir = ABAJO;
        if (lastPress == KEY_LEFT && dir != DERECHA) dir = IZQUIERDA;

        if (dir == DERECHA) body[0].x += 10;
        if (dir == IZQUIERDA) body[0].x -= 10;
        if (dir == ARRIBA) body[0].y -= 10;
        if (dir == ABAJO) body[0].y += 10;

        if (body[0].x >= canvas.width) body[0].x = 0;
        if (body[0].y >= canvas.height) body[0].y = 0;
        if (body[0].x < 0) body[0].x = canvas.width - 10;
        if (body[0].y < 0) body[0].y = canvas.height - 10;
    }
}
function reset() {
    score = 0;
    dir = DERECHA;
    body[0].x = 40;
    body[0].y = 40;
    food.x = random(canvas.width / 10 - 1) * 10;
    food.y = random(canvas.height / 10 - 1) * 10;
    lastPress = null;
    gameover = false;
    body.length = 0;
    body.push(new Rectangle(40, 40, 10, 10, "#264f11"));
}
function paint(lienzo) {
    var gradiente = lienzo.createLinearGradient(0, 0, 0, canvas.height);
    gradiente.addColorStop(0.5, '#f9e6c5');
    gradiente.addColorStop(1, '#d3bf9c');
    lienzo.fillStyle = gradiente;
    lienzo.fillRect(0, 0, canvas.width, canvas.height);
    lienzo.fillStyle = '#387729';
    //lienzo.fillRect(x, y, 10, 10);
    //lienzo.fillText('Last Press: ' + lastPress, 10, 30);
    var gradientPuntos = lienzo.createLinearGradient(0, 0, canvas.width, 0);
    gradientPuntos.addColorStop("0", "#1f0b30");
    lienzo.fillStyle = gradientPuntos;
    lienzo.font = "25px Georgia";
    lienzo.fillText('Puntuación: ' + score, 700, 45);
    body[0].fill(lienzo);
    food.fill(lienzo);

    /*
    for (var i = 0, l = wall.length; i < l; i++) {
        wall[i].fill(lienzo);
    }
    for (var i = 0; i < wall.length; i++) {
        if (food.intersects(wall[i])) {
            food.x = random(canvas.width / 10 - 1) * 10;
            food.y = random(canvas.height / 10 - 1) * 10;
        }
        if (body[0].intersects(wall[i])) { gameover = true; }
    }*/

    for (var i = 0; i < body.length; i++) {
        body[i].fill(lienzo);
    }
    for (var i = body.length - 1; i > 0; i--) {
        body[i].x = body[i - 1].x;
        body[i].y = body[i - 1].y;
    }
    for (var i = 5; i < body.length; i++) {
        if (body[0].intersects(body[i])) {
            gameover = true;
        }
    }

    if (pause || gameover) {
        var gradientText = lienzo.createLinearGradient(0, 0, canvas.width, 0);
        gradientText.addColorStop("0", " magenta");
        gradientText.addColorStop("0.5", "blue");
        gradientText.addColorStop("1.0", "red");
        lienzo.fillStyle = gradientText;
        lienzo.font = "65px Georgia";
        lienzo.textAlign = 'center';
        if (gameover) {
            lienzo.fillText('GAME OVER', 375, 195);
        } else lienzo.fillText('PAUSA', 130, 75);
    }
}
window.addEventListener("load", iniciar, false);
document.addEventListener('keydown', function (evt) { lastPress = evt.keyCode; }, false);